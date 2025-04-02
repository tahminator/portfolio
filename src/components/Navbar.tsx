"use client";

import { usePathStore, useProgrammaticStore } from "@/components/store";
import { Progress } from "@/components/Progress";
import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRouter } from "@/lib/hooks/useRouter";
import { clamp } from "@/lib/clamp";

export function Navbar() {
  const router = useRouter();

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const scaledVelocity = useTransform(scrollVelocity, (v) =>
    clamp(v, -200, 200),
  );

  const yTransform = useSpring(scaledVelocity, {
    stiffness: 20,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.nav
        className="sticky top-10 -mb-[4.25rem] z-10 bg-zinc-900/50 backdrop-filter backdrop-blur-md border-1 rounded-full w-[65%] xs:w-[50%] md:w-1/4 border-gray-800 justify-self-center m-auto overflow-hidden"
        style={{ y: yTransform }}
      >
        <div className="flex items-center justify-between h-16 mx-3 space-x-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className={`p-4 ${
              router.path === "/" ? "text-purple-400" : "text-white"
            } hover:drop-shadow-2xl cursor-pointer`}
            onClick={(e) => {
              e.preventDefault();
              router.goto("/");
            }}
          >
            Home
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className={`p-4 ${
              router.path === "/projects" ? "text-purple-400" : "text-white"
            } hover:drop-shadow-2xl cursor-pointer`}
            onClick={(e) => {
              e.preventDefault();
              router.goto("/projects");
            }}
          >
            Projects
          </motion.div>
        </div>
        <Progress className="rounded-full" />
      </motion.nav>
    </>
  );
}
