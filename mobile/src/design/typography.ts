// Text style tokens. No custom font yet: the phone's system font is used.

export const typography = {
  display: { fontSize: 34, lineHeight: 42, fontWeight: '700' },
  title: { fontSize: 24, lineHeight: 32, fontWeight: '700' },
  heading: { fontSize: 18, lineHeight: 26, fontWeight: '600' },
  body: { fontSize: 16, lineHeight: 24, fontWeight: '400' },
  bodyStrong: { fontSize: 16, lineHeight: 24, fontWeight: '600' },
  caption: { fontSize: 13, lineHeight: 18, fontWeight: '400' },
  button: { fontSize: 16, lineHeight: 22, fontWeight: '600' },
} as const;

export type TypographyVariant = keyof typeof typography;