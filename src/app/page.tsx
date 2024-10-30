"use client";
import React from "react";
import { motion } from "framer-motion";
import { Camera, Clock, MapPin } from "lucide-react";

const OriginalDesign = () => (
  <div className="relative w-[320px] h-[400px] flex flex-col justify-between">
    {/* Image Container */}
    <div className="relative w-full h-[240px] rounded-[15px]  bg-[url(https://images.unsplash.com/photo-1726094232383-2fe17106bf19?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  bg-left bg-[length:900px_400px] bg-no-repeat">
      {/* Image bottom cutout */}
      <div
        className="absolute bottom-0 right-[50%] w-5 h-5 bg-transparent rounded-[50%]"
        style={{ boxShadow: "10px 10px 0 #222" }}
      />
      {/* Image right cutout */}
      <div
        className="absolute bottom-[70px] right-0 w-5 h-5 bg-transparent rounded-[50%]"
        style={{ boxShadow: "10px 10px 0 #222" }}
      />
    </div>

    {/* Content Container */}
    <div className="relative w-full h-[150px] bg-white rounded-[15px] rounded-tr-none">
      {/* Name Tab */}
      <div className="absolute top-[-80px] right-0 h-[80px] w-[50%] bg-white border-t-[10px] border-l-[10px] border-[#222] rounded-tl-[25px]">
        {/* Top right cutout */}
        <div
          className="absolute right-0 top-0 w-[25px] h-[25px] bg-transparent rounded-[50%]"
          style={{ boxShadow: "10px -10px 0 #222" }}
        />
        {/* Bottom left cutout */}
        <div
          className="absolute bottom-0 left-[-25px] w-[25px] h-[25px] bg-transparent rounded-[50%]"
          style={{ boxShadow: "10px 10px 0 #fff" }}
        />
      </div>
    </div>
  </div>
);

const LeftTopVariant = () => (
  <div className="relative w-[320px] h-[400px] flex flex-col justify-between">
    {/* Image Container */}
    <div className="relative w-full h-[240px] rounded-[15px]  bg-[url(https://images.unsplash.com/photo-1726094232383-2fe17106bf19?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-[length:900px_400px] bg-no-repeat">
      {/* Image bottom cutout */}
      <div
        className="absolute bottom-0 left-[50%] w-5 h-5 bg-transparent rounded-[50%]"
        style={{ boxShadow: "-10px 10px 0 #222" }}
      />
      {/* Image left cutout */}
      <div
        className="absolute bottom-[70px] left-0 w-5 h-5 bg-transparent rounded-[50%]"
        style={{ boxShadow: "-10px 10px 0 #222" }}
      />
    </div>

    {/* Content Container */}
    <div className="relative w-full h-[150px] bg-white rounded-[15px] rounded-tl-none">
      {/* Name Tab */}
      <div className="absolute top-[-80px] left-0 h-[80px] w-[50%] bg-white border-t-[10px] border-r-[10px] border-[#222] rounded-tr-[25px]">
        {/* Top left cutout */}
        <div
          className="absolute left-0 top-0 w-[25px] h-[25px] bg-transparent rounded-[50%]"
          style={{ boxShadow: "-10px -10px 0 #222" }}
        />
        {/* Bottom right cutout */}
        <div
          className="absolute bottom-0 right-[-25px] w-[25px] h-[25px] bg-transparent rounded-[50%]"
          style={{ boxShadow: "-10px 10px 0 #fff" }}
        />
      </div>
    </div>
  </div>
);

const DoubleSideVariant = () => (
  <div className="relative w-[320px] h-[400px] flex flex-col justify-between">
    <div className="relative w-full h-[240px] rounded-[15px] bg-[url(https://images.unsplash.com/photo-1726094232383-2fe17106bf19?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-right bg-[length:900px_400px] bg-no-repeat">
      <div
        className="absolute bottom-[70px] left-0 w-5 h-5 bg-transparent rounded-[50%]"
        style={{ boxShadow: "-10px 10px 0 #222" }}
      />
      <div
        className="absolute bottom-[0px] left-[40%] w-5 h-5 bg-transparent rounded-[50%]"
        style={{ boxShadow: "-10px 10px 0 #222" }}
      />
      <div
        className="absolute bottom-[70px] right-0 w-5 h-5 bg-transparent rounded-[50%]"
        style={{ boxShadow: "10px 10px 0 #222" }}
      />
      <div
        className="absolute bottom-[0px] right-[40%] w-5 h-5 bg-transparent rounded-[50%]"
        style={{ boxShadow: "10px 10px 0 #222" }}
      />
    </div>
    <div className="relative w-full h-[150px] bg-white rounded-[15px] rounded-t-none">
      <div className="absolute top-[-80px] left-0 h-[80px] w-[40%] bg-white border-t-[10px] border-r-[10px] border-[#222] rounded-tr-[25px]">
        <div
          className="absolute left-0 top-0 w-[25px] h-[25px] bg-transparent rounded-[50%]"
          style={{ boxShadow: "-10px -10px 0 #222" }}
        />
        <div
          className="absolute bottom-0 right-[-25px] w-[25px] h-[25px] bg-transparent rounded-[50%]"
          style={{ boxShadow: "-10px 10px 0 #fff" }}
        />
      </div>
      <div className="absolute top-[-80px] right-0 h-[80px] w-[40%] bg-white border-t-[10px] border-l-[10px] border-[#222] rounded-tl-[25px]">
        <div
          className="absolute right-0 top-0 w-[25px] h-[25px] bg-transparent rounded-[50%]"
          style={{ boxShadow: "10px -10px 0 #222" }}
        />
        <div
          className="absolute bottom-0 left-[-25px] w-[25px] h-[25px] bg-transparent rounded-[50%]"
          style={{ boxShadow: "10px 10px 0 #fff" }}
        />
      </div>
    </div>
  </div>
);

const AnimatedCard = () => {
  const baseCardStyles =
    "relative w-80 h-[400px] flex flex-col justify-between group cursor-pointer";

  const imageContainerStyles = `
    relative w-full h-[240px] rounded-[15px] 
    bg-cover bg-center overflow-hidden
  `;

  const cardData = {
    title: "Sunset at Mountain Peak",
    location: "Swiss Alps",
    duration: "3 days ago",
    likes: 1234,
    description:
      "Experience the breathtaking view of sunset from the peaks of Swiss Alps.",
  };
  return (
    <motion.div
      className={baseCardStyles}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container with Overlay */}
      <div className={imageContainerStyles}>
        <motion.div
          className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1726094232383-2fe17106bf19?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-right bg-no-repeat  bg-[length:900px_400px]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

        {/* Image Cutouts */}
        <div
          className="absolute bottom-0 right-[50%] w-5 h-5 bg-transparent rounded-[50%]"
          style={{ boxShadow: "10px 10px 0 #222" }}
        />
        <div
          className="absolute bottom-[70px] right-0 w-5 h-5 bg-transparent rounded-[50%]"
          style={{ boxShadow: "10px 10px 0 #222" }}
        />

        {/* Hover Content */}
        <motion.div
          className="absolute inset-0 p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="flex justify-end">
            <motion.button
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full"
              whileHover={{ scale: 1.1 }}
            >
              <Camera className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="relative w-full h-[150px] bg-white rounded-[15px] rounded-tr-none p-4">
        {/* Name Tab */}
        <div className="absolute top-[-80px] right-0 h-[80px] w-[50%] bg-white border-t-[10px] border-l-[10px] border-[#222] rounded-tl-[25px] flex items-end p-2">
          <motion.span
            className="text-sm font-medium text-gray-600"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {cardData.duration}
          </motion.span>

          <div
            className="absolute right-0 top-0 w-[25px] h-[25px] bg-transparent rounded-[50%]"
            style={{ boxShadow: "10px -10px 0 #222" }}
          />
          <div
            className="absolute bottom-0 left-[-25px] w-[25px] h-[25px] bg-transparent rounded-[50%]"
            style={{ boxShadow: "10px 10px 0 #fff" }}
          />
        </div>

        {/* Card Content */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold text-gray-900">
            {cardData.title}
          </h3>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{cardData.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{cardData.duration}</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 line-clamp-2">
            {cardData.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Page = () => {
  return (
    <div className="min-h-screen bg-[#222] flex items-center justify-center gap-2.5 flex-wrap p-8 font-['Poppins']">
      <OriginalDesign />
      <LeftTopVariant />
      <DoubleSideVariant />
      <AnimatedCard />
    </div>
  );
};

export default Page;
