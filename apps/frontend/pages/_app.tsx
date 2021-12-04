import { AppProps } from 'next/app';
import { Head } from '@galaxy/utils';
import { Galaxy } from '@galaxy/ui';
import 'tailwindcss/tailwind.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <Galaxy>
      <Head
        title={`LabWorks`}
        icon={{ href: 'favicon-192x192.png', sizes: '192x192' }}
      />
      <main className="bg-background-light">
        <Component {...pageProps} />
      </main>
    </Galaxy>
  );
}

export default App;
