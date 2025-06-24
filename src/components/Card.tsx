import React, {CSSProperties, PropsWithChildren} from 'react';
import grainImage from "@/assets/images/grain.jpg";
import {twMerge} from "tailwind-merge";
import {Style} from "node:util";

type Props = {
    className?: string
    itemsWrapperClassName?: string;
    style?: CSSProperties;
}

export const Card = ({ children, className, itemsWrapperClassName, style }: PropsWithChildren<Props>) => {
    return (
        <div
            className={twMerge("bg-gray-800 rounded-3xl relative after:content-[''] after:absolute after:inset-0 z-0 after:z-10 overflow-hidden after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 py-8 md:py-12 md:px-10 lg:py-16 lg:px-20 after:pointer-events-none", className)}
            style={style}
        >
            <div className='absolute inset-0 -z-10 opacity-5' style={{
                backgroundImage: `url(${grainImage.src})`,
            }}/>
            <div className={twMerge('grid lg:grid-cols-2 lg:gap-16', itemsWrapperClassName)}>
                {children}
            </div>
        </div>
    );
};