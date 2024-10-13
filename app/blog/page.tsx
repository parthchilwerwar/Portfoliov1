'use client'

import { motion } from 'framer-motion'
import { Button, Tooltip ,ButtonGroup } from "@nextui-org/react"
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Blog() {
  const handleBack = () => {
    window.location.href = '/'; 
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 lg:p-12 flex flex-col">
      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="max-w-4xl w-full text-center">
          <header className="mb-12">
            <motion.h1 
              className="text-4xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Blog's
            </motion.h1>
            <motion.p 
              className="text-gray-400 text-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Thoughts, stories, and ideas.
            </motion.p>
          </header>

          <main>
            <motion.div
              className="py-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Coming Soon ..... 
              </h2>
            </motion.div>
          </main>
        </div>
      </div>

      <footer className="mt-16 text-center">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Parth Chilwerwar. All rights reserved.
        </p>
      </footer>

      <Button
        onClick={handleBack} 
        className="absolute top-5 left-5 font-semibold bg-white text-black rounded-md size-md"
      >
        <IoMdArrowRoundBack className='mr-3' /> Back 
      </Button>
    </div>
  )
}
