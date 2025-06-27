import streamingService from "@/assets/images/streaming-service.png";
import newsJpg from "@/assets/images/news.jpg";
import pizzaPng from "@/assets/images/pizza.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import {Card} from "@/components/Card";

const portfolioProjects = [
    {
        company: "TVOE",
        year: "2022",
        title: "Multifunctional cross-platform streaming service",
        results: [
            {title: "Implemented SEO-friendly web application"},
            {title: "Improved site speed by 60%"},
            {title: "Developed a CRM for service management"},
        ],
        link: "https://tvoe.live",
        image: streamingService,
        hideBtn: false,
        buttonText: "Visit live site"
    },
    {
        company: "VestiGoroda",
        year: "2023",
        title: "Mass media - news aggregator",
        results: [
            {title: "Build adaptive web application"},
            {title: "Developed functionality for creating advertising"},
            {title: "Created CMS with WYSIWYG editor"},
        ],
        link: "https://youtu.be/7hi5zwO75yc",
        image: newsJpg,
        hideBtn: true
    },
    {
        company: "Online shop",
        year: "2024",
        title: "Pizza",
        results: [
            {title: "Build a Next.JS web application"},
            {title: "Implemented payment yukassa"},
            {title: "Created authorization oAuth"},
        ],
        link: "https://github.com/warning11223/pizza-shop",
        image: pizzaPng,
        hideBtn: false,
        buttonText: "Visit GitHub"
    },
];

export const Projects = () => {
    return (
        <section className='pb-16 lg:py-24'>
            <div className="container">
                <div className="flex justify-center"  id="projects">
                    <p className="font-semibold uppercase bg-gradient-to-r from-emerald-300 to-sky-400  tracking-widest text-transparent bg-clip-text text-center">
                        Real World Results
                    </p>
                </div>
                <h2 className='font-serif text-3xl md:text-5xl text-center mt-6'>
                    Featured Projects
                </h2>
                <p className='text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto'>
                    See web applications I worked on as a frontend developer.
                </p>
                <div className='flex flex-col gap-20 mt-10 md:mt-20'>
                    {portfolioProjects.map((project, index) => (
                        <Card
                            key={index}
                            className='sticky'
                            style={{
                                top: `calc(64px + ${index * 40}px`
                        }}
                        >
                            <div className='lg:pb-16'>
                                <div
                                    className='bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'>
                                    <span>{project.company}</span>
                                    <span>&bull;</span>
                                    <span>{project.year}</span>
                                </div>
                                <h3 className='font-serif text-2xl mt-2 md:mt-5 md:text-4xl'>
                                    {project.title}
                                </h3>
                                <hr className='border-t-2 border-white/5 mt-4 md:mt-5'/>
                                <ul className='flex flex-col gap-4 mt-4 md:mt-5 '>
                                    {project.results.map((result) => (
                                        <li key={result.title}
                                            className='flex items-center gap-2 text-sm md:text-base text-white/50'>
                                            <CheckIcon className="size-5"/>
                                            <span>{result.title}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    className='block'
                                    style={{
                                        pointerEvents: project?.hideBtn ? 'none' : 'auto',
                                        height: project?.hideBtn ? '56px' : 'auto'
                                    }}
                                >
                                    {!project.hideBtn && (
                                        <button
                                            className='bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex justify-center items-center gap-2 mt-8 border border-white hover:bg-transparent hover:text-white transition-all duration-300'>
                                            <span>{project?.buttonText}</span>
                                            <ArrowUpRightIcon className='size-4'/>
                                        </button>
                                    )}
                                </a>
                            </div>
                            <div className='relative'>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    className='mt-8 -mb-8 rounded-tl-xl rounded-tr-xl md:-mb-12 lg:mt-20 lg:absolute lg:h-full lg:max-w-none lg:w-auto'
                                    sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 768px) calc(50vw - 16px), 400px"
                                />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
