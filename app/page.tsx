"use client"
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Tooltip } from "@nextui-org/react"
import { ExternalLink, Github, Linkedin as LinkedinIcon } from 'lucide-react'
import { FaReact, FaJs, FaNodeJs, FaDatabase , FaLinkedinIn , FaGithub , FaPython} from 'react-icons/fa'
import { TbBrandCpp } from "react-icons/tb";
import { MdVerified } from "react-icons/md";
import { RiNextjsLine , RiTailwindCssLine } from 'react-icons/ri'
import { motion } from 'framer-motion'


export default function Home() {
  const [blink, setBlink] = useState(true)
  const [lineLength, setLineLength] = useState(0)
  const lineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(prev => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const section = lineRef.current?.getBoundingClientRect();
      if (section) {
        const scrollY = window.scrollY + window.innerHeight;
        if (scrollY > section.top + window.scrollY) {
          setLineLength(120); 
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse" as const 
      }
    }
  }

  const blinkVariants = {
    blink: {
      opacity: 1,
      transition: {
        duration: 0.8, 
        repeat: Infinity,
        repeatType: "reverse" as const 
      }
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 lg:p-12 max-w-4xl mx-auto">
      <header className="mb-12 flex flex-col sm:flex-row items-center gap-6">
        <Image
          src="https://media.licdn.com/dms/image/v2/D4D03AQHdWL9MIss-aA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727631290476?e=1733961600&v=beta&t=y9tRzJOG8jWe0MTOEDi0At3o_9W2kKKcnbtiDakbUEs" 
          alt="Parth Chilwerwar"
          width={100}
          height={100}
          className="rounded-full"
          unoptimized 
        />
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold mb-2 flex items-center justify-between">
            Parth Chilwerwar
            <MdVerified className='text-blue-500 ml-1 sm:ml-2 w-7 h-7 hidden sm:inline' />
          </h1>
          <p className="text-gray-400">Maharashtra, India</p>
        </div>
      </header>

      <main className="space-y-16">
        <section>
          <p className="text-gray-300 leading-relaxed text-lg">
            Hi, I'm Parth Chilwerwar. I began coding in 2019, exploring Python and JavaScript as a curious teenager. Over the years, 
            I've gained valuable experience in programming and web development, continually refining my skills. These early years 
            laid the foundation for my ongoing journey in tech, and I'm excited for the growth and challenges ahead.
          </p>
        </section>

        <section className=" text-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-8">PROJECTS</h2>
          <motion.svg
            className="absolute left-0 top-0 bottom-0 w-1 h-full" 
            viewBox="0 0 2 100"
            initial="hidden"
            animate="visible"
          >
            {/* <motion.line
              ref={lineRef}
              x1="1"
              y1="0" 
              x2="1"
              y2={`${lineLength}%`}
              stroke="#22c55e"
              strokeWidth="2"
            /> */}
          </motion.svg>
          <div className="space-y-12 ml-8">
            {[
              {
                title: 'Moodify',
                description: 'Moodify is an AI-powered playlist generator that creates custom playlists based on your mood.',
                website: 'https://moodify-ai.vercel.app/',
                source: 'https://github.com/parthchilwerwar/Moodify-Ai-suggestions',
              },
              {
                title: 'VideoInsight',
                description: 'VideoInsight is a web application that summarizes YouTube videos using Gemini AI',
                website: 'https://videoinsight.vercel.app/',
                source: 'https://github.com/parthchilwerwar/Youtube-summarizer',
              },
              {
                title: 'FocusOn-Extension',
                description: 'Tired of getting sucked down the rabbit hole of distracting tabs? Meet FocusOn, your new best friend for focused productivity.',
                source: 'https://github.com/parthchilwerwar/FocusOn-Extension',
                website: undefined, 
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute -left-10 top-1 flex items-center justify-center w-4 h-4 rounded-full border-2 border-green-500 animate-ping">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex gap-4">
                  {project.website && (
                    <Button
                      as={Link}
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      className="bg-white text-black rounded-sm" // Added styles for button
                      variant="ghost"
                      startContent={<ExternalLink className="w-4 h-4" />}
                    >
                      Website
                    </Button>
                  )}
                  {project.source && (
                    <Button
                      as={Link}
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      className="bg-white text-black rounded-sm" // Added styles for button
                      variant="ghost"
                      startContent={<Github className="w-4 h-4" />}
                    >
                      Source
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">SKILLS</h2>
          <div className="flex flex-wrap gap-6">
            {[
              { icon: <RiNextjsLine className="w-8 h-8" />, name: "Next.js" },
              { icon: <FaReact className="w-8 h-8" />, name: "React" },
              { icon: <FaJs className="w-8 h-8" />, name: "JavaScript" },
              { icon: <FaNodeJs className="w-8 h-8" />, name: "Node.js" },
              { icon: <RiTailwindCssLine className="w-8 h-8 bg-blue" />, name: "Tailwind Css" },
              { icon: <FaDatabase className="w-8 h-8" />, name: "Database" },
              { icon: <FaPython className="w-8 h-8" />, name: "Python" },
              { icon: <TbBrandCpp className="w-8 h-8" />, name: "C++" },

            ].map((skill, index) => (
              <Tooltip key={index} content={skill.name} placement="bottom" delay={0} closeDelay={0}>
                <div className="cursor-default transition-transform hover:scale-110">
                  {skill.icon}
                </div>
              </Tooltip>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">LANGUAGES</h2>
          <div className="flex flex-wrap gap-4">
            {[
              { flag: '🇮🇳', language: 'HINDI' },
              { flag: '🇮🇳', language: 'MARATHI' },
              { flag: '🇮🇳', language: 'ENGLISH' },
            ].map((lang, index) => (
              <div key={index} className="flex items-center gap-3 border border-white rounded-xl p-2.5">
                <span className="text-xl">{lang.flag}</span>
                <span className="text-gray-300 text-lg">{lang.language}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold  mb-6">LINKS</h2>
          <div className="flex gap-4">
          <motion.div variants={blinkVariants}>
              <Button
                as={Link}
                href="https://www.linkedin.com/in/parth-chilwerwar/"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                color="primary"
                variant="ghost"
                isIconOnly
              >
                <FaLinkedinIn  className="w-6 h-6 " />
              </Button>
            </motion.div>
            <motion.div variants={blinkVariants} >
              <Button
                as={Link}
                href="https://github.com/parthchilwerwar"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                color="secondary"
                variant="ghost"
                isIconOnly
              >
                <FaGithub className="w-6 h-6" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="mt-16 text-center">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Parth Chilwerwar. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
