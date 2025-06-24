import { motion } from 'framer-motion';
import React, {FC, RefObject} from 'react';
import {HobbyType} from "@/sections/About";

type Props = {
    item: HobbyType;
    constraintRef: RefObject<HTMLElement>;
}

const Hobby: FC<Props> = ({ constraintRef, item }) => {
    return (
        <motion.div
            drag
            dragConstraints={constraintRef}
            key={item.title}
            className='inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-grab'
            style={{
                left: item.left,
                top: item.top,
            }}
        >
            <span className='font-medium text-gray-950'>{item.title}</span>
            <span>{item.emoji}</span>
        </motion.div>
    );
};

export default Hobby;