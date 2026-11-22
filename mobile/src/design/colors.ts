// Color tokens. Change the brand look here, in one place.
// These are default colors, not the final brand.

export const lightColors = {
  background: '#FAF7F2',
  surface: '#FFFFFF',
  surfaceMuted: '#F2EEE6',
  border: '#E4DED2',

  textPrimary: '#1C1B19',
  textSecondary: '#5E5A52',
  textMuted: '#8C877C',

  primary: '#0F6B5C',
  primaryPressed: '#0B5448',
  onPrimary: '#FFFFFF',

  accent: '#C69A3B',
  onAccent: '#1C1B19',

  success: '#2E7D4F',
  warning: '#B7791F',
  danger: '#C0392B',
  onDanger: '#FFFFFF',

  overlay: 'rgba(0, 0, 0, 0.5)',
};

export type ColorTokens = { [K in keyof typeof lightColors]: string };

export const darkColors: ColorTokens = {
  background: '#121412',
  surface: '#1B1E1B',
  surfaceMuted: '#242823',
  border: '#343A33',

  textPrimary: '#F4F1EA',
  textSecondary: '#C2BDB1',
  textMuted: '#8E897E',

  primary: '#3FB59F',
  primaryPressed: '#2E9A86',
  onPrimary: '#0B1F1B',

  accent: '#E0B65A',
  onAccent: '#1C1B19',

  success: '#4CAF74',
  warning: '#E0A63D',
  danger: '#E5675A',
  onDanger: '#1C1B19',

  overlay: 'rgba(0, 0, 0, 0.65)',
};