import { View } from 'react-native';

import { brand } from '@/config/brand';
import { useTheme } from '@/design/useTheme';

import { AppText } from './ui/AppText';

// Placeholder logo. Replace with the real logo once the brand is chosen.
export function BrandMark({ size = 88 }: { size?: number }) {
  const { colors } = useTheme();

  return (
    <View
      accessibilityRole="image"
      accessibilityLabel={`${brand.name} logo`}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: colors.primary,
        borderWidth: 3,
        borderColor: colors.accent,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <AppText
        variant="display"
        color="onPrimary"
        style={{ fontSize: size * 0.45, lineHeight: size * 0.55 }}
      >
        {brand.initial}
      </AppText>
    </View>
  );
}