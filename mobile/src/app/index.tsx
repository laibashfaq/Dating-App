import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import { BrandMark } from '@/components/BrandMark';
import { AppText } from '@/components/ui/AppText';
import { brand } from '@/config/brand';
import { useTheme } from '@/design/useTheme';

export default function SplashScreen() {
  const router = useRouter();
  const { colors, spacing } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => router.replace('/welcome'), 1500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
      }}
    >
      <Animated.View
        entering={FadeIn.duration(700)}
        style={{ alignItems: 'center', gap: spacing.lg }}
      >
        <BrandMark size={104} />
        <AppText variant="title">{brand.name}</AppText>
      </Animated.View>
    </View>
  );
}