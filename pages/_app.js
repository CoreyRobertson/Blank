import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Footer from '@/components/Footer';
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (

    <>



      <motion.div className="fixed top-0 left-0 right-0 h-[10px] bg-gray-500 origin-left z-[100] opacity-20" style={{ scaleX }} />
      <div className='fixed top-0 w-full z-[100]'>
        <Navbar
        />
      </div>

      <AnimatePresence mode='wait'>
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: .6,
          }}
          variants={{
            initialState: {
              opacity: 0,
            },
            animateState: {
              opacity: 1,
            },
            exitState: {
              opacity: 0,
            },
          }}
          className="base-page-size"
        >

          <Component {...pageProps} className='relative' />

        </motion.div>
      </AnimatePresence>

      <Footer />
    </>
  )
}
