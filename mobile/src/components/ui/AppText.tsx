import { Text, type TextProps } from 'react-native';

import type { ColorTokens } from '@/design/colors';
import type { TypographyVariant } from '@/design/typography';
import { useTheme } from '@/design/useTheme';

type Props = TextProps & {
  variant?: TypographyVariant;
  color?: keyof ColorTokens;
};

export function AppText({
  variant = 'body',
  color = 'textPrimary',
  style,
  ...rest
}: Props) {
  const { colors, typography } = useTheme();

  return (
    <Text
      {...rest}
      style={[typography[variant], { color: colors[color] }, style]}
    />
  );
}