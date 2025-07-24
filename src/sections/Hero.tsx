'use client'

import memojiImage from '@/assets/images/memoji-computer.png'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import StarIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import Image from 'next/image'
import grainImage from '@/assets/images/grain.jpg'
import {HeroOrbit} from "@/components/HeroOrbit";
import React from "react";
import { motion } from 'framer-motion'

export const Hero = () => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div
            className="relative py-32 md:py-40 lg:py-60 z-0 overflow-x-clip"
            id="home"
        >
           <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
               <div
                   className='absolute inset-0 -z-30 opacity-5'
                   style={{
                       backgroundImage: `url(${grainImage.src})`,
                   }}
               />
               <div className="size-[620px] hero-ring"/>
               <div className="size-[820px] hero-ring"/>
               <div className="size-[1020px] hero-ring"/>
               <div className="size-[1220px] hero-ring"/>
               <HeroOrbit
                   size={430}
                   rotation={-14}
                   shouldOrbit
                   orbitDuration="30s"
                   shouldSpin
                   spinDuration="3s"
               >
                   <SparkleIcon className="size-8 text-emerald-300/20" />
               </HeroOrbit>
               <HeroOrbit
                   size={440}
                   rotation={79}
                   shouldOrbit
                   orbitDuration="32s"
                   shouldSpin
                   spinDuration="3s"
               >
                   <SparkleIcon className="size-5 text-emerald-300/20" />
               </HeroOrbit>
               <HeroOrbit
                   size={520}
                   rotation={-41}
                   shouldOrbit
                   orbitDuration="34s"
               >
                   <div className="size-2 bg-emerald-300/20 rounded-full" />
               </HeroOrbit>
               <HeroOrbit
                   size={530}
                   rotation={178}
                   shouldOrbit
                   orbitDuration="36s"
                   shouldSpin
                   spinDuration="3s"
               >
                   <SparkleIcon className="size-10 text-emerald-300/20" />
               </HeroOrbit>
               <HeroOrbit
                   size={550}
                   rotation={20}
                   shouldOrbit
                   orbitDuration="38s"
                   shouldSpin
                   spinDuration="6s"
               >
                   <StarIcon className="size-12 text-emerald-300 " />
               </HeroOrbit>
               <HeroOrbit
                   size={590}
                   rotation={98}
                   shouldOrbit
                   orbitDuration="40s"
                   shouldSpin
                   spinDuration="6s"
               >
                   <StarIcon className="size-8 text-emerald-300 " />
               </HeroOrbit>
               <HeroOrbit
                   size={650}
                   rotation={-5}
                   shouldOrbit
                   orbitDuration="40s"
               >
                   <div className="size-2 bg-emerald-300/20 rounded-full" />
               </HeroOrbit>
               <HeroOrbit
                   size={710}
                   rotation={144}
                   shouldOrbit
                   orbitDuration="44s"
                   shouldSpin
                   spinDuration="3s"
               >
                   <SparkleIcon className="size-14 text-emerald-300/20" />
               </HeroOrbit>
               <HeroOrbit
                   size={720}
                   rotation={20}
                   shouldOrbit
                   orbitDuration="46s"
               >
                   <div className="size-3 bg-emerald-300/20 rounded-full" />
               </HeroOrbit>
               <HeroOrbit
                   size={780}
                   rotation={145}
                   shouldOrbit
                   orbitDuration="48s"
               >
                   <div className="size-3 bg-emerald-300/20 rounded-full" />
               </HeroOrbit>
               <HeroOrbit
                   size={800}
                   rotation={-72}
                   shouldOrbit
                   orbitDuration="50s"
                   shouldSpin
                   spinDuration="6s"
               >
                   <StarIcon className="size-28 text-emerald-300 " />
               </HeroOrbit>
           </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container">
                    <div className="flex flex-col items-center">
                        <Image
                            className="size-[100px]"
                            src={memojiImage}
                            alt="Memoji image"
                        />
                        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4">
                            <div className='bg-green-500 size-2.5 rounded-full relative'>
                                <div className='absolute bg-green-500 inset-0 rounded-full animate-ping-large' />
                            </div>
                            <div className="text-sm font-medium">Available for new projects</div>
                        </div>
                    </div>
                    <div className='max-w-xl mx-auto'>
                        <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>
                            Hi, my name is Denis.<br/>
                            I&apos;m a Frontend developer
                        </h1>
                        <p className='mt-4 text-center text-white/60 md:text-lg max-w-lg mx-auto'>
                            I specialize in creating and optimizing high-load web applications. Let&apos;s discuss your project.
                        </p>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
                        <button
                            className='inline-flex items-center gap-2 border border-white/15 px-6 rounded-xl h-12 z-10 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300'
                            onClick={(e) => handleClick(e, 'projects')}
                        >
                            <span className='font-semibold'>Explore My Work</span>
                            <ArrowDown className="size-4"/>
                        </button>
                        <button
                            className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 rounded-xl h-12 z-10 hover:bg-transparent hover:text-white transition-all duration-300'
                            onClick={(e) => handleClick(e, 'contact')}
                        >
                            <span>👋</span>
                            <span className='font-semibold'>Let&apos;s connect</span>
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
