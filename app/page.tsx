import { request } from "http";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 min-h-screen">
      <div className="flex flex-col items-center gap-2">
        <span className="text-9xl ">🥕</span>
        <h1 className="font-medium text-4xl">KARROTZ</h1>
        <h2 className="font-normal text-2xl">Welcome to Karrot market</h2>
      </div>
      <div className="flex flex-col gap-1">
        <div className="primary-btn">
          <Link href="/create-account" className="text-white no-underline">
            START
          </Link>
        </div>
        <div className="gap-3 flex justify-between items-center">
          <span>Did you have an account?</span>
          <Link href="/login" className="underline text-orange-500">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
