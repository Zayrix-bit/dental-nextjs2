/**
 * SITE DATA — Re-export Layer
 * ────────────────────────────
 * This file re-exports data from the active clinic configuration.
 * All existing imports like `import { services } from '@/data/siteData'`
 * will continue to work without any changes.
 *
 * The actual data lives in  src/config/clinics/<clinic-key>.js
 * and is resolved by        src/config/index.js
 */

import config from '@/config';
import { resolveIcon } from '@/config/iconMap';

// ── Site Info (contact, hours, etc.) ──
export const siteInfo = {
  name: config.name,
  phone: config.contact.phone,
  phoneRaw: config.contact.phoneRaw,
  email: config.contact.email,
  address: config.contact.address,
  hours: config.contact.hours,
  whatsappUrl: config.contact.whatsappUrl,
  mapEmbedUrl: config.contact.mapEmbedUrl,
};

// ── Navigation ──
export const navLinks = config.navLinks;

// ── Hero Stats ──
export const heroStats = config.hero.stats;

// ── Services (with icons resolved from string keys) ──
export const services = config.services.map((s) => ({
  ...s,
  icon: resolveIcon(s.iconKey),
}));

// ── Features / Why Choose Us ──
export const features = config.about.features.map((f) => ({
  ...f,
  icon: resolveIcon(f.iconKey),
}));

// ── Testimonials ──
export const testimonials = config.testimonials;

// ── Gallery ──
export const galleryData = config.gallery;

// ── FAQ ──
export const faqData = config.faq.items;

// ── All Services list (for forms/dropdowns) ──
export const ALL_SERVICES = config.allServicesList;

// ── Time Slots ──
export const TIME_SLOTS = config.booking.timeSlots;

// ── Footer Quick Links ──
export const footerQuickLinks = config.footerQuickLinks;

// ── Social Links ──
export const socialLinks = config.social;
