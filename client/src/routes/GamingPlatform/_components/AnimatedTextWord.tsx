import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedTextWordProps {
    text: string,
    className?: string,
    position?: 'top'|'bottom'|'left'|'right'
}

const AnimatedTextWord = ({ text, className, position = 'bottom' }: AnimatedTextWordProps) => {
  const words = text.split(" ");

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
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y:0,
      x:0,
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
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "5px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.strong>
  );
};

export default AnimatedTextWord;