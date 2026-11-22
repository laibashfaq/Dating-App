import { useState } from 'react';
import { StyleSheet, TextInput, View, type TextInputProps } from 'react-native';

import { useTheme } from '@/design/useTheme';

import { AppText } from './AppText';

type Props = Omit<TextInputProps, 'style'> & {
  label: string;
  error?: string;
  hint?: string;
};

export function Input({
  label,
  error,
  hint,
  onFocus,
  onBlur,
  editable = true,
  ...rest
}: Props) {
  const { colors, spacing, radius, typography } = useTheme();
  const [focused, setFocused] = useState(false);

  const borderColor = error
    ? colors.danger
    : focused
      ? colors.primary
      : colors.border;

  return (
    <View style={{ gap: spacing.xs }}>
      <AppText variant="caption" color="textSecondary">
        {label}
      </AppText>

      <TextInput
        {...rest}
        accessibilityLabel={label}
        editable={editable}
        placeholderTextColor={colors.textMuted}
        onFocus={(event) => {
          setFocused(true);
          onFocus?.(event);
        }}
        onBlur={(event) => {
          setFocused(false);
          onBlur?.(event);
        }}
        style={[
          styles.input,
          typography.body,
          {
            color: colors.textPrimary,
            backgroundColor: colors.surface,
            borderColor,
            borderRadius: radius.md,
            paddingHorizontal: spacing.lg,
            opacity: editable ? 1 : 0.5,
          },
        ]}
      />

      {error ? (
        <AppText
          variant="caption"
          color="danger"
          accessibilityLiveRegion="polite"
        >
          {error}
        </AppText>
      ) : hint ? (
        <AppText variant="caption" color="textMuted">
          {hint}
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    minHeight: 52,
    borderWidth: 1,
  },
});