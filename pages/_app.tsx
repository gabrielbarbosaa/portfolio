import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
import '../styles/globals.css';
import { Navigation } from '../components/ui/Header';
import { Footer } from '../components/ui/footer';

function MyApp({ Component, pageProps }: AppProps) {

  const links: any = [
    {link: 'home', label: 'Home'},
    {link: 'about', label: 'About'},
    {link: 'projects', label: 'Projects'},
    {link: 'contact', label: 'Contact'},
  ]

  return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Navigation links={links} />
        <Component {...pageProps} />
        <Footer links={links} />
      </MantineProvider>
  )
}

export default MyApp