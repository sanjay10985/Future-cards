"use client";

import { useState } from "react";
import { animate, delay, motion } from "framer-motion";
import { Search, ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Component() {
  const [chatOpen, setChatOpen] = useState<boolean>(false);

  return (
    <div className="bg-red-600 max-h-max p-4">
      <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
        <header className="flex relative items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-8 ">
            <Image
              src="/images/logo.svg"
              alt="Colgate Logo"
              width={100}
              height={40}
              className="w-24 absolute top-0"
            />
            <nav className="hidden md:flex space-x-6 ml-8">
              <a href="#" className="text-red-600 font-semibold">
                Home
              </a>
              <a href="#" className="text-gray-600">
                Products
              </a>
              <a href="#" className="text-gray-600">
                Oral Health
              </a>
              <a href="#" className="text-gray-600">
                Mission
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="text-gray-400" />
            <div className="flex items-center space-x-2">
              <Image
                src="/images/smile1.jpg"
                alt="User"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-gray-600">Sasha</span>
              <ChevronDown className="text-gray-400" />
            </div>
          </div>
        </header>
        <main className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-8xl text-black font-bold  mb-4 font-sans">
                <span className="font-thin font-Smile">YOUR </span>
                SMILE IS
                <br />
                <div className="flex items-center gap-4">
                  YOUR{" "}
                  <Image
                    src="/images/smile1.jpg"
                    alt="Smiling person"
                    className="inline rounded-lg h-16 object-cover object-center"
                    width={300}
                    height={100}
                    objectFit="cover"
                  />
                </div>
                <motion.span
                  className="text-red-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  SUPERPOWER
                </motion.span>
              </h1>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
                <div
                  className="absolute w-[60px] h-[60px] bg-red-900 left-0 bottom-[80px] rounded-bl-[20px] z-[1] "
                  style={{ content: "" }}
                ></div>

                <Image
                  src="/images/smile1.jpg"
                  alt="Smiling person"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl object-right"
                />
                {/* <div className="relative"> */}
                <motion.div
                  className="w-3xl h-[80px]  bg-white border-10 border-white text-black flex justify-center items-center rounded-2xl absolute bottom-0 left-0 z-[2]  before:absolute before:content-['']  before:top-0 before:left-0  before:w-10 before:h-10 before:bg-red-900 before:rounded-2xl before:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="relative z-10">
                    What's behind your smile?{" "}
                    <ArrowRight className="inline ml-2" />
                  </div>
                  <div className=""></div>
                </motion.div>
                {/* </div> */}
              </div>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className=" p-6 rounded-2xl">
                <div className="flex gap-4 items-center mb-4">
                  <span className=" text-black border-[1px] rounded-2xl border-black px-2 py-.5">
                    EXPERIENCE
                  </span>
                  <span className="text-white bg-black border-[1px] rounded-2xl px-2 py-0.5">
                    SCIENCE
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  All of our science, expertise, knowledge of oral health, and
                  our partnership with the dental profession and organizations
                  is in service to helping everyone do the best for their smile
                  and the best for the planet too.
                </p>
                <button className="bg-red-600 text-white px-6 py-2 rounded-full flex items-center">
                  SHOP NOW <ArrowRight className="ml-2" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded-2xl">
                  <Image
                    src="/images/smile2.jpg"
                    alt="Toothbrush"
                    width={200}
                    height={200}
                    className="w-full mb-2"
                  />
                  <p className="text-sm text-gray-600">
                    GET A DEEPER CLEAN WITH 360
                  </p>
                  <ArrowRight className="text-gray-400 mt-2" />
                </div>
                <motion.div
                  className="bg-black text-white p-4 rounded-2xl"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                  }}
                >
                  <h3 className="font-bold mb-2">HOW CAN WE HELP YOU TODAY</h3>
                  <p className="text-sm mb-2">What are your needs</p>
                  <select className="bg-gray-800 text-white w-full p-2 rounded mb-2">
                    <option>Choose one</option>
                  </select>
                  <select className="bg-gray-800 text-white w-full p-2 rounded mb-4">
                    <option>Choose one</option>
                  </select>
                  <button className="bg-white text-black w-full py-2 rounded-full">
                    GET STARTED
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
