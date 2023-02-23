import { CustomButton } from '@/../../packages/theme-and-components/dist';
import { Button } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Button colorScheme={'facebook'}>hello</Button>
        <CustomButton />
      </main>
    </>
  );
}
