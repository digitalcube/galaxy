import { AppProps } from 'next/app';
import { Head } from '@galaxy/utils';
import { Galaxy } from '@galaxy/ui';
import 'tailwindcss/tailwind.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <Galaxy>
      <Head />
      <main className="bg-background-light">
        <Component {...pageProps} />
      </main>
    </Galaxy>
  );
}

export default App;
