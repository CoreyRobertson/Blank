import { CheckIcon } from '@heroicons/react/20/solid'

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

const includedFeatures = [
    'Member Rewards',
    'Partner Discounts',
    'Competitive Rates',
    'Unbeatable Customer Service',
]

export default function Example() {
    return (
        <div id='Price' className="bg-card2 bg-cover bg-no-repeat py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <motion.h2 variants={fadeIn('', 'bounce', .5, 1)} initial='hidden' whileInView='show' className="mt-2 text-3xl font-thin tracking-tight text-white sm:text-7xl">
                        The only card you need
                    </motion.h2>

                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-500 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-thin tracking-tight text-white">The B|ank Card</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
                            repellendus etur quidem assumenda.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-neutral-600">What’s included</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                        >
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3 text-white">
                                    <CheckIcon className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-none border border-gray-500 py-10 text-center ring-1 ring-inset ring-white/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-600">One Card, One Rate</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-white">0.5%</span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">p.a</span>
                                </p>
                                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                                    href=""
                                    className="mt-10 block w-full rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-black shadow-sm hover:bg-white-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Apply Now
                                </motion.a>
                                <p className="mt-6 text-xs leading-5 text-gray-600">
                                    Invoices and receipts available for easy company reimbursement
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}