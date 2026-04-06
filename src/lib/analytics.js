/**
 * ANALYTICS TRACKING UTILITY
 * ────────────────────────────
 * Centralized event tracking for conversion actions.
 * Supports Google Analytics gtag() out of the box.
 * 
 * Usage:
 *   import { trackEvent } from '@/lib/analytics';
 *   trackEvent('appointment_form_submit', { service: 'Teeth Whitening' });
 */

/**
 * Sends a custom event to Google Analytics (gtag).
 * Fails silently if GA is not loaded.
 *
 * @param {string} eventName - The event name (e.g., 'call_button_click')
 * @param {Object} [params] - Optional event parameters
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

/**
 * Pre-defined conversion events for easy integration.
 */
export const EVENTS = {
  // Appointment / Form
  FORM_SUBMIT: 'appointment_form_submit',
  FORM_ERROR: 'appointment_form_error',

  // Contact Actions
  CALL_CLICK: 'call_button_click',
  WHATSAPP_CLICK: 'whatsapp_button_click',

  // CTA Interactions
  CTA_HERO_PRIMARY: 'cta_hero_primary',
  CTA_HERO_SECONDARY: 'cta_hero_secondary',
  CTA_STICKY_MOBILE_CALL: 'cta_sticky_call',
  CTA_STICKY_MOBILE_WHATSAPP: 'cta_sticky_whatsapp',
  CTA_STICKY_MOBILE_BOOK: 'cta_sticky_book',
  CTA_FLOATING_CALL: 'cta_floating_call',
  CTA_FLOATING_WHATSAPP: 'cta_floating_whatsapp',
  CTA_FINAL: 'cta_final_section',
  CTA_OFFER: 'cta_offer_claim',

  // Navigation
  SERVICE_CARD_CLICK: 'service_card_click',
};
