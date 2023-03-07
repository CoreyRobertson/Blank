import React from 'react'
import { motion } from 'framer-motion'
import { CiMail } from 'react-icons/ci'

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

const CTA = () => {
    return (
        <div className="bg-white py-24 sm:py-32 flex flex-col justify-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center pb-5">
                    <motion.h2 variants={fadeIn('', 'bounce', .3, 1)} initial='hidden' whileInView='show' className="text-base font-semibold leading-7 text-gray-500">For news & updates</motion.h2>
                    <motion.p variants={fadeIn('', 'bounce', .5, 1)} initial='hidden' whileInView='show' className="mt-2 text-3xl font-thin tracking-tight text-gray-900 sm:text-7xl mb-6">
                        Subscribe to our newsletter
                    </motion.p>
                </div>
                <motion.div className='flex flex-col md:flex-row w-auto gap-4 justify-center'>
                    <motion.input variants={fadeIn('up', 'spring', 1, 1)} initial='hidden' whileInView='show' className='border rounded-xl font-thin p-4' placeholder='@'></motion.input>
                    <motion.button variants={fadeIn('up', 'spring', 1.2, 1)} initial='hidden' whileInView='show' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='bg-black rounded-xl p-4 text-white flex flex-row items-center justify-center' type='submit'>Submit<span className='text-gray-500 pl-1 text-xl'><CiMail /></span></motion.button>
                </motion.div>
            </div>
        </div>
    )
}

export default CTA