import Link from "next/link";
import type { ReactNode } from "react";

/**
 * The site's primary call to action: a full pill in Aegean Blue, or its
 * outline counterpart. Consolidates four hand-rolled variants that had
 * drifted apart on padding, shadow, and hover colour.
 *
 * Renders a single anchor, never a <button> nested inside a <Link>, which
 * is invalid HTML and confuses assistive technology.
 *
 * Sizes follow DESIGN.md: `md` is the documented 12px/32px pill; `lg` is the
 * hero's amplified version.
 */
type PillButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "md" | "lg";
  /** Opens in a new tab with the correct rel, for off-site destinations. */
  external?: boolean;
  className?: string;
  "aria-label"?: string;
  /** Fires on click, e.g. to close a menu the button sits inside. */
  onNavigate?: () => void;
};

const SIZE = {
  md: "px-8 py-3",
  lg: "px-10 py-4",
} as const;

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full text-lg font-medium active:translate-y-px";

export default function PillButton({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  "aria-label": ariaLabel,
  onNavigate,
}: PillButtonProps) {
  const isPrimary = variant === "primary";

  const variantClasses = isPrimary
    ? "bg-aegean text-white shadow-cta hover:bg-aegean-deep hover:shadow-cta-hover transition-[background-color,box-shadow,transform] duration-200"
    : "group relative isolate overflow-hidden border-2 bg-white border-aegean text-aegean hover:text-white transition-[color,transform] duration-300";

  const content = (
    <>
      {!isPrimary && (
        <span
          aria-hidden
          className="absolute inset-0 -z-10 bg-aegean origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
      )}
      {children}
    </>
  );

  const classes = `${BASE} ${SIZE[size]} ${variantClasses} ${className}`.trim();

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel} onClick={onNavigate}>
      {content}
    </Link>
  );
}
