/** Shared error-to-string coercion — used by any server code that logs a caught `unknown`. */
export function errorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}
