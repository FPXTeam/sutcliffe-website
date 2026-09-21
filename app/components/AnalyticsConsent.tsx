"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type ConsentChoice = "analytics" | "essential" | null;

const STORAGE_KEY = "sutcliffe-cookie-consent";
const SETTINGS_EVENT = "sutcliffe:open-cookie-settings";

function readConsent(): ConsentChoice {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  return value === "analytics" || value === "essential" ? value : null;
}

function gtagEvent(name: string, params: Record<string, string> = {}) {
  const win = window as Window & { gtag?: (...args: unknown[]) => void };
  win.gtag?.("event", name, params);
}

export default function AnalyticsConsent() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [ready, setReady] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setChoice(readConsent());
    setReady(true);
    const openSettings = () => setSettingsOpen(true);
    window.addEventListener(SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(SETTINGS_EVENT, openSettings);
  }, []);

  const showDialog = ready && (choice === null || settingsOpen);
  const analyticsAllowed = ready && choice === "analytics" && Boolean(measurementId);

  useEffect(() => {
    if (!showDialog) return;

    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => headingRef.current?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && settingsOpen && choice !== null) {
        event.preventDefault();
        setSettingsOpen(false);
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => !element.hasAttribute("hidden"));

      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && (document.activeElement === first || document.activeElement === headingRef.current)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      window.requestAnimationFrame(() => previousFocusRef.current?.focus());
    };
  }, [showDialog, settingsOpen, choice]);

  useEffect(() => {
    if (!analyticsAllowed) return;

    const trackOutbound = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest("a[href]") as HTMLAnchorElement | null : null;
      if (!target) return;
      const href = target.getAttribute("href") || "";

      if (href.startsWith("mailto:")) {
        gtagEvent("email_click", { link_url: href });
      } else if (href.startsWith("tel:")) {
        gtagEvent("phone_click", { link_url: href });
      } else {
        try {
          const url = new URL(target.href);
          if (url.hostname === "www.fpx.nz" || url.hostname === "fpx.nz") {
            gtagEvent("fpx_sourcing_click", { link_url: url.href });
          } else if (url.hostname === "app.fpx.nz") {
            gtagEvent("fpx_app_click", { link_url: url.href });
          }
        } catch {
          return;
        }
      }
    };

    document.addEventListener("click", trackOutbound);
    return () => document.removeEventListener("click", trackOutbound);
  }, [analyticsAllowed]);

  function saveChoice(nextChoice: Exclude<ConsentChoice, null>) {
    window.localStorage.setItem(STORAGE_KEY, nextChoice);
    setChoice(nextChoice);
    setSettingsOpen(false);
  }

  return (
    <>
      {analyticsAllowed && measurementId && (
        <>
          <Script
            id="ga4-loader"
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-config" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('consent', 'default', {
                analytics_storage: 'granted',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied'
              });
              gtag('config', '${measurementId}', {
                anonymize_ip: true,
                allow_google_signals: false,
                allow_ad_personalization_signals: false
              });
            `}
          </Script>
        </>
      )}

      {showDialog && (
        <div className="consent-backdrop" role="presentation">
          <section
            ref={dialogRef}
            className="consent-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-consent-title"
            aria-describedby="cookie-consent-copy"
          >
            <p className="eyebrow">Privacy choices</p>
            <h2 id="cookie-consent-title" ref={headingRef} tabIndex={-1}>
              Cookies and analytics
            </h2>
            <p id="cookie-consent-copy">
              We use essential browser storage to remember your privacy choice. With your permission, we also use Google Analytics to understand how people use this website. Analytics is optional and will not load unless you allow it.
            </p>
            <div className="consent-actions">
              <button type="button" className="button button-dark" onClick={() => saveChoice("analytics")}>
                Allow analytics
              </button>
              <button type="button" className="button consent-secondary" onClick={() => saveChoice("essential")}>
                Essential only
              </button>
            </div>
            <div className="consent-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/cookies">Cookie Policy</a>
              {settingsOpen && choice !== null && (
                <button type="button" onClick={() => setSettingsOpen(false)}>Close</button>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export function CookieSettingsButton() {
  function openSettings() {
    window.dispatchEvent(new Event(SETTINGS_EVENT));
  }

  return (
    <button type="button" className="footer-legal-button" onClick={openSettings}>
      Cookie settings
    </button>
  );
}
