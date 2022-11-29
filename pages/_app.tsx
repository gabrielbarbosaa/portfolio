import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
import '../styles/globals.css';
import { Navigation } from '../components/Header';
import { Footer } from '../components/footer';

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