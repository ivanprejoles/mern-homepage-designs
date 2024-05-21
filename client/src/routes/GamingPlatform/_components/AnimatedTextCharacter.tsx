import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedTextCharacterProps {
    text: string,
    className?: string,
    position?: 'top'|'bottom'|'left'|'right'
}

const AnimatedTextCharacter = ({ text, className, position = 'bottom' }: AnimatedTextCharacterProps) => {
  const letters = Array.from(text);

  const Position = {
    top: {y: 20},
    bottom: {y: 20},
    left: {x: -20},
    right: {x: 20}
  }

  const mainPosition = Position[position]
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x:0,
      y:0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      ...mainPosition,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.strong
      className={cn(
        'flex',
        className
      )}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.5
      }}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.strong>
  );
};

export default AnimatedTextCharacter;