import { CustomButton } from '@/../../packages/theme-and-components/dist';
import { Button } from '@chakra-ui/react';
import Head from 'next/head';
import { trpc } from '@/utils/client';

export default function Home() {
  async function lol() {
    console.log(await trpc.getUserHaha.query({ getreq: 'lol' }));
  }

  lol();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Button variant={'solid'}>hello</Button>
        <CustomButton />
      </main>
    </>
  );
}
