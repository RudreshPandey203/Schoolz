"use client"
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
const LoginFormTeacher = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await signIn("credentials", {
        email,
        password,
        redirect:false
      })
      if(res.error){
        setError("Invalid credentials");
      }
      else
{      router.replace(`/teacherLogin/${email}/`);
}    }
    catch(error){
      setError("Invalid credentials");
    }
  }

  return (
<div className="grid place-items-center h-screen bg-cover" style={{ backgroundImage: "url('/classroom.jpeg')" }}>
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-yellow-400 backdrop-filter backdrop-blur-sm text-center">
        <h1 className="font-bold my-4 text-5xl text-yellow-400">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 px-4 py-3">
          <input
            type="text"
            placeholder="Username"
            className="p-2 border-2 rounded-md border-gray-400 outline-none"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border-2 rounded-md border-gray-400 outline-none"
            onChange = {(e)=>{setPassword(e.target.value)}}
          />
          <button
            type="submit"
            className="p-2 bg-yellow-400 rounded-md text-white font-bold cursor-pointer px-6 py-2"
          >
            Login
          </button>
          {error && (        <div className="flex flex-col gap-3 px-4 py-3">{error}</div>
)}
        <Link href={"/teacherLogin/register"}>
            Dont have an account? <span className="underline">Register here</span>.
            </Link>
            </form>

      </div>
    </div>
  );
};

export default LoginFormTeacher;
