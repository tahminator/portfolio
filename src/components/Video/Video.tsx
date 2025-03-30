"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type VideoProps = React.ComponentPropsWithoutRef<"video">;

/**
 * Custom video component that plays when in view of the user, and pauses when not.
 */
export default function Video(props: VideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { amount: 0.7 });

  useEffect(() => {
    if (!ref.current) return;

    if (isInView) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isInView]);

  return <video ref={ref} {...props} />;
}
