"use client";

import { useActionState } from "react";
import { subscribe, type SubscribeState } from "@/app/actions/newsletter";

const initialState: SubscribeState = { status: "idle" };

export default function NewsletterForm() {
  const [state, formAction, pending] = useActionState(subscribe, initialState);

  if (state.status === "success") {
    return (
      <p role="status" className="mt-4 border border-cobalt/50 bg-cobalt/10 px-4 py-3 text-sm text-white">
        Thank you — you&apos;re on the list.
      </p>
    );
  }

  return (
    <form action={formAction} className="mt-4" noValidate>
      <div className="flex border border-white/20 focus-within:border-cobalt">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Email address"
          aria-invalid={state.status === "error"}
          className="w-full min-w-0 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
        />
        <button
          type="submit"
          disabled={pending}
          className="shrink-0 bg-white px-5 text-xs font-semibold uppercase tracking-[0.16em] text-obsidian transition-colors hover:bg-cobalt hover:text-white disabled:opacity-60"
        >
          {pending ? "Joining…" : "Join"}
        </button>
      </div>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      {state.status === "error" && state.message ? (
        <p role="alert" className="mt-2 text-sm text-red-300">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
