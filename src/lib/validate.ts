/** Trim, strip control characters, and collapse internal whitespace. */
export function sanitize(input: string): string {
  return input.replace(/[\u0000-\u001f\u007f]/g, "").replace(/\s+/g, " ").trim();
}

export function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

export function isPhone(value: string): boolean {
  return /^[+()\d\s-]{6,20}$/.test(value);
}

/** Honeypot field must stay empty — bots fill it, humans never see it. */
export function isHoneypotFilled(value: string): boolean {
  return value !== "";
}
