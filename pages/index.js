import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>Home Page</h1>

      <Link href='/users'>Users Page</Link>
    </div>
  );
}
