import { signIn } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { FaGithub } from "react-icons/fa";

const LoginPage = () => {
  const router = useRouter();

  const { callbackUrl } = router.query;
  return (
    <div className="h-[70vh] flex flex-col items-center justify-center gap-4">
      <Head>
        <title> Login </title>
      </Head>
      <h1 className="text-xl">Login with your social account</h1>
      <button
        className="btn text-base"
        onClick={() =>
          signIn("github", {
            callbackUrl: callbackUrl || "https://pc-craftsman.vercel.app/",
          })
        }
      >
        <FaGithub /> Login With GitHub
      </button>
    </div>
  );
};

export default LoginPage;
