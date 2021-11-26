import { AppProps } from 'next/app';
import { Galaxy, Head } from '@galaxy/ui';
import 'tailwindcss/tailwind.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <Galaxy>
      <Head />
      <main>
        <Component {...pageProps} />
      </main>
    </Galaxy>
  );
}

export default App;
