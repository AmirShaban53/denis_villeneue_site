import { Download } from "@mui/icons-material";
import React from "react";

const ModalHeader = ({ title, year, link }) => {
  return (
    <div className="flex justify-between mb-8">
      <div className="">
        <p className="text-4xl font-bold">{title}</p>
        <p className="text-sm text-zinc-500">{year}</p>
      </div>
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="d p-2 px-4 font-bold bg-red-500 rounded-lg shadow-lg shadow-red-500/80 flex">
            <Download />
            <span className="text-sm md:text-base">Download</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ModalHeader;
