import { Email } from "@/components/Button/Email";
import { GitHub } from "@/components/Button/GitHub";
import { LinkedIn } from "@/components/Button/LinkedIn";
import { Resume } from "@/components/Button/Resume";
import Card from "@/components/Card/Card";
import { CardBody } from "@/components/Card/CardBody";
import { Magic } from "@/components/Magic/Magic";
import { MagicStar } from "@/components/Magic/MagicStar";
import { Progress } from "@/components/Progress";
import { BiCalendar, BiMouse } from "react-icons/bi";
import { CgCalendar } from "react-icons/cg";
import { FaMouse } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { GiSprint } from "react-icons/gi";
import { ImProfile } from "react-icons/im";
import { RiMickeyFill } from "react-icons/ri";
import { SiRiotgames } from "react-icons/si";
import { TbHandFinger } from "react-icons/tb";
// TODO - Add images to the cards instead of icons
import { motion } from "framer-motion";
import { HOne } from "@/components/Motion/HOne";
import { HTwo } from "@/components/Motion/HTwo";
import { HThree } from "@/components/Motion/HThree";
import { ShimmerText } from "@/components/ShimmerText/ShimmerText";

import InstalockImg from "../../public/screenshot/instalock.midhat.io.png";
import PortfolioImg from "../../public/screenshot/midhat.io.png";
import PencilImg from "../../public/screenshot/pencil.synergy-prep.com.png";
import TodoImg from "../../public/screenshot/todo.midhat.io.png";
import Typewriter from "@/components/Typewriter/Typewriter";
import AnimatedBeam from "@/components/Background/Background";
import ResumeV2 from "@/components/Button/ResumeV2";
import BlurFade from "@/components/magicui/blur-fade";
import TextReveal from "@/components/magicui/text-reveal";

export default function Home() {
  const titles = [
    "",
    1500,
    "create fullstack apps",
    1500,
    "break fullstack apps",
    300,
    "solve hard problems",
    1500,
    "learn new things",
    1500,
  ];
  return (
    <>
      <AnimatedBeam>
        <div className="h-full w-full" id="top">
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
            <div>
              <Resume />
            </div>
            <div className="space-x-4">
              <LinkedIn url={"/linkedin"} name={"/in/thmd"} />
              <GitHub url={"https://github.com/tahminator"} name={"0pengu"} />
              <Email
                url={"mailto:tahmid@midhat.io"}
                email={"tahmid@midhat.io"}
              />
            </div>
          </div>
        </div>
      </AnimatedBeam>
      <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg text-center">
        <TextReveal text="I am a computer science student at Hunter College who is particularly passionate about fullstack development." />
      </div>
      <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg">
        <TextReveal text="Here are some projects I have been working on" />
      </div>
      <div className="w-dvw h-dvh content-center text-center">
        <div className="text-center text-2xl p-2">Projects</div>
        <CardBody>
          <Card
            href="https://pencil.synergy-prep.com"
            title="PENCIL"
            alt="Project Pencil for Synergy Prep by Tahmid Ahmed"
            type="clickable"
            icon={<FaPencil size={"50"} />}
            src={PencilImg}
            description="An educational assistant powered by AI"
            languages={[
              "typescript",
              "react",
              "vite",
              "python",
              "flask",
              "postgres",
              "redis",
              "rq",
              "caddy",
              "docker",
              "discord",
            ]}
          />
          <Card
            href="https://instalock.midhat.io"
            title="Instalock"
            alt="Instalock Valorant Companion by Tahmid Ahmed"
            type="clickable"
            icon={<SiRiotgames size={"50"} />}
            src={InstalockImg}
            description="A companion webapp for hit FPS game Valorant"
            languages={[
              "typescript",
              "react",
              "vite",
              "python",
              "flask",
              "postgres",
              "redis",
              "vercel",
            ]}
          />
          <Card
            href="https://todo.midhat.io"
            title="custom:latex"
            alt="Todo App made with Next.js by Tahmid Ahmed"
            type="clickable"
            icon={<BiCalendar size={"50"} />}
            src={TodoImg}
            description="A todo app integrated with Discord"
            languages={["typescript", "next", "supabase", "vercel", "discord"]}
          />
          <Card
            href="https://github.com/0pengu/midhat.io"
            title="Portfolio"
            alt="Portfolio website made with Next.js by Tahmid Ahmed"
            type="clickable"
            src={PortfolioImg}
            icon={<ImProfile size={"50"} />}
            description="Portfolio website to showcase my projects"
            languages={["typescript", "next", "tailwind", "vercel"]}
          />
          <Card
            title="Mouseketool"
            type="unclickable"
            alt="Mouseketool made with Next.js by Tahmid Ahmed"
            icon={<RiMickeyFill size={"50"} />}
            description="A graphical program that uses Twilio to send parents student reports"
            languages={["python", "twilio", "sqlite"]}
          />
          <Card
            title="Quick!"
            type="unclickable"
            alt="Quick! Valorant by Tahmid Ahmed"
            icon={<GiSprint size={"50"} />}
            description="A graphical program that sends notifications about Valorant matches"
            languages={["python", "twilio"]}
          />
        </CardBody>
      </div>
    </>
  );
}
