import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function GridContent() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-gray-100 p-4 rounded-2xl">
        <Image
          src="/images/smile2.jpg"
          alt="Toothbrush"
          width={200}
          height={200}
          className="w-full mb-2"
        />
        <p className="text-sm text-gray-600">GET A DEEPER CLEAN WITH 360</p>
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
  );
}
