import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"

const links = [
    {
        title: 'GitHub',
        href: 'https://github.com/warning11223',
    },
    {
        title: 'E-Mail',
        href: 'mailto:info@denis-frontend.ru',
    },
    {
        title: 'Telegram',
        href: 'https://t.me/w4rn1nq',
    },
    {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/w4rn1nq/',
    },
]

export const Footer = () => {
    return (
        <footer className='relative overflow-x-clip'>
            <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10' />
            <div className='container'>
                <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8 '>
                    <div className='text-white/40'>&copy; 2025. info@denis-frontend.ru</div>
                    <nav className='flex flex-col md:flex-row items-center gap-8 '>
                        {links.map((link) => (
                            <a
                                target="_blank"
                                key={link.title}
                                href={link.href}
                                className='inline-flex items-center gap-1.5 cursor-pointer'
                            >
                                <span className='font-semibold'>{link.title}</span>
                                <ArrowUpRightIcon className="size-4"/>
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
};
