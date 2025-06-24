import {PropsWithChildren} from "react";
import {twMerge} from "tailwind-merge";

type Props = {
    size: number;
    rotation: number;
    shouldOrbit?: boolean;
    shouldSpin?: boolean;
    orbitDuration?: string;
    spinDuration?: string;
}

export const HeroOrbit = ({
                              children,
                              size,
                              rotation,
                              shouldOrbit = false,
                              orbitDuration,
                              spinDuration,
                              shouldSpin = false
                          }: PropsWithChildren<Props>) => {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className={twMerge(shouldOrbit === true && 'animate-spin')}
             style={{
                 animationDuration: orbitDuration,
             }}
            >
                <div
                    className="flex items-start justify-start "
                    style={{
                        rotate: `${rotation}deg`,
                        height: `${size}px`,
                        width: `${size}px`,
                    }}
                >
                    <div className={twMerge('inline-flex', shouldSpin === true && 'animate-spin')}
                        style={{
                            rotate: `${rotation * -1}deg`,
                            animationDuration: spinDuration,
                        }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};