import { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppText } from '@/components/ui/AppText';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { useTheme } from '@/design/useTheme';

export default function HomeScreen() {
  const { colors, spacing } = useTheme();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const emailError =
    email.length > 0 && !email.includes('@')
      ? 'Please enter a valid email address.'
      : undefined;

  const fakeLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ padding: spacing.xl, gap: spacing.lg }}
      >
        <AppText variant="display">Dating App</AppText>
        <AppText color="textSecondary">
          Design system preview. This screen is temporary.
        </AppText>

        <Card style={{ gap: spacing.lg }}>
          <AppText variant="heading">Sign in</AppText>
          <Input
            label="Email"
            placeholder="you@example.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            error={emailError}
            hint="We will send you a verification code."
          />
          <Button label="Continue" onPress={fakeLoad} loading={loading} />
        </Card>

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