import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { FaGithub } from "react-icons/fa";

const LoginPage = () => {
  const router = useRouter();

  const { callbackUrl } = router.query;
  return (
    <div className="h-[70vh] flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl">Login with your social account</h1>
      <button
        className="btn text-base"
        onClick={() =>
          signIn("github", {
            callbackUrl: callbackUrl || "http://localhost:3000/",
          })
        }
      >
        <FaGithub /> Login With GitHub
      </button>
    </div>
  );
};

export default LoginPage;
