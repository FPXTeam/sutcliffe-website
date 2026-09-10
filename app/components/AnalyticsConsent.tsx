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

export default function AnalyticsConsent() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [ready, setReady] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setChoice(readConsent());
    setReady(true);

    const openSettings = () => setSettingsOpen(true);
    window.addEventListener(SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(SETTINGS_EVENT, openSettings);
  }, []);

  useEffect(() => {
    if ((ready && choice === null) || settingsOpen) {
      window.requestAnimationFrame(() => headingRef.current?.focus());
    }
  }, [choice, ready, settingsOpen]);

  function saveChoice(nextChoice: Exclude<ConsentChoice, null>) {
    window.localStorage.setItem(STORAGE_KEY, nextChoice);
    setChoice(nextChoice);
    setSettingsOpen(false);
  }

  const showDialog = ready && (choice === null || settingsOpen);
  const analyticsAllowed = ready && choice === "analytics" && Boolean(measurementId);

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
