"use client";

import React from "react";

const Loader: React.FC<{}> = (props) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 rounder-full animate-spin"></div>
    </div>
  );
};

export default Loader;
