import { useColorScheme } from 'react-native';

import { darkColors, lightColors } from './colors';
import type { ColorTokens } from './colors';
import { radius, shadow, spacing } from './spacing';
import { typography } from './typography';

// Returns the right colors for the phone's light or dark mode,
// plus the shared spacing, radius, shadow and typography tokens.
export function useTheme() {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';
  const colors: ColorTokens = isDark ? darkColors : lightColors;

  return { colors, spacing, radius, shadow, typography, isDark };
}