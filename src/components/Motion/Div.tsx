"use client";

import { motion } from "framer-motion";
import { ComponentProps } from "react";

type DivProps = ComponentProps<typeof motion.div>;

export function Div(props: DivProps) {
  return <motion.div {...props}>{props.children}</motion.div>;
}
