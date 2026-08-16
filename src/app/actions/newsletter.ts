"use server";

import { isEmail, isHoneypotFilled, sanitize } from "@/lib/validate";

export type SubscribeState = {
  status: "idle" | "error" | "success";
  message?: string;
};

export async function subscribe(
  _prevState: SubscribeState,
  formData: FormData
): Promise<SubscribeState> {
  const email = sanitize(formData.get("email")?.toString() ?? "");
  const honeypot = formData.get("company")?.toString() ?? "";

  if (isHoneypotFilled(honeypot)) {
    return { status: "success" };
  }
  if (!email) {
    return { status: "error", message: "Please enter your email address." };
  }
  if (email.length > 254 || !isEmail(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  return { status: "success" };
}
