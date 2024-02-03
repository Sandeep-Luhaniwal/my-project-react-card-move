import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const NewCards = ({ data, refrence }) => {
  return (
    <>
      <motion.div drag dragConstraints={refrence} whileDrag={{ scale: 1.2 }} dragElastic={0.2} className="w-60 h-72 flex-shrink-0 bg-zinc-900/90 rounded-[30px] text-white px-5 py-10 overflow-hidden relative">
        <FaRegFileLines />
        <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
        <div className="absolute bottom-0 w-full left-0">
          <div className="flex items-center justify-between mb-2 py-3 px-8">
            <h5>{data.filesize}</h5>
            <span className="h-7 w-7 bg-zinc-600 rounded-full flex items-center justify-center">
              {data.close ? <IoClose /> : <LuDownload size=".7em" color='#fff' />}

            </span>
          </div>
          {data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"} flex justify-center items-center`}>
              <h3 className="text-sm font-semibold">{data.tag.tagTile}</h3>
            </div>
          )}

        </div>
      </motion.div>
    </>
  )
}

export default NewCards