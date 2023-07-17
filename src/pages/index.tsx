import { type NextPage } from "next";
import Head from "next/head";

import { Form } from "~/components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>OTP Password</title>
        <meta title="description" content="OTP password with react hook form" />
      </Head>
      <div className="relative flex min-h-screen flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold">Enter Code</h1>
        <p className="text-zinc-500">We sent OTP code to your email address</p>

        <Form />
      </div>
    </>
  );
};

export default Home;
