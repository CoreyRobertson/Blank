import React from 'react'
import { motion } from 'framer-motion'
import { BsHandThumbsUp } from 'react-icons/bs'

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

const Testimonials = () => {
    return (
        <section class="bg-white">
            <div class="h-auto my-20 py-8 flex flex-col justify-center items-center">
                <div class="max-w-2xl mx-auto md:text-center">
                    <motion.h2 variants={fadeIn('', 'bounce', .3, 1)} initial='hidden' whileInView='show' className="text-base font-semibold leading-7 text-gray-500">Need proof?</motion.h2>
                    <motion.p variants={fadeIn('', 'bounce', .5, 1)} initial='hidden' whileInView='show' className="mt-2 text-3xl font-thin tracking-tight text-gray-900 sm:text-7xl mb-6">
                        Hear from our customers
                    </motion.p>
                </div>
                <div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
                    <figure class="flex flex-col justify-center items-center p-8 text-center   ">
                        <blockquote class="mx-auto mb-8 max-w-[300px] text-gray-500 flex justify-center flex-col items-center">
                            <h3 class="flex text-lg font-semibold text-gray-900 justify-center items-center">First bank I don't hate <BsHandThumbsUp className='ml-1' /></h3>
                            <p class="my-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p class="my-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p class="my-4">If you care for your time, I hands down would go with this."</p>
                        </blockquote>
                        <figcaption class="flex justify-center items-center space-x-3">
                            <img class="grayscale w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                            <div class="space-y-0.5 font-medium  text-left">
                                <div>Bonnie Green</div>
                                <div class="text-sm font-light text-gray-500 ">Banker</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure class="flex flex-col justify-center items-center p-8 text-center   ">
                        <blockquote class="mx-auto mb-8 max-w-[300px] text-gray-500 flex justify-center flex-col items-center">
                            <h3 class="flex text-lg font-semibold text-gray-900  justify-center items-center">I like money now <BsHandThumbsUp className='ml-1' /></h3>
                            <p class="my-4">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <p class="my-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem!"</p>
                        </blockquote>
                        <figcaption class="flex justify-center items-center space-x-3">
                            <img class="grayscale w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
                            <div class="space-y-0.5 font-medium  text-left">
                                <div>Roberta Casas</div>
                                <div class="text-sm font-light text-gray-500">Lawyer</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure class="flex flex-col justify-center items-center p-8 text-center  ">
                        <blockquote class="mx-auto mb-8 max-w-[300px] text-gray-500 flex justify-center flex-col items-center">
                            <h3 class="flex text-lg font-semibold text-gray-900  justify-center items-center">Definitely recommend <BsHandThumbsUp className='ml-1' /></h3>
                            <p class="my-4">"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
                            <p class="my-4">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
                        </blockquote>
                        <figcaption class="flex justify-center items-center space-x-3">
                            <img class="grayscale w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                            <div class="space-y-0.5 font-medium  text-left">
                                <div>Jese Leos</div>
                                <div class="text-sm font-light text-gray-500 ">Student</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure class="flex flex-col justify-center items-center p-8 text-center   ">
                        <blockquote class="mx-auto mb-8 max-w-[300px] text-gray-500 flex justify-center flex-col items-center">
                            <h3 class="flex text-lg font-semibold text-gray-900  justify-center items-center">Me likey <BsHandThumbsUp className='ml-1' /></h3>
                            <p class="my-4">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                            <p class="my-4">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."</p>
                            <p class="my-4">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."</p>
                        </blockquote>
                        <figcaption class="flex justify-center items-center space-x-3">
                            <img class="grayscale w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
                            <div class="space-y-0.5 font-medium text-left">
                                <div>Joseph McFall</div>
                                <div class="text-sm font-light text-gray-500 ">Business Owner</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} class="text-center">
                    <motion.a class="cursor-pointer py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-black rounded-lg">Show More</motion.a>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials