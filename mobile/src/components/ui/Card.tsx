import { View, type ViewProps } from 'react-native';

import { useTheme } from '@/design/useTheme';

export function Card({ style, children, ...rest }: ViewProps) {
  const { colors, spacing, radius, shadow } = useTheme();

  return (
    <View
      {...rest}
      style={[
        {
          backgroundColor: colors.surface,
          borderRadius: radius.lg,
          borderWidth: 1,
          borderColor: colors.border,
          padding: spacing.lg,
        },
        shadow.card,
        style,
      ]}
    >
      {children}
    </View>
  );
}