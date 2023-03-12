import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const routers = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // add here
    }
  }, []);
  return <Component {...pageProps} />
}
