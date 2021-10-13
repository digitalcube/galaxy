import { AppProps } from 'next/app';
import { Galaxy, Head } from '@galaxy/ui';
import { Header } from '@galaxy/ui-marketing';
import 'tailwindcss/tailwind.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <Galaxy>
      <Head />
      <Header />
      <body>
        <main>
          <Component {...pageProps} />
        </main>
      </body>
    </Galaxy>
  );
}

export default App;
