import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { BsArrowDown } from 'react-icons/bs'

import { motion } from 'framer-motion'

const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

export default function Hero() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <section id='home' className=' flex justify-center items-center bg-card h-screen  sm:bg-top bg-bottom bg-cover bg-no-repeat'>
            <div className='flex flex-col justify-center items-center gap-5 pb-[180px] sm:pb-[80px] xl:pb-[0px]'>
                <motion.h1 variants={fadeIn('', 'tween', .2, .6)} initial='hidden' whileInView='show' class="font-thin break-normal relative mx-6 sm:text-[64px] text-left text-[90px] leading-[80px] lg:leading-[120px] xl:leading-[210px]  h-[190px] sm:h-[100px] lg:h-[120px] xl:h-[200px] lg:text-[120px] 2xl:text-[140px] text-transparent bg-clip-text bg-gradient-to-r from-black to-white">
                    Need Change?
                </motion.h1>
                <motion.button variants={fadeIn('', 'tween', .6, 0.3)} initial='hidden' whileInView='show' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='border border-gray-500 p-2 text-lg sm:text-2xl 2xl:text-3xl rounded-2xl text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white ]  hover:shadow-2xl duration-500 ease-in-out'>Enquire Now</motion.button>
                <div className='absolute bottom-20 left-20 flex flex-col justify-center items-center w-[50px]'>
                    <motion.h2 variants={fadeIn('', 'tween', .3, 1)} initial='hidden' whileInView='show' className='text-center pb-1'>Straight to the numbers</motion.h2>
                    <motion.button href='#Price' variants={fadeIn('', 'tween', 0.5, 1.2)} animate={{

                        translateY: [1, 10, 1],
                    }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 0
                        }} initial='hidden' whileInView='show' type='button' className=''><a href='#Price'><BsArrowDown className='text-[52px]' /></a></motion.button>
                </div>
            </div>
        </section >
    )
}