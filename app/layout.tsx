import { FunctionComponent, PropsWithChildren } from 'react';
import { Metadata } from 'next';
import { SimplePaletteColorOptions } from '@mui/material';
import { AppStoreProvider } from 'src/store';
import defaultTheme, { ThemeProvider } from 'src/theme';
import CurrentLayout from 'src/layout';
import './globals.css';
import { generalData } from 'src/generalData';

const THEME_COLOR = (defaultTheme.palette?.primary as SimplePaletteColorOptions)?.main || '#FFFFFF';

export const metadata: Metadata = {
  title: generalData.title,
  description: generalData.description,
  manifest: '/site.webmanifest',
  themeColor: THEME_COLOR,
  // TODO: Add Open Graph metadata
};

const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AppStoreProvider>
          <ThemeProvider>
            <CurrentLayout>{children}</CurrentLayout>
          </ThemeProvider>
        </AppStoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
