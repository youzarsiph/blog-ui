/**
 * Fonts
 */

import {
  Fira_Code,
  Fira_Sans_Extra_Condensed,
  Fira_Sans,
} from 'next/font/google'

const FiraCode = Fira_Code({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-code',
  fallback: [
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    'Liberation Mono',
    'Courier New',
    'monospace',
  ],
})

const FiraExtraCondensed = Fira_Sans_Extra_Condensed({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  fallback: [
    'ui-serif',
    'Georgia',
    'Cambria',
    'Times New Roman',
    'Times',
    'serif',
  ],
})

const FiraSans = Fira_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-sans',
  fallback: [
    'ui-sans-serif',
    'system-ui',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji',
  ],
})

const Fonts = {
  code: FiraCode,
  display: FiraExtraCondensed,
  sans: FiraSans,
}

export default Fonts
