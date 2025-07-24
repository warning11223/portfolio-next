import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from "@/assets/images/grain.jpg";
import { motion } from 'framer-motion';
import React from "react";

export const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        >
            <div className='py-16 pt-12 lg:py-24 lg:pt-20' id='contact'>
                <div className='container'>
                    <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl relative overflow-hidden z-0 text-center md:text-left'>
                        <div className='absolute inset-0 -z-10 opacity-5' style={{
                            backgroundImage: `url(${grainImage.src})`,
                        }}/>
                        <div className='flex flex-col justify-between md:flex-row gap-8 md:gap-16 items-center'>
                            <div>
                                <h2 className='font-serif text-2xl md:text-3xl z-10'>Let&apos;s create something amazing together</h2>
                                <p className='text-sm mt-2 md:text-base'>Ready to develop interesting projects and discuss your proposals.</p>
                            </div>
                            <div>
                                <button className='text-white bg-gray-900  px-6 h-12 rounded-xl  mt-8 w-max border-gray-900 border hover:bg-transparent hover:text-gray-900 transition-all duration-300'>
                                    <a href="https://t.me/w4rn1nq" target="_blank" className='inline-flex items-center gap-2'>
                                        <span className='font-semibold'>Contact Me</span>
                                        <ArrowUpRightIcon className="size-4"/>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
