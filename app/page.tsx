"use client"
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Tooltip ,ButtonGroup   } from "@nextui-org/react"
import { ExternalLink, Github, Linkedin as LinkedinIcon } from 'lucide-react'
import { FaReact, FaJs, FaNodeJs, FaDatabase , FaLinkedinIn , FaGithub , FaPython , FaHtml5, FaCss3Alt ,FaGitAlt ,FaBug } from 'react-icons/fa'
import { TbBrandCpp } from "react-icons/tb";
import { MdVerified } from "react-icons/md";
import { RiNextjsLine , RiTailwindCssLine } from 'react-icons/ri'
import { GiBrainTentacle, GiBrain } from 'react-icons/gi'
import { SiTypescript , SiGo ,SiOpensourcehardware  , SiKalilinux  } from 'react-icons/si'
import { motion } from 'framer-motion'
import { SiGmail } from "react-icons/si";
import { FaArrowTurnUp } from "react-icons/fa6";

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
          Hi, I’m Parth Chilwerwar. I started coding in 2019, diving into Python and JavaScript as 
          a curious teenager. Since then, I’ve built solid experience in programming and web development, constantly
           improving my skills. My passion for open-source drives me to contribute 
          to impactful projects, and I’m eager to keep growing and embracing new challenges in the tech world .

          </p>
        </section>

        <section className=" text-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-8">Featured Projects</h2>
          {/* <HyperText
          className="text-4xl font-semibold mb-8 dark:text-white"
          text="Featured Projects"
            /> */}
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
                title: 'FocusOn Extension',
                description: 'Tired of getting sucked down the rabbit hole of distracting tabs? Meet FocusOn, your new best friend for focused productivity.',
                source: 'https://github.com/parthchilwerwar/FocusOn-Extension',
                website: undefined, 
              },
              {
                title: 'V2 Saver Extension ',
                description:'Tired of cluttered bookmarks? V2 Saver is a Chrome extension that simplifies link saving with a single click, making it easy to organize and access your important links without the hassle.',
                source: "https://github.com/parthchilwerwar/V2-Saver",
                website: undefined ,
              },
              {
                title: 'FOODZ',
                description: "A versatile Discord bot built with Discord.js v14, offering features like anti-link and anti-raid security to protect your server, fun game commands to keep users entertained, and a recipe API for fetching user-based recipes. Explore the code for even more commands!",
                source: "https://github.com/parthchilwerwar/FOODZ",
                website: undefined,
                
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 2, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
              <div className=" absolute -left-10 top-3 flex items-center justify-center w-1.5 h-1.5 rounded-full border-2 border-green-500">
                <div className="animate-ping w-4 h-4 rounded-full border-2 border-green-500 absolute" />
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full z-10" /> 
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
                      className="bg-white text-black rounded-sm" 
                      variant="ghost"
                      startContent={<ExternalLink className="w-4 h-4 mr-1" />}
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
                      className="bg-white text-black rounded-sm" 
                      variant="ghost"
                      startContent={<Github className="w-4 h-4 mr-1" />}
                    >
                      Source
                    </Button>
                  )}
                </div>
                
              </motion.div>
            ))}
            
          <motion.div  
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 2, y: 0 }}
          transition={{ duration: 0.5 , delay: 0.9 }}
          >
              <Button
                as={Link}
                href="https://github.com/parthchilwerwar?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                color="primary"
                variant="ghost"
                className='font-semibold bg-white text-black rounded-md top-3'
              >

                Show more <FaArrowTurnUp className='ml-3' />
                </Button>
            </motion.div>
          </div>
        </section>
        <section>
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
        {/* <div className="flex flex-wrap gap-6"> */}
        <div className="max-w-3xl p-8 mx-auto  dark:text-white-800 -ml-8" >
        <ul className="space-y-12">
          <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 2, y: 0 }}
          transition={{ duration: 0.5 , delay: 0.9 }}>

          
          <li className="flex items-start space-x-3">
            
            <a rel="noopener noreferrer"  className="flex items-center h-8 text-xl hover:underline"><img src='https://media.licdn.com/dms/image/v2/D4D22AQGiHomxyinj_A/feedshare-shrink_800/feedshare-shrink_800/0/1731339369976?e=1734566400&v=beta&t=g0Rlbn4pNgcxccIzegIauzixJUv2abPt2zm7E13u7H8' alt='spofy'  className='h-auto w-12 rounded-full object-cover'/></a>
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between space-x-4 dark:text-gray-600">
                <a rel="noopener noreferrer"  className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-300"> 
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full dark:bg-green-500"></span>
                  <span className="group-hover:underline dark:text-white">Development <MdVerified className='text-blue-500 ml-1 sm:ml-2 w-3.7 h-3.7 hidden sm:inline' /> </span>
                </a>
                <span className="text-sm whitespace-nowrap text-white">2024</span>
              </div>
              <div className='text-gray-400'>
                <p>I worked extensively on a Discord bot named Spofy, where my primary 
                  responsibilities involved implementing new features and troubleshooting bugs to enhance 
                  its functionality and user experience. This project required a strong focus on bot logic, seamless 
                  user interaction, and consistent updates to maintain reliability within the Discord community.</p>
              </div>
            </div>
          </li>
          </motion.div>
          <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 2, y: 0 }}
          transition={{ duration: 0.5 , delay: 1}}>
          <li className="flex items-start space-x-3">
          
            <a rel="noopener noreferrer"  className="flex items-center h-8 text-xl "><img src='https://media.discordapp.net/attachments/1242921027256848548/1305946473757671544/aplex_logo1.png?ex=6759caee&is=6758796e&hm=935fefdf05fe6b90936f1469332fd96d084f9c227ee4299e7abe12feeae116aa&=&format=webp&quality=lossless&width=437&height=437' alt='aplex' className="h-auto w-12 rounded-full object-cover"></img></a>
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between space-x-4 dark:text-gray-600">
                <a rel="noopener noreferrer"  className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-300">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full dark:bg-green-500 animate-blink"></span>
                  <span className="group-hover:underline dark:text-white">Founder</span>
                </a>
                <span className="text-sm whitespace-nowrap text-white">2019-24</span>
              </div>
              <div className="space-y-2 text-gray-400" >
                <p>As the founder of Aplex, a venture I initiated during my childhood, I have built and led the company from its inception. This experience has given me a strong foundation in innovation, leadership, and strategic vision, shaping my growth as both a developer and a founder .</p>
              </div>
            </div>
          </li>
        </motion.div>
        </ul>
      </div>
        {/* </div> */}
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-6">
            {[
              { icon: <RiNextjsLine className="w-8 h-8" />, name: "Next.js" },
              { icon: <FaReact className="w-8 h-8" />, name: "React" },
              { icon: <FaJs className="w-8 h-8" />, name: "JavaScript" },
              { icon: <SiTypescript className="w-7 h-8" />, name: "Typescript" },
              { icon: <FaNodeJs className="w-8 h-8" />, name: "Node.js" },
              { icon: <RiTailwindCssLine className="w-8 h-8 bg-blue" />, name: "Tailwind Css" },
              { icon: <FaDatabase className="w-8 h-8" />, name: "Database" },
              { icon: <FaPython className="w-8 h-8" />, name: "Python" },
              { icon: <TbBrandCpp className="w-8 h-8" />, name: "C++" },
              { icon: <FaHtml5 className="w-8 h-8" />, name: "HTML" },
              { icon: <FaCss3Alt className="w-8 h-8" />, name: "CSS" },
              { icon: <GiBrainTentacle className="w-8 h-8" />, name: "Generative AI" },
              { icon: <GiBrain className="w-8 h-8" />, name: "Machine Learning" },
              { icon: <SiGo className="w-8 h-8" />, name: "Go (basic)" },
              { icon: <FaGitAlt className= 'w-8 h-8'/> , name: "Git"},
              { icon: <SiOpensourcehardware className='w-9 h-9'/> , name:'Open source'},
              { icon: <SiKalilinux className='w-8 h-8 ' /> ,name: "kali linux"},
              { icon: <FaBug  className='w-7 h-7  '/>,name: "Bug Bounty (basic)" },



            ].map((skill, index) => (
              <Tooltip key={index} content={skill.name} placement="bottom">
                <div className="cursor-default transition-transform hover:scale-110" >
                  {skill.icon}
                </div>
              </Tooltip>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Speaking Languages</h2>
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
          <h2 className="text-3xl font-semibold  mb-6">Links</h2>
          <div className="flex gap-4">
          <Tooltip content="Linkedin" placement='bottom'>
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
          </Tooltip >
          <Tooltip content="Github" placement='bottom'>
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
            </Tooltip>
          <Tooltip content="Gmail" placement='bottom'>
            <motion.div variants={blinkVariants} >
              <Button
                as={Link}
                href="mailto:job.parthchilwerwar@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                color="secondary"
                variant="ghost"
                isIconOnly
              >
                <SiGmail className="w-6 h-6" />
              </Button>
            </motion.div>
            </Tooltip>
          </div>
        </section>
        <section>
        <Tooltip content="Visit My Blog" placement="top"  >
          <Button 
            as={Link}
            href="/blog"
            color='primary'
            size="md" 
            variant="flat" 
            className="font-semibold bg-white text-black rounded-md"
            startContent={<ExternalLink className="w-4 h-4 mr-2" />}
          >
            Blog's
          </Button>  
        </Tooltip>
        </section>
      </main>

      <footer className="mt-16 text-center top-2">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Parth Chilwerwar. All rights reserved.
        </p>
      </footer>
    </div>
  )
}