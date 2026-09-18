import { Email } from "@/components/Button/Email";
import { GitHub } from "@/components/Button/GitHub";
import { LinkedIn } from "@/components/Button/LinkedIn";
import { Magic } from "@/components/Magic/Magic";
import { HOne } from "@/components/Motion/HOne";

import AnimatedBeam from "@/components/Background/Background";
import { Div } from "@/components/Motion/Div";
import { P } from "@/components/Motion/P";
import Experience from "@/app/_components/Experience";
import Project from "@/app/_components/Projects";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const initialOpenProjectName = Array.isArray(searchParams.project)
    ? searchParams.project[0]
    : searchParams.project;
  return (
    <>
      <AnimatedBeam>
        <div className="h-[calc(100svh-2rem)] w-full" id="home">
          <div className="title-body relative flex flex-col items-center justify-center h-full">
            <HOne
              className="text-3xl md:text-7xl lg:text-8xl"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              Hi, I'm <Magic name={"Tahmid Ahmed"} />
            </HOne>
            <br />
            <P
              className="text-center text-base md:text-lg lg:text-xl"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              Backend Software Engineer
              <sup className="ml-1 block text-[0.6em] leading-snug sm:inline sm:align-super">
                + a little platform/infra {"&"} frontend
              </sup>
            </P>
            <br />
            <Div
              className="space-x-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <LinkedIn
                url={"https://www.linkedin.com/in/thmd"}
                name={"/in/thmd"}
              />
              <GitHub
                url={"https://github.com/tahminator"}
                name={"tahminator"}
              />
              <Email
                url={"mailto:tahmid@tahmid.io"}
                email={"tahmid@tahmid.io"}
              />
            </Div>
          </div>
        </div>
        <Experience />
        <Project initialOpenProjectName={initialOpenProjectName} />
      </AnimatedBeam>
    </>
  );
}
