import { Button } from "@/components/ui/button";
import Video from "@/components/Video/Video";
import { Globe } from "lucide-react";
import { Fragment, ReactNode } from "react";
import { FaGithub } from "react-icons/fa6";

type Project = {
  name: string;
  video: string;
  description: ReactNode;
  caption?: ReactNode;
  links?: ReactNode[];
};

const projects: Project[] = [
  {
    name: "Codebloom",
    video: "/codebloom.mp4",
    description: (
      <>
        <p className="text-left">
          Over winter break, I got the chance to lead a small team and create a
          project for Patina Network. We decided to make something that would
          help us stay motivated while we grind our technical skills during our
          internship search!
        </p>
        <p className="text-left">
          Codebloom is a website that "game-ifies" LeetCode by giving you points
          for solving problems on a global leaderboard lets you compete against
          your friends in a lower-stakes leaderboard system.
        </p>
        <p className="text-left">
          We had a lot of fun building this out because of all the challenges we
          faced. A good example was trying to figure out how to reverse LeetCode
          GraphQL queries! Once we did, we then had to figure out how to access
          some of the data that were locked behind protected GraphQL queries
          (things like runtime, code, and more).
        </p>
        <p className="text-left">
          We're really proud of the project and we hope that people find this
          just useful as we did! Anyone is free to join, so use the links below
          to view the website, as well as the GitHub repo if you would like to
          see the code!
        </p>
      </>
    ),
    links: [
      <a
        href={"https://codebloom.patinanetwork.org"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant={"ghost"}>
          <Globe />
        </Button>
      </a>,
      <a
        href={"https://github.com/tahminator/codebloom"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant={"ghost"}>
          <FaGithub />
        </Button>
      </a>,
    ],
  },
  {
    name: "Project PENCIL",
    video: "/pencil.mp4",
    description: (
      <div className="text-left">
        When I was working at Synergy Prep, I built a webapp that would help us
        bridge the gap between articial intelligence and education. As a result,
        PENCIL was born! PENCIL has all the regular tools that a student may
        want out of an AI assistant, such as:
        <ul>
          <li>Chatting with AI</li>
          <li>Upload images</li>
          <li>Favorite messages to come back to later</li>
          <li>
            LaTeX, Markdown, and Code formatters built in to the text messages
          </li>
        </ul>
        and more. But most importantly, students can log in and generate LaTeX
        documents and print them out as a PDF. Students can solve these PDFs and
        use the attached answer key to check their work.
      </div>
    ),
  },
  {
    name: "GradeAlert",
    video: "/gradealert.mp4",
    caption: (
      <figcaption>
        The video contains mock data due to the fact that production contains
        sensitive student data.
      </figcaption>
    ),
    description: (
      <>
        <p className="text-left">
          One of the things that we would do at Synergy Prep was text parents
          about how their child was doing in class. It was a good system, but
          there was a big problem: we would send all of these texts manually.
        </p>
        <p className="text-left">
          So in order to save some time, I just wrote up a simple Python script
          that would scan a CSV file and send the texts with Twilio. Even at
          it's most basic iteration, it helped save the company a lot of labor
          hours.
        </p>

        <p className="text-left">
          The program has seen many iterations from a basic desktop GUI written
          Python and TKInter to a fully-fledged web application written in
          Next.js. The program has been used to send countless messages since
          its inception and has helped the company meet the goal of sending
          consistent messages en masse.
        </p>
      </>
    ),
  },
  {
    name: "Instalock",
    video: "/instalock.mp4",
    description: (
      <>
        <p className="text-left">
          To preface: Instalock actually exists as a proof-of-concept (for
          educational purposes), even though the application is fully working.
        </p>
        <div className="text-left">
          Instalock is a tool that lets user log in with their Riot credentials
          and do the following:
          <ul>
            <li>View all your previous games</li>
            <ul>
              <li>The map</li>
              <li>The name of everyone in the game</li>
              <li>Everyone's rank at that given game</li>
            </ul>
            <li>View the stats of your current live game.</li>
            <li>Select an agent in the lock screen from the webite</li>
          </ul>
          and more.
        </div>
        <p className="text-left">
          Fun fact: I actually rewrote this project about 4 times, of which the
          original write was in high school, years before I decided to do
          Computer Science!
        </p>
      </>
    ),
    links: [
      <a
        href={"https://instalock.app"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant={"ghost"}>
          <Globe />
        </Button>
      </a>,
      <a
        href={"https://github.com/tahminator/instalock-web"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant={"ghost"}>
          <FaGithub />
        </Button>
      </a>,
    ],
  },
  {
    name: "Odyssey",
    video: "/odyssey.mp4",
    description: (
      <>
        <p className="text-left">
          Odyssey was a webapp that I made at HackRPI!
        </p>
        <p className="text-left">
          Odyssey works similar to Google Maps or any other routing software,
          helping you to get from Point A to Point B.
        </p>
        <p className="text-left">
          However, Odyssey's use shines for people who have some time to call on
          their journey, as Odyssey will take slight detours in order to take
          you through more picturesque views throughout your route!
        </p>
        <p className="text-left">
          Even though we didn't win, I had a lot of fun competing, especially
          since it was my first hackathon! One of the highlights of the
          hackathon was getting to do something I’ve always wanted to do -
          rewriting an outdated open-source library. If you want to see the
          file, you can view it{" "}
          <a
            href="https://github.com/tahminator/hackrpi-project/blob/main/src/lib/lrm-graphhopper.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          !
        </p>
        <p className="text-left">
          You can find the link to the website below, as well as the GitHub
          repository if you would like to view the code!
        </p>
      </>
    ),
    links: [
      <a
        href={"https://odysseyapp.cc"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant={"ghost"}>
          <Globe />
        </Button>
      </a>,
      <a
        href={"https://github.com/tahminator/hackrpi-project"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant={"ghost"}>
          <FaGithub />
        </Button>
      </a>,
    ],
  },
];

export default function Project() {
  return (
    <div
      id="projects"
      className="w-screen min-h-screen flex flex-col items-center gap-24 my-12"
    >
      {projects.map(({ name, video, description, caption, links }, key) => (
        <div
          key={key}
          className="flex flex-col lg:flex-row rounded-md lg:w-5/6 p-8 gap-16"
        >
          <article className="prose-invert prose text-center lg:w-1/2">
            <Video
              src={video}
              autoPlay
              muted
              loop
              className="rounded-md"
              controls={true}
            />
            {caption}
          </article>
          <article className="prose-invert prose text-center lg:w-1/2">
            <h3>{name}</h3>
            {description}
            {links && (
              <div className="flex flex-row">
                {links.map((link) => (
                  <Fragment key={key}>{link}</Fragment>
                ))}
              </div>
            )}
          </article>
        </div>
      ))}
    </div>
  );
}
