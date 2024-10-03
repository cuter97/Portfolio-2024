"use client"

import { motion } from "framer-motion";

export type MotionTransitionProps = {
    children: React.ReactNode;
    className?: string;
    position: 'right' | 'bottom'
};

export function MotionTransition(props: MotionTransitionProps) {
    const { children, className, position } = props
    const fadeIn = (position: string) => {
        return {
            visible: {
                y: 0,
                x: 0,
                opacity: 1,
                transition: {
                    type: "tween",
                    duration: 1.4,
                    delay: 0.5,
                    ease: [0.25, 0.25, 0.25, 0.75],
                },
            },
            hidden: {
                y: position === 'bottom' ? -80 : 0,
                x: position === 'right' ? 80 : 0,
                opacity: 0,
                transition: {
                    type: "tween",
                    duration: 0.5,
                    delay: 0.5,
                    ease: [0.25, 0.25, 0.25, 0.25],
                },
            },

        };
    };
    return (
        <motion.div
            variants={fadeIn(position)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={className}
        >
            {children}
        </motion.div>
    )
}