'use client'
import { AnimatePresence, motion } from "framer-motion";

export const Animation = () => {
    const transitionVariantsPage = {
        initial: {
            x: "100%",
            width: "100%",
        },
        animate: {
            x: "0%",
            width: "0%",
        },
        exit: {
            x: ["0%", "100%"],
            width: ["0%", "100%"],
        },
    };
    return (
        <AnimatePresence mode="wait">
            <div>
                <motion.div
                    className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-popover"
                    variants={transitionVariantsPage}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
                >
                </motion.div>
                <motion.div
                    className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-orange-700" // Cambia el color según sea necesario
                    variants={transitionVariantsPage}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }} // Retraso para que se mueva detrás del primero
                ></motion.div>
            </div>
        </AnimatePresence>
    )
}
