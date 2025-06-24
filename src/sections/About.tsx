'use client'

import {SectionHeader} from "@/components/SectionHeader";
import {Card} from "@/components/Card";
import bookImage from "@/assets/images/ydkjs.jpg";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg"
import HTMLIcon from "@/assets/icons/html5.svg"
import CSSIcon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import GithubIcon from "@/assets/icons/github.svg"
import ChromeIcon from "@/assets/icons/chrome.svg"
import mapImage from "@/assets/images/map.png"
import smileMemoji from "@/assets/images/memoji-smile.png"
import {CardHeader} from "@/components/CardHeader";
import {ToolboxItems} from "@/components/ToolboxItems";
import {useRef} from "react";
import Hobby from "@/components/Hobby";

const toolboxItems = [
    {
        title: 'JavaScript',
        iconType: JavaScriptIcon,
    },
    {
        title: 'HTML5',
        iconType: HTMLIcon,
    },
    {
        title: 'CSS3',
        iconType: CSSIcon,
    },
    {
        title: 'React',
        iconType: ReactIcon,
    },
    {
        title: 'Chrome',
        iconType: ChromeIcon,
    },
    {
        title: 'Github',
        iconType: GithubIcon,
    }
]

export type HobbyType = {
    title: string;
    emoji: string;
    left: string;
    top: string;
}

const hobbies: HobbyType[] = [
    {
        title: 'Painting',
        emoji: '🎨',
        left: '5%',
        top: '5%'
    },
    {
        title: 'Photography',
        emoji: '📸',
        left: '50%',
        top: '5%'
    },
    {
        title: 'Hiking',
        emoji: '🥾',
        left: '35%',
        top: '45%'
    },
    {
        title: 'Gaming',
        emoji: '🎮',
        left: '10%',
        top: '35%'
    },
    {
        title: 'Music',
        emoji: '🎵',
        left: '70%',
        top: '50%'
    },
    {
        title: 'Fitness',
        emoji: '🏋️',
        left: '5%',
        top: '65%'
    },
    {
        title: 'Reading',
        emoji: '📚',
        left: '45%',
        top: '70%'
    },
]

export const About = () => {
    const constraintRef = useRef<HTMLDivElement>(null);

    return (
        <div className='py-20 lg:py-20' id='about'>
            <div className='container'>
                <SectionHeader
                    title='About me'
                    eyebrow="A Glimpse into my world"
                    description='Learn more about who I am, what I do, and what inspires me.'
                />
                <div className='mt-20 flex flex-col gap-8'>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'>
                        <Card
                            className='flex h-[320px] md:col-span-2 md:py-8 md:px-8 lg:py-8 lg:px-8 lg:col-span-1'
                            itemsWrapperClassName="lg:grid-cols-1 lg:gap-0"
                        >
                            <CardHeader
                                title="My Reads"
                                desc="Explore the books I read."
                            />
                            <div className='w-40 mx-auto mt-8'>
                                <Image src={bookImage} alt="book image"/>
                            </div>
                        </Card>
                        <Card
                            className='h-[320px] p-0 md:col-span-3 md:py-2 md:px-2 lg:py-4 lg:px-4 lg:col-span-2'
                            itemsWrapperClassName="lg:grid-cols-1 lg:gap-0"
                        >
                            <CardHeader
                                className='px-6 pt-6'
                                title="My Toolbox"
                                desc="Explore the technologies and tools I use to development."
                            />
                            <ToolboxItems
                                items={toolboxItems}
                                className="mt-6"
                                itemsWrapperClassName='animate-move-left [animation-duration:30s]'
                            />
                            <ToolboxItems
                                items={toolboxItems}
                                className="mt-6"
                                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:30s]"
                            />
                        </Card>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
                        <Card
                            className='h-[320px] p-0 flex flex-col md:col-span-3 md:py-2 md:px-2 lg:py-4 lg:px-4'
                            itemsWrapperClassName="lg:grid-cols-1 lg:gap-0"
                        >
                            <CardHeader
                                title="Beyond the code"
                                desc="Explore my interests and hobbies beyond the digital realm."
                                className='px-6 py-6'
                            />
                            <div
                                className='relative flex-1 h-[188px]'
                                ref={constraintRef}
                            >
                                {hobbies.map((item, index) => (
                                   <Hobby key={index} item={item} constraintRef={constraintRef} />
                                ))}
                            </div>
                        </Card>
                        <Card className='h-[320px] p-0 md:col-span-2'>
                            <Image
                                className='h-full w-full object-cover object-left-top opacity-40'
                                src={mapImage.src}
                                alt='map image'
                                fill
                            />
                            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full after:content-[""] after:outline after:outline-2 after:absolute after:inset-0 after:outline-gray-950/20 after:rounded-full'>
                                <div className='absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full -z-20 animate-ping [animation-duration:2s]' />
                                <div className='absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full -z-10' />
                                <Image
                                    className='size-20'
                                    src={smileMemoji.src}
                                    alt='smile memoji'
                                    width={200}
                                    height={200}
                                />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
