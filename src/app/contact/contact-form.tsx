"use client";

import { useActionState } from "react";
import { inquire, type InquireState } from "./actions";

const initialState: InquireState = { status: "idle" };

const inputClass =
  "w-full border border-carbon/15 bg-white px-4 py-3 text-sm text-carbon placeholder:text-carbon/40 focus:border-cobalt focus:outline-none";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm text-red-600">
      {message}
    </p>
  );
}

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(inquire, initialState);

  if (state.status === "success") {
    return (
      <div role="status" className="border border-cobalt/50 bg-mist p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cobalt">
          Message sent
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-tight text-carbon">
          Thank you.
        </h2>
        <p className="mt-4 max-w-md leading-relaxed text-carbon/60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore.
        </p>
      </div>
    );
  }

  const err = (field: string) => state.fieldErrors?.[field];

  return (
    <form action={formAction} noValidate className="space-y-6">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="ct-name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-carbon/60">
            Name
          </label>
          <input id="ct-name" name="name" type="text" autoComplete="name" required placeholder="Your name"
            aria-invalid={!!err("name")} aria-describedby={err("name") ? "ct-name-error" : undefined}
            className={inputClass} />
          <FieldError id="ct-name-error" message={err("name")} />
        </div>
        <div>
          <label htmlFor="ct-email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-carbon/60">
            Email
          </label>
          <input id="ct-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com"
            aria-invalid={!!err("email")} aria-describedby={err("email") ? "ct-email-error" : undefined}
            className={inputClass} />
          <FieldError id="ct-email-error" message={err("email")} />
        </div>
      </div>
      <div>
        <label htmlFor="ct-message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-carbon/60">
          Message
        </label>
        <textarea id="ct-message" name="message" rows={5} required maxLength={2000} placeholder="How can we help?"
          aria-invalid={!!err("message")} aria-describedby={err("message") ? "ct-message-error" : undefined}
          className={inputClass} />
        <FieldError id="ct-message-error" message={err("message")} />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="bg-carbon px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-cobalt disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
