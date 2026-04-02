/**
 * CONFIG RESOLVER
 * ───────────────
 * Reads NEXT_PUBLIC_CLINIC_KEY from environment
 * and exports the corresponding clinic configuration.
 *
 * Usage:
 *   import config from '@/config';
 *   // or
 *   import { getClinicConfig } from '@/config';
 */

import { clinicConfig as defaultClinic } from './clinics/default';
import { clinicConfig as smileStudio } from './clinics/smile-studio';

const clinics = {
  default: defaultClinic,
  'smile-studio': smileStudio,
};

/**
 * Returns the active clinic configuration based on the
 * NEXT_PUBLIC_CLINIC_KEY environment variable.
 * Falls back to the 'default' clinic if the key is unset or unrecognized.
 */
export function getClinicConfig() {
  const key = process.env.NEXT_PUBLIC_CLINIC_KEY || 'default';
  return clinics[key] || clinics.default;
}

/** The active clinic configuration */
const config = getClinicConfig();
export default config;
