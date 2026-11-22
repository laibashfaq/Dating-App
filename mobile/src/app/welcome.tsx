import { Alert, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BrandMark } from '@/components/BrandMark';
import { AppText } from '@/components/ui/AppText';
import { Button } from '@/components/ui/Button';
import { brand } from '@/config/brand';
import { useTheme } from '@/design/useTheme';

// Placeholder copy. Do not promise features here until they are built.
const points = [
  {
    title: 'Verified profiles',
    text: 'People confirm who they are before meeting others.',
  },
  {
    title: 'Meaningful matches',
    text: 'Connect through shared values and relationship goals.',
  },
  {
    title: 'Private and respectful',
    text: 'You control what you share and who can see it.',
  },
];

export default function WelcomeScreen() {
  const { colors, spacing, radius } = useTheme();

  const comingSoon = () =>
    Alert.alert('Coming soon', 'Registration and login are built in Phase 3.');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View
        style={{
          flex: 1,
          padding: spacing.xl,
          justifyContent: 'space-between',
        }}
      >
        <Animated.View
          entering={FadeInDown.duration(500)}
          style={{ gap: spacing.md, paddingTop: spacing.xxl }}
        >
          <BrandMark size={72} />
          <AppText variant="display">{brand.name}</AppText>
          <AppText variant="heading" color="textSecondary">
            {brand.tagline}
          </AppText>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(150).duration(500)}
          style={{ gap: spacing.lg }}
        >
          {points.map((point) => (
            <View
              key={point.title}
              style={{ flexDirection: 'row', gap: spacing.md }}
            >
              <View
                style={{
                  width: 10,
                  height: 10,
                  marginTop: 8,
                  borderRadius: radius.pill,
                  backgroundColor: colors.accent,
                }}
              />
              <View style={{ flex: 1 }}>
                <AppText variant="bodyStrong">{point.title}</AppText>
                <AppText variant="caption" color="textSecondary">
                  {point.text}
                </AppText>
              </View>
            </View>
          ))}
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(300).duration(500)}
          style={{ gap: spacing.md }}
        >
          <Button label="Create account" onPress={comingSoon} />
          <Button label="Log in" variant="secondary" onPress={comingSoon} />
          <AppText
            variant="caption"
            color="textMuted"
            style={{ textAlign: 'center' }}
          >
            You must be 18 or older to use this app.
          </AppText>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}