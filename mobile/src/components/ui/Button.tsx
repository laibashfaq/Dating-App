import { ActivityIndicator, Pressable, StyleSheet } from 'react-native';

import type { ColorTokens } from '@/design/colors';
import { useTheme } from '@/design/useTheme';

import { AppText } from './AppText';

type Variant = 'primary' | 'secondary' | 'ghost';

type Props = {
  label: string;
  onPress: () => void;
  variant?: Variant;
  loading?: boolean;
  disabled?: boolean;
};

export function Button({
  label,
  onPress,
  variant = 'primary',
  loading = false,
  disabled = false,
}: Props) {
  const { colors, spacing, radius } = useTheme();
  const inactive = disabled || loading;

  const backgroundColor =
    variant === 'primary'
      ? colors.primary
      : variant === 'secondary'
        ? colors.surface
        : 'transparent';

  const pressedColor =
    variant === 'primary' ? colors.primaryPressed : colors.surfaceMuted;

  const textColorKey: keyof ColorTokens =
    variant === 'primary' ? 'onPrimary' : variant === 'secondary' ? 'textPrimary' : 'primary';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled: inactive, busy: loading }}
      disabled={inactive}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        {
          paddingHorizontal: spacing.xl,
          borderRadius: radius.pill,
          backgroundColor: pressed ? pressedColor : backgroundColor,
          borderColor: variant === 'secondary' ? colors.border : 'transparent',
          opacity: disabled && !loading ? 0.5 : 1,
        },
      ]}
    >
      {loading ? (
        <ActivityIndicator color={colors[textColorKey]} />
      ) : (
        <AppText variant="button" color={textColorKey}>
          {label}
        </AppText>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
});