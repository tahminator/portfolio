import { Email } from "@/components/Button/Email";
import { GitHub } from "@/components/Button/GitHub";
import { LinkedIn } from "@/components/Button/LinkedIn";
import { Magic } from "@/components/Magic/Magic";
import { HOne } from "@/components/Motion/HOne";

import AnimatedBeam from "@/components/Background/Background";
import { Div } from "@/components/Motion/Div";
import Typewriter from "@/components/Typewriter/Typewriter";

const titles = [
  "",
  1500,
  "develop unique software",
  800,
  "solve hard problems",
  800,
  "learn new things",
  800,
];

export default function Home() {
  return (
    <>
      <AnimatedBeam>
        <div className="h-full w-full" id="home">
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
            <div className="flex items-center text-xl md:text-2xl lg:text-4xl">
              <div className="mr-2">I like to</div>
              <Typewriter steps={titles} />
            </div>
            <br />
            {/* TODO - Could use Framer to animate buttons */}
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
      </AnimatedBeam>
    </>
  );
}
