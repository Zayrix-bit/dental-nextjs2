import {
  Stethoscope,
  Sparkles,
  Activity,
  HeartPulse,
  ShieldPlus,
  ClockAlert,
  Microscope,
  Users,
  Smile,
  CreditCard,
  Baby,
  Syringe,
  ScanLine,
  Bone,
  Pill,
  Crown,
  Scissors,
  Eye,
  Zap,
  HandHeart,
  Calendar,
  Star,
  Award,
  ShieldCheck,
} from 'lucide-react';

/**
 * Icon Registry
 * Maps string keys from clinic configs to Lucide React components.
 * This avoids importing React components inside pure data config files.
 */
export const iconMap = {
  stethoscope: Stethoscope,
  sparkles: Sparkles,
  activity: Activity,
  'heart-pulse': HeartPulse,
  'shield-plus': ShieldPlus,
  'clock-alert': ClockAlert,
  microscope: Microscope,
  users: Users,
  smile: Smile,
  'credit-card': CreditCard,
  baby: Baby,
  syringe: Syringe,
  'scan-line': ScanLine,
  bone: Bone,
  pill: Pill,
  crown: Crown,
  scissors: Scissors,
  eye: Eye,
  zap: Zap,
  'hand-heart': HandHeart,
  calendar: Calendar,
  star: Star,
  award: Award,
  'shield-check': ShieldCheck,
};

/**
 * Resolves an icon key string to the corresponding Lucide React component.
 * Falls back to Stethoscope if the key is not found.
 */
export function resolveIcon(iconKey) {
  return iconMap[iconKey] || Stethoscope;
}
