import React from 'react'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { CgMenuRight } from 'react-icons/cg'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
        transition: {
            staggerChildren,
            delayChildren,
        },
    },
});

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

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    };

    return (
        <nav className=' p-4 flex flex-row justify-between bg-transparent'>
            <h1 className={nav ? 'z-[101] text-3xl duration-300 ease-in-out' : 'z-10 text-3xl duration-300 ease-in-out'}>B|ank</h1>

            <motion.div onClick={handleNav} className="block cursor-pointer rounded-full p-2 shadow-xl z-[100]" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                {nav ? <AiOutlineClose size={30} /> : <CgMenuRight size={30} />}
            </motion.div>
            <div className={nav ? ' h-screen z-[100] shadow-2xl absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center md:w-[30%] lg:w-[20%] w-[80%] bg-opacity-50 bg-gray-200 text-center ease-in duration-300 backdrop-blur' : ' z-[100] absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300'}>
                <motion.ul className=' flex flex-col justify-around' variants={staggerContainer}
                    initial='hidden' whileInView='show'
                    viewport={{ once: false, amount: 0.25 }}>
                    <Link href='/' >
                        <motion.li className='font-thin cursor-pointer my-4 p-2 text-3xl border rounded-xl w-full' variants={fadeIn('right', 'spring', .1, .6)} initial='hidden' whileInView='show' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => handleNav(!nav)}>
                            Home
                        </motion.li></Link>
                    <Link href='#Features' >
                        <motion.li className='font-thin cursor-pointer my-4 p-2 text-3xl border rounded-xl w-full' variants={fadeIn('right', 'spring', .2, .6)} initial='hidden' whileInView='show' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => handleNav(!nav)}>
                            Features
                        </motion.li></Link>
                    <Link href='#Price' >
                        <motion.li className='font-thin cursor-pointer my-4 p-2 text-3xl border rounded-xl w-full' variants={fadeIn('right', 'spring', .3, .6)} initial='hidden' whileInView='show' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => handleNav(!nav)}>
                            The Card
                        </motion.li></Link>
                    <Link href='/Contact' >
                        <motion.li className='font-thin cursor-pointer my-4 p-2 text-3xl border rounded-xl w-full' variants={fadeIn('right', 'spring', .4, .6)} initial='hidden' whileInView='show' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => handleNav(!nav)}>
                            Get In Touch
                        </motion.li></Link>
                    <Link href='/Testimonials' >
                        <motion.li className='font-thin cursor-pointer my-4 p-2 text-3xl border rounded-xl w-full' variants={fadeIn('right', 'spring', .5, .6)} initial='hidden' whileInView='show' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => handleNav(!nav)}>
                            Testimonials
                        </motion.li></Link>
                    <Link href='/FAQ' >
                        <motion.li className='font-thin cursor-pointer my-4 p-2 text-3xl border rounded-xl w-full' variants={fadeIn('right', 'spring', .6, .6)} initial='hidden' whileInView='show' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => handleNav(!nav)}>
                            FAQ
                        </motion.li></Link>


                </motion.ul>
            </div>
        </nav>
    )
}

export default Navbar