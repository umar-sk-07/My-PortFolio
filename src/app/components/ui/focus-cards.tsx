"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from '@nextui-org/react';

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <a href={card.link} target="_blank" rel="noopener noreferrer">
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        <div
          className="absolute inset-0 bg-gray-300 dark:bg-neutral-800 flex items-center justify-center"
        >
          <Image
            src={card.src}
            alt={card.title} // You can keep or remove the alt text if needed
            fill
            className="object-contain"
          />
        </div>
        {/* Removed title display here */}
      </div>
    </a>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  link: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const { ref, inView } = useInView({ threshold: 0.5 });
  const animationControls = useAnimation();

  useEffect(() => {
    if (inView) {
      animationControls.start({ opacity: 1, y: 0 });
    } else {
      animationControls.start({ opacity: 0, y: 100 });
    }
  }, [inView, animationControls]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={animationControls}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center px-6"
    >
      <h2 className="text-lg md:text-4xl mb-6 mt-10 pb-2 pl-3 text-white dark:text-white max-w-4xl rounded-lg border-4 md:border-8 border-indigo-500/100 text-center bg-indigo-500 font-bold">
        CERTIFICATES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto w-full">
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
      <div className="d-grid gap-2 d-md-flex flex justify-center text-white dark:text-white mt-8">
        <Button
          as="a"
          href="https://github.com/umar-sk-07/My-Certificates"
          color="secondary"
          variant="shadow"
          className="bg-indigo-500 p-4 rounded-lg font-bold pb-10"
        >
          View All Certificates
        </Button>
      </div>
    </motion.section>
  );
}
