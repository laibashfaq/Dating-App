import { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppText } from '@/components/ui/AppText';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/design/useTheme';

export default function HomeScreen() {
  const { colors, spacing } = useTheme();
  const [loading, setLoading] = useState(false);

  const fakeLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        contentContainerStyle={{ padding: spacing.xl, gap: spacing.lg }}
      >
        <AppText variant="display">Dating App</AppText>
        <AppText color="textSecondary">
          Design system preview. This screen is temporary.
        </AppText>

        <Button label="Primary button (tap me)" onPress={fakeLoad} loading={loading} />
        <Button label="Secondary button" variant="secondary" onPress={() => {}} />
        <Button label="Ghost button" variant="ghost" onPress={() => {}} />
        <Button label="Disabled button" disabled onPress={() => {}} />

        <AppText variant="caption" color="textMuted">
          Switch your phone between light and dark mode to compare.
        </AppText>
      </ScrollView>
    </SafeAreaView>
  );
}