import StarIcon from "@/assets/icons/star.svg"
import {Fragment} from "react";

const words = [
    'Responsive Design',
    'Cross-Browser Development',
    'Version Control',
    'Availability',
    'JavaScript',
    'TypeScript',
    'React',
    'Next',
    'GraphQL',
    'Rest API',
    'WebSocket',
    'HTML5',
    'CSS3',
    'DOM',
    'AJAX',
    'Git',
    'GitHub',
    'GitLab',
    'CI/CD',
    'Docker',
    'Webpack',
    'Jest',
]

export const Tape = () => {
    return (
        <div className='py-16 lg:py-24 overflow-x-clip'>
            <div className='bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1'>
                <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
                    <div
                        className='flex flex-none gap-4 py-3 animate-move-left [animation-duration:30s]'
                        style={{
                            transform: 'translateX(-750px)',
                        }}
                    >
                        {[...new Array(2)].fill(0).map((_, index) => (
                            <Fragment key={index}>
                                {words.map((word) => (
                                    <div key={word} className='inline-flex items-center gap-4'>
                                        <span className='text-gray-900 uppercase font-extrabold text-sm'>{word}</span>
                                        <StarIcon className="size-4 text-gray-900 -rotate-12"/>
                                    </div>
                                ))}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
