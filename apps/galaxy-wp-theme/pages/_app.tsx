import { AppProps } from 'next/app';
import Head from 'next/head';
import { HeaderSimple } from '@galaxy/ui-marketing';
import 'tailwindcss/tailwind.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Shifter</title>
        <link rel="stylesheet" href="https://use.typekit.net/rrt0shs.css" />
      </Head>
      <div>
        <HeaderSimple />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default App;
