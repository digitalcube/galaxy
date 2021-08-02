import { AppProps } from 'next/app';
import Head from 'next/head';
import { Galaxy } from '@galaxy/ui';
import { HeaderSimple } from '@galaxy/ui-marketing';
import 'tailwindcss/tailwind.css';

function App({ Component, pageProps }: AppProps) {
  const altTheme = {
    button: {
      size: {
        large: 'bg-[#ff6600]',
      },
    },
  };

  return (
    <Galaxy usePreferences theme={altTheme}>
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
    </Galaxy>
  );
}

export default App;
