/**
 * Enhanced Conversions data normalization + hashing
 * (https://developers.google.com/google-ads/api/docs/conversions/upload-online).
 *
 * Split out from `googleAdsConversion.ts` (OAuth + upload transport) since
 * this is a distinct concern — normalization rules that deserve their own
 * test surface independent of the HTTP/auth plumbing.
 */
import { createHash } from 'crypto';

export function sha256Hex(input: string): string {
  return createHash('sha256').update(input, 'utf8').digest('hex');
}

/**
 * Enhanced Conversions email normalization: trim + lowercase always; for
 * gmail.com/googlemail.com additionally strip dots from the username and
 * drop a trailing `+…` suffix. Other domains are left as lowercase+trim
 * only — do NOT strip dots/plus there.
 */
export function normalizeEmailForHash(rawEmail: string): string | null {
  const email = rawEmail.trim().toLowerCase();
  const at = email.lastIndexOf('@');
  if (at <= 0 || at === email.length - 1) return null;

  const domain = email.slice(at + 1);
  if (domain !== 'gmail.com' && domain !== 'googlemail.com') {
    return email;
  }

  let username = email.slice(0, at);
  const plusIndex = username.indexOf('+');
  if (plusIndex !== -1) username = username.slice(0, plusIndex);
  username = username.replace(/\./g, '');
  return `${username}@${domain}`;
}

/**
 * E.164 for this form's bare 10-digit Indian mobile numbers. ASSUMPTION:
 * every number collected here is an Indian mobile (the form enforces
 * exactly 10 digits, no country selector) — prepends `+91` unconditionally.
 * Revisit if this form ever collects non-Indian numbers.
 */
export function normalizePhoneToE164(rawPhone: string): string | null {
  const digits = rawPhone.replace(/\D/g, '');
  if (digits.length !== 10) return null;
  return `+91${digits}`;
}

export type UserIdentifier =
  | { hashed_email: string; user_identifier_source: 'FIRST_PARTY' }
  | { hashed_phone_number: string; user_identifier_source: 'FIRST_PARTY' };

/**
 * Builds the `user_identifiers` array for Enhanced Conversions from
 * whichever of email/phone is present and valid. Only email/phone are
 * supported today — `address_info` needs a postal code this form doesn't
 * collect, so it's intentionally not built here rather than half-populated.
 */
export function buildUserIdentifiers(email?: string, phone?: string): UserIdentifier[] {
  const identifiers: UserIdentifier[] = [];

  const normalizedEmail = email ? normalizeEmailForHash(email) : null;
  if (normalizedEmail) {
    identifiers.push({
      hashed_email: sha256Hex(normalizedEmail),
      user_identifier_source: 'FIRST_PARTY',
    });
  }

  const normalizedPhone = phone ? normalizePhoneToE164(phone) : null;
  if (normalizedPhone) {
    identifiers.push({
      hashed_phone_number: sha256Hex(normalizedPhone),
      user_identifier_source: 'FIRST_PARTY',
    });
  }

  return identifiers;
}
