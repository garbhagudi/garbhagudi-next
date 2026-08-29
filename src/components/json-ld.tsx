import React from 'react';

interface JsonLdProps {
  /** Stable script id, unique per page. */
  id: string;
  /**
   * The entity or graph to emit. Pass an object, never a pre-serialized string:
   * serializing here is what keeps a stray quote or newline in CMS copy from
   * producing invalid JSON (guide section 3.1).
   */
  data: unknown;
}

/**
 * Renders one JSON-LD script block. Must be used inside next/head.
 *
 * `<` is escaped so a CMS value containing `</script>` cannot break out of the
 * script element. JSON-LD parsers read the < escape as a plain `<`.
 */
const JsonLd: React.FC<JsonLdProps> = ({ id, data }) => {
  if (!data) return null;

  const json = JSON.stringify(data).replace(/</g, '\\u003c');

  return (
    <script
      id={id}
      key={id}
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
};

export default JsonLd;
