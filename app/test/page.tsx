import { request } from "http";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Test() {
  return (
    <main className="bg-pink-50 h-screen flex items-center sm:bg-yellow-200 md:bg-purple-200 lg:bg-blue-400  flex-col gap-3 justify-center p-10">
      <div className="bg-white w-full shadow-lg p-5 rounded-2xl max-w-screen-sm">
        {["NICO", "ME", "YOU"].map((person, index) => (
          <div
            key={index}
            className="flex items-center gap-5 my-3 odd:bg-gray-500 p-2.5 group rounded-lg"
          >
            <div className="size-7 bg-blue-400 rounded-full" />
            <span className="text-lg font-medium group-hover:text-teal-300">
              {person}
            </span>
            <div className="size-6 bg-red-500 text-white flex items-center justify-center animate-spin rounded-full">
              <span>{index}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white w-full shadow-lg p-5 rounded-2xl max-w-screen-sm animate-pulse">
        {["NICO", "ME", "YOU"].map((person, index) => (
          <div
            key={index}
            className="flex items-center gap-5 my-3 odd:bg-cyan-500 p-2.5 rounded-lg"
          >
            <div className="size-7 bg-blue-400 rounded-full" />
            <div className="text-lg font-medium w-20 h-4 bg-slate-500 rounded-md"></div>
            <div className="size-6 bg-red-500 text-white flex items-center justify-center animate-spin rounded-full">
              <span></span>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white w-full shadow-lg p-5 rounded-2xl max-w-screen-sm dark:bg-gray-700 flex flex-col md:flex-row gap-2 *:outline-none group has-[.peer]:bg-green-100">
        <input
          type="email"
          placeholder="search here.."
          className="w-full rounded-full h-10 bg-gray-200 pl-4 py-6 
          ring ring-orange-200 ring-offset-8 ring-offset-red-300 focus:ring-orange-500 focus:ring-offset-2 transition-shadow
          placeholder:text-green-400 invalid:bg-red-300 invalid:focus:ring-red-500"
          required
        />
        <span className="text-red-500 font-medium hidden peer-invalid:block">
          Check needed
        </span>
        <span className="group-focus-within:block hidden text-lg bg-white">
          I SEE U
        </span>
        <div className="flex flex-col items-center px-5">
          <button
            className="bg-black text-white rounded-full active:scale-90 bg-opacity-50 md:px-6 md:gap-10 
          transition-transform py-1 bg-gradient-to-tr from-cyan-500 to-purple-400
          via-green-400 peer-invalid:bg-cyan-400"
          >
            search
          </button>
          <button className="btn">hehehehe</button>
        </div>
      </div>
      <div className="bg-white w-full shadow-lg p-5 rounded-2xl max-w-screen-sm dark:bg-gray-700">
        <div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span
                className="text-gray-600 font-semibold -mb-1
              dark:text-gray-400"
              >
                DhwAn!
              </span>
              <span className="text-4xl font-semibold">Dance Class</span>
            </div>
            <div className="size-12 rounded-full bg-orange-300" />
          </div>

          <div className="my-2 flex items-center gap-2">
            <span
              className="bg-green-400 text-white uppercase px-2 py-1 text-xs 
            font-medium rounded-xl hover:bg-pink-600 hover:scale-125 transition"
            >
              prof. FRAN
            </span>
            <span>9:30-10:30</span>
          </div>
          <div className="relative pb-2">
            <div className="bg-gray-400 absolute w-full h-2 rounded-md" />
            <div className="bg-green-400 absolute w-4/6 h-2 rounded-md " />
          </div>
          <div className="flex justify-between font-medium">
            <span>Expected</span>
            <span>Sorting center</span>
            <span>In transit</span>
            <span className="text-gray-500">Delivered</span>
          </div>
        </div>
      </div>
    </main>
  );
}
