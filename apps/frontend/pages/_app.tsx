import { AppProps } from 'next/app';
import { Galaxy, Head } from '@galaxy/ui';
import { HeaderSimple } from '@galaxy/ui-marketing';
import 'tailwindcss/tailwind.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <Galaxy>
      <Head />
      <HeaderSimple />
      <main>
        <Component {...pageProps} />
      </main>
    </Galaxy>
  );
}

export default App;
