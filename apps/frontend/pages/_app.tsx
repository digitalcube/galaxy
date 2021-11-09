import { AppProps } from 'next/app';
import { Galaxy, Head } from '@galaxy/ui';
import 'tailwindcss/tailwind.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <Galaxy>
      <Head />
      <body>
        <main>
          <Component {...pageProps} />
        </main>
      </body>
    </Galaxy>
  );
}

export default App;
