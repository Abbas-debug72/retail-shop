"use server";

import { isEmail, isHoneypotFilled, sanitize } from "@/lib/validate";

export type InquireState = {
  status: "idle" | "error" | "success";
  message?: string;
  fieldErrors?: Record<string, string>;
};

export async function inquire(
  _prevState: InquireState,
  formData: FormData
): Promise<InquireState> {
  const name = sanitize(formData.get("name")?.toString() ?? "");
  const email = sanitize(formData.get("email")?.toString() ?? "");
  const message = sanitize(formData.get("message")?.toString() ?? "");
  const honeypot = formData.get("company")?.toString() ?? "";

  if (isHoneypotFilled(honeypot)) {
    return { status: "success" };
  }

  const fieldErrors: Record<string, string> = {};
  if (name.length < 2 || name.length > 80) {
    fieldErrors.name = "Please enter your name.";
  }
  if (email.length > 254 || !isEmail(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (message.length < 10 || message.length > 2000) {
    fieldErrors.message = "Message must be between 10 and 2000 characters.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      fieldErrors,
    };
  }

  return { status: "success" };
}
