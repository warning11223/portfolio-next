import {SectionHeader} from "@/components/SectionHeader";
import {Card} from "@/components/Card";
import {Fragment} from "react";
import project1 from "../assets/images/project1.png"
import project2 from "../assets/images/project2.png"
import project3 from "../assets/images/project3.png"
import project4 from "../assets/images/project4.png"
import project5 from "../assets/images/project5.png"
import project6 from "../assets/images/project6.png"
import project7 from "../assets/images/project7.png"
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
    {
        image: project1
    },
    {
        image: project2
    },
    {
        image: project3
    },
    {
        image: project4
    },
    {
        image: project5
    },
    {
        image: project6
    },
    {
        image: project7
    },
];

export const Testimonials = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        >
            <div className='py-16 lg:py-24'>
                <div className='container'>
                    <SectionHeader
                        title='Some of my works'
                        eyebrow="Creative Projects"
                        description='See more of my apps I&apos;ve developed recently.'
                    />
                    <div className='mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
                        <div className='flex flex-none gap-4 md:gap-6 lg:gap-8 py-4 animate-move-left [animation-duration:50s] hover:[animation-play-state:paused]'>
                            {[...new Array(2)].fill(0).map((_, index) => (
                                <Fragment key={index}>
                                    {testimonials.map((item, index) => (
                                        <Card
                                            key={index}
                                            className="max-w-xs md:max-w-md px-0 py-0 md:py-0 md:px-0 lg:py-0 lg:px-0 hover:-rotate-3 transition duration-300"
                                            itemsWrapperClassName='lg:grid-cols-1 h-full'
                                        >
                                            <Image
                                                src={item.image!}
                                                alt={`image ${index}`}
                                                className='h-full'
                                                priority={index < 3}
                                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
                                            />
                                        </Card>
                                    ))}
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
