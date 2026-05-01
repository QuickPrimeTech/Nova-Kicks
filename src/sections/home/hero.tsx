// @/sections/home/hero.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImg from "@/assets/hero-sneaker.png";
const headline = "STEP INTO THE FUTURE".split(" ");

export const Hero = () => {
  return (
    <section className="relative section pt-32 pb-20 min-h-screen overflow-hidden">
      {/* Content */}
      <div className="container overflow-hidden px-4 rounded-3xl bg-[radial-gradient(ellipse_at_top,var(--background)_0%,var(--background)_120%)] relative mx-auto z-10 flex min-h-screen flex-col justify-center">
        {/* gradient background overlay */}
        <div className="absolute inset-0 bg-linear-to-tl from-primary/30 via-transparent to-background/80" />

        {/* ProductImage */}
        <motion.div
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 0.61, 0.36, 1] }}
          initial={{ scale: 1.1, opacity: 0 }}
          className="absolute w-2/3 aspect-3/2 -top-8 right-0"
        >
          <Image
            src={heroImg}
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            alt="Empire flagship sneaker"
            className="object-cover"
          />
        </motion.div>

        <div className="relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-caption font-mono tracking-wide uppercase text-foreground mb-6"
          >
            New Drop · Limited Edition
          </motion.p>

          <h1 className="font-display text-heading-2 uppercase text-balance mb-2">
            {headline.map((word, wi) => (
              <span
                key={wi}
                className="inline-block overflow-hidden align-bottom mr-[0.25em]"
              >
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.3 + wi * 0.12,
                    duration: 0.9,
                    ease: [0.22, 0.61, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
          <p className="max-w-md text-body text-foreground leading-relaxed mb-6">
            Engineered for those who refuse to slow down. The Empire Air Max
            delivers next-gen cushioning and zero compromise.
          </p>

          <Button
            className="group shadow shadow-primary/20 sm:w-fit"
            size={"xl"}
          >
            Shop the drop
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
