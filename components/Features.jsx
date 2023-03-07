import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
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

const features = [
    {
        name: 'Push to deploy',
        description:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates',
        description:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
        icon: LockClosedIcon,
    },
    {
        name: 'Simple queues',
        description:
            'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Advanced security',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: FingerPrintIcon,
    },
]

export default function Example() {
    return (
        <div id='Features' className="bg-white py-24 sm:py-32 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <motion.h2 variants={fadeIn('', 'bounce', .3, 1)} initial='hidden' whileInView='show' className="text-base font-semibold leading-7 text-gray-500">Bank Smarter</motion.h2>
                    <motion.p variants={fadeIn('', 'bounce', .5, 1)} initial='hidden' whileInView='show' className="mt-2 text-3xl font-thin tracking-tight text-gray-900 sm:text-7xl">
                        Wo do things a little simpler here
                    </motion.p>
                </div>
                <motion.div variants={fadeIn('up', 'tween', .6, 1)} initial='hidden' whileInView='show' className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-lg font-semibold leading-7 text-gray-900">
                                    <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
r">
                                        <feature.icon className="h-6 w-6 text-black" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </motion.div>
            </div>
        </div>
    )
}