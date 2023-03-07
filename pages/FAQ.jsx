import React from 'react'
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

const FAQ = () => {
    return (
        <section class="h-auto my-20 flex flex-col justify-center items-center">
            <div className='py-10 mx-auto max-w-2xl lg:text-center'>
                <motion.h2 variants={fadeIn('', 'bounce', .3, 1)} initial='hidden' whileInView='show' className="text-base font-semibold leading-7 text-gray-500">Any questions?</motion.h2>
                <motion.p variants={fadeIn('', 'bounce', .5, 1)} initial='hidden' whileInView='show' className="mt-2 text-3xl font-thin tracking-tight text-gray-900 sm:text-7xl">
                    Let's get those answered
                </motion.p>
            </div>
            <div className='grid grid-cols-1 m-5 max-w-xl gap-10 pb-20'>
                <motion.h3 variants={fadeIn('up', 'tween', .2, .2)} initial='hidden' whileInView='show' className='text-lg font-semibold leading-7 text-gray-900'>Can I do this?</motion.h3>
                <motion.p variants={fadeIn('up', 'tween', .2, .6)} initial='hidden' whileInView='show' className='text-base leading-7 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</motion.p>
                <motion.h3 variants={fadeIn('up', 'tween', .2, .3)} initial='hidden' whileInView='show' className='text-lg font-semibold leading-7 text-gray-900'>Can I do that?</motion.h3>
                <motion.p variants={fadeIn('up', 'tween', .2, .7)} initial='hidden' whileInView='show' className='text-base leading-7 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</motion.p>
                <motion.h3 variants={fadeIn('up', 'tween', .2, .4)} initial='hidden' whileInView='show' className='text-lg font-semibold leading-7 text-gray-900'>What can you do?</motion.h3>
                <motion.p variants={fadeIn('up', 'tween', .2, .8)} initial='hidden' whileInView='show' className='text-base leading-7 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</motion.p>
                <motion.h3 variants={fadeIn('up', 'tween', .2, .5)} initial='hidden' whileInView='show' className='text-lg font-semibold leading-7 text-gray-900'>What can you not do?</motion.h3>
                <motion.p variants={fadeIn('up', 'tween', .2, .9)} initial='hidden' whileInView='show' className='text-base leading-7 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</motion.p>
            </div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} class="text-center">
                <motion.a class="cursor-pointer py-2.5  px-5 mr-2 mb-6 text-sm font-medium text-white focus:outline-none bg-black rounded-lg">Nedd more answers?</motion.a>
            </motion.div>

        </section >
    )
}

export default FAQ