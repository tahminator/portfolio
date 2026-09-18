"use client";

import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { ReactNode, useRef, useState } from "react";
import { FaGithub, FaNpm } from "react-icons/fa6";
import { ProjectCard } from "@/app/_components/ProjectCard";
import { ProjectCardCompact } from "@/app/_components/ProjectCardCompact";
import { ModalProject, ProjectModal } from "@/app/_components/ProjectModal";

type Project = {
  name: string;
  video: string;
  blurb: ReactNode;
  description: ReactNode;
  caption?: ReactNode;
  links?: ReactNode[];
};

type GridItem =
  | { type: "single"; project: Project }
  | { type: "pair"; projects: [Project, Project] };

// Simulated against the lg:grid-cols-3 layout; smaller breakpoints wrap fine either way.
const GRID_COLS = 3;

function groupProjectsForGrid(projects: Project[]): GridItem[] {
  const items: GridItem[] = [];
  let col = 0;
  let rowHasVideo = false;
  let i = 0;

  const advance = () => {
    col = (col + 1) % GRID_COLS;
    if (col === 0) rowHasVideo = false;
  };

  while (i < projects.length) {
    const project = projects[i];

    if (project.video) {
      items.push({ type: "single", project });
      rowHasVideo = true;
      advance();
      i += 1;
      continue;
    }

    const cellsLeftInRow = GRID_COLS - col;
    const rowIsVideoFree =
      !rowHasVideo &&
      projects.slice(i, i + cellsLeftInRow).every((p) => !p.video);

    if (rowIsVideoFree) {
      const count = Math.min(cellsLeftInRow, projects.length - i);
      for (let k = 0; k < count; k++) {
        items.push({ type: "single", project: projects[i + k] });
        advance();
      }
      i += count;
      continue;
    }

    const next = projects[i + 1];
    if (next && !next.video) {
      items.push({ type: "pair", projects: [project, next] });
      i += 2;
    } else {
      items.push({ type: "single", project });
      i += 1;
    }
    advance();
  }

  return items;
}

const projects: Project[] = [
  {
    name: "Codebloom",
    video: "/codebloom_1.5x.mp4",
    blurb:
      "Competitive LeetCode leaderboard designed to motivate any engineer (or student) to grind for technical interviews by competing against peers.",
    description: (
      <>
        <p className="text-left">
          Over winter break 2024, I got the chance to lead a small team and
          create a project for Patina Network. We decided to make something that
          would help us stay motivated while we grind our technical skills
          during our internship search!
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
    name: "Instalock",
    video: "/instalock_1.5x.mp4",
    blurb:
      "Desktop & web app that can programmatically interact with undocumented Riot API.",
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
    name: "abclang",
    video: "/abclang_1.5x.mp4",
    blurb:
      "Custom programming language that is interpreted by an interpreter built in Rust (& can be called in the browser via WebAssembly).",
    description: (
      <>
        <p className="text-left">
          abclang is a dynamically typed programming language that is written in
          Rust
          {"&"} has a WebAssembly binding so it can be called within the
          browser.
        </p>
        <p className="text-left">
          The language was initially built by following{" "}
          <i>Writing an Interpreter in Go</i> (but tweaking it for Rust). Once I
          reached parity with the Monkey language found in the book, I started
          extending features on top of it (e.g. floats, for loops, mutable
          arrays {"&"} hashmaps, extra builtins, chars, and much more).
        </p>
        <p className="text-left">
          The playground allows you to run any abclang valid code inside of the
          browser, but it also has some cool examples (including two LeetCode
          solutions using abclang!).
        </p>
      </>
    ),
    links: [
      <a
        href={"https://abclang.tahmid.io"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant={"ghost"}>
          <Globe />
        </Button>
      </a>,
      <a
        href={"https://github.com/tahminator/abclang"}
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
    name: "Delta",
    video: "/delta_1.5x.mp4",
    blurb: "An IDE that uses AI to help manage messy merge conflicts.",
    description: (
      <>
        <p className="text-left">
          I (along with 4 other students) built Delta at the CCNY Byte Hacks
          2025 hackathon, where we won Best Overall Use of Google Products.
        </p>
        <p className="text-left">
          Startups often tend to move extremely fast, which leads to huge {"&"}
          messy merge conflicts that less experienced (or AI-assisted)
          developers struggle to resolve when they're just trying to ship.
        </p>
        <p className="text-left">
          Enter Delta. Delta leverages Gemini AI to reason about which
          conflicting changes are worth keeping, helping resolve conflicts
          intelligently instead of by hand.
        </p>
        <p className="text-left">
          I had a lot of fun working on Delta, especially because, for our POC,
          we decided to build a Git wrapper over HTTP so we can model our
          backend's state machine around it. Turns out, this was a lot harder
          than we initially thought, but we were eventually able to overcome
          that obstacle! If you're curious, here are some diagrams we drew about
          the git workflows we need to support:
        </p>
        <img src="/ccny1.png" />
        <img src="/ccny2.png" />
      </>
    ),
    links: [
      <a
        href={"https://github.com/tahminator/ccny-byte-hacks-2025"}
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
    video: "/pencil_1.5x.mp4",
    blurb:
      "Custom AI agent platform that students can message for homework help + generate practice problems using AI LaTeX generator.",
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
    video: "/gradealert_1.5x.mp4",
    blurb:
      "Mass text messaging platform used for reporting student progress to parents at Synergy Prep.",
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
    name: "Odyssey",
    video: "/odyssey_1.5x.mp4",
    blurb:
      "A routing app that gives you the scenic route between Point A and B (to enjoy the finer things in life).",
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
  {
    name: "k8s-personal",
    video: "",
    blurb: "My personal Kubernetes cluster config.",
    description: (
      <>
        <p className="text-left">
          This is the GitOps config as code repository for my personal
          Kubernetes cluster, which is used by a single node k3s cluster running
          on a VPS.
        </p>
        <p className="text-left">
          This VPS is where I have deployed countless services, some of which my
          own (e.g. instalock-web which serves 650+ users). This cluster has
          also been a good playground to try out new technologies/libraries
          before proposing them at work, which has proven to be quite valuable.
        </p>
        <p className="text-left">
          I even setup some standardization between environments, secrets via
          SOPS, Postgres with automated backups, Traefik to handle TLS + ingress
          + security, and even Tailscale.
        </p>
        <p className="text-left">
          Adding Tailscale to this cluster was actually a quite interesting
          challenge: how can I setup DNS routing for my personal devices on my
          Tailnet so that I don't have to remember Tailnet device IPs instead?
        </p>
        <p className="text-left">
          The solution was to add a secondary Traefik instance inside of the
          cluster that would act as an internal split DNS that would only be
          accessible when connected to Tailscale {"&"} only attempt to resolve
          DNS queries for my domain(s). Now, my internal services no longer need
          to exposed over the internet while still keeping it easy for my
          friends and families to connect {"&"} reach services.
        </p>
      </>
    ),
    links: [
      <a
        href={"https://github.com/tahminator/k8s-personal"}
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
    name: "@tahminator/sapling",
    video: "",
    blurb:
      "A lightweight Express.js dependency injection & routing library, inspired by Spring.",
    description: (
      <>
        <p className="text-left">
          Sapling is a dependency injection, routing, observability library,
          similar to how Spring works.
        </p>
        <p className="text-left">
          It is published on npm and powers instalock-web's backend with 650+
          users in production.
        </p>
        <p className="text-left">
          Sapling abstracts away the messy wiring that Express apps tend to
          accumulate, messy controllers, routes, and lack of separations -
          without losing Express's speed and simplicity.
        </p>
        <p className="text-left">
          It is inspired by Spring, but it is still lighter than frameworks like
          Nest.js; you can opt in or out of as much of it as you want, and drop
          down to plain Express whenever you may need to.
        </p>
      </>
    ),
    links: [
      <a
        href={"https://www.npmjs.com/package/@tahminator/sapling"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant={"ghost"}>
          <FaNpm />
        </Button>
      </a>,
      <a
        href={"https://github.com/tahminator/sapling"}
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
    name: "Patina-Network/k8s-manifests",
    video: "",
    blurb:
      "Patina Network's Kubernetes cluster config that I personally architected.",
    description: (
      <>
        <p className="text-left">
          This repository holds the config as code for Patina Network's
          Kubernetes cluster on AKS.
        </p>
        <p className="text-left">
          As of August 5, 2026, this cluster holds the main Patina database
          (setup with strong security, TLS {"&"} automated daily backups), as
          well as our two main Patina services (codebloom {"&"} patchats).
        </p>
        <p className="text-left">
          I have also standardized TLS, ingress, observability, rate limiting,
          security, {"&"} secrets across all the services in our organization.
          This is still with the awesome caveat that the cluster is still self
          service (so developers can make changes to infra {"&"} deployments via
          PRs).
        </p>
      </>
    ),
    links: [
      <a
        href={"https://github.com/Patina-Network/k8s-manifests"}
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
    name: "Patina-Network/platform-infra",
    video: "",
    blurb: "Patina Network's infrastructure-as-code repo with Pulumi.",
    description: (
      <>
        <p className="text-left">
          platform-infra is an infrastructure-as-code repository that manages
          the Patina Network GitHub organization and Azure resources as code via
          Pulumi via a GitOps workflow where every change goes through a pull
          request.
        </p>
        <p className="text-left">
          Just like Patina-Network/k8s-manifests, I designed this repository so
          that developers can self-service to add things quickly (whether that's
          an existing resource or a brand new one).
        </p>
      </>
    ),
    links: [
      <a
        href={"https://github.com/Patina-Network/platform-infra"}
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
    name: "@tahminator/pipeline",
    video: "",
    blurb: "Custom-built CICD library built over TypeScript and Bun Shell",
    description: (
      <>
        <p className="text-left">
          `@tahminator/pipeline` is a custom library I built that is used across
          all my personal repositories as well as all our repositories within
          Patina Network.
        </p>
        <p className="text-left">
          As a patented Gen-Z engineer, I always hated writing bash scripts; so
          I did what everyone my age does, make it so I can use TypeScript
          instead! :)
        </p>
        <p className="text-left">
          This library helps abstract a lot of logic into very easy to use
          clients. Some examples includes a Sonar client for code coverage in
          any language or configuration, local Postgres {"&"} Redis instances
          that can be spun up quickly
          {"&"} easily in CI, a GitHub client that can be used to interface with
          various parts of the Github API (including Actions functionality), and
          much more.
        </p>
        <p className="text-left">See some examples of it being used here:</p>
        <ul className="text-left">
          <li>
            <a
              href={
                "https://github.com/tahminator/portfolio/blob/main/.github/scripts/src/deploy/index.ts#L16-L29"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              tahminator/portfolio/.github/scripts/src/deploy/index.ts#L16-L29
            </a>
            <ul>
              <li>
                GitHub App token auth {"&"} bumping a k8s manifest via PR.
              </li>
            </ul>
          </li>
          <li>
            <a
              href={
                "https://github.com/tahminator/instalock-web/blob/main/.github/scripts/src/deploy/index.ts#L33-L46"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              tahminator/instalock-web/.github/scripts/src/deploy/index.ts#L33-L46
            </a>
            <ul>
              <li>Same GitHub client, but env decrypted via git-crypt.</li>
            </ul>
          </li>
          <li>
            <a
              href={
                "https://github.com/tahminator/sapling/blob/main/.github/scripts/src/upload-npm/index.ts#L1-L7"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              tahminator/sapling/.github/scripts/src/upload-npm/index.ts#L1-L7
            </a>
            <ul>
              <li>Publishing an npm package in one line via NPMClient.</li>
            </ul>
          </li>
          <li>
            <a
              href={
                "https://github.com/Patina-Network/patchats/blob/main/.github/scripts/src/db/run-local-db/index.ts#L1-L19"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Patina-Network/patchats/.github/scripts/src/db/run-local-db/index.ts#L1-L19
            </a>
            <ul>
              <li>
                Spinning up a disposable local Postgres for CI migrations.
              </li>
            </ul>
          </li>
          <li>
            <a
              href={
                "https://github.com/Patina-Network/platform-infra/blob/main/.github/scripts/src/pulumi/up.ts#L1-L26"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Patina-Network/platform-infra/.github/scripts/src/pulumi/up.ts#L1-L26
            </a>
            <ul>
              <li>SOPS-decrypted env vars piped into a Pulumi up wrapper.</li>
            </ul>
          </li>
        </ul>
      </>
    ),
    links: [
      <a
        href={"https://www.npmjs.com/package/@tahminator/pipeline"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant={"ghost"}>
          <FaNpm />
        </Button>
      </a>,
      <a
        href={"https://github.com/tahminator/pipeline"}
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
    name: "OSS Contributions",
    video: "",
    blurb:
      "A few bugfixes & small features I've upstreamed to tools I use daily.",
    description: (
      <ul className="text-left">
        <li>
          <a
            href="https://github.com/LargeModGames/spotatui/pull/304"
            target="_blank"
            rel="noopener noreferrer"
          >
            LargeModGames/spotatui
          </a>
          <ul>
            <li>Made the Vim-style movement keybinds fully configurable.</li>
          </ul>
        </li>
        <li>
          <a
            href="https://github.com/Jean-Tinland/simple-bar/pull/478"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jean-Tinland/simple-bar
          </a>
          <ul>
            <li>
              Added a toggle to show/hide Spotify metadata (artist {"&"} track
              name).
            </li>
          </ul>
        </li>
        <li>
          <a
            href="https://github.com/pulumi/pulumi-digitalocean/pull/1420"
            target="_blank"
            rel="noopener noreferrer"
          >
            pulumi/pulumi-digitalocean
          </a>
          <ul>
            <li>
              Marked a token output as a secret so it can{"'"}t leak in output
              state.
            </li>
          </ul>
        </li>
        <li>
          <a
            href="https://github.com/pwntester/octo.nvim/pull/1535"
            target="_blank"
            rel="noopener noreferrer"
          >
            pwntester/octo.nvim
          </a>
          <ul>
            <li>
              Made branch name matching case-sensitive so local diffs load
              correctly that otherwise would not.
            </li>
          </ul>
        </li>
        <li>
          <a
            href="https://github.com/nvimtools/none-ls.nvim/pull/290"
            target="_blank"
            rel="noopener noreferrer"
          >
            nvimtools/none-ls.nvim
          </a>
          <ul>
            <li>
              Fixed Checkstyle diagnostics not showing by stripping a file: URI
              prefix Neovim doesn{"'"}t support.
            </li>
          </ul>
        </li>
      </ul>
    ),
  },
];

export default function Project({
  initialOpenProjectName,
}: {
  initialOpenProjectName?: string;
}) {
  const [selected, setSelected] = useState<Project | null>(() =>
    projects.find(
      (project) => project.name.toLowerCase() === initialOpenProjectName?.toLowerCase(),
    ) ?? null,
  );
  const cardVideoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const modalStartTime = useRef(0);

  const openProject = (project: Project) => {
    modalStartTime.current =
      cardVideoRefs.current[project.name]?.currentTime ?? 0;
    setSelected(project);
  };

  const closeModal = (lastTime: number) => {
    if (selected) {
      const cardVideo = cardVideoRefs.current[selected.name];
      if (cardVideo) {
        cardVideo.currentTime = lastTime;
      }
    }
    setSelected(null);
  };

  const modalProject: ModalProject | null = selected
    ? {
        name: selected.name,
        video: selected.video,
        startTime: modalStartTime.current,
        caption: selected.caption,
        description: selected.description,
        links: selected.links,
      }
    : null;

  return (
    <div id="projects" className="w-full flex flex-col items-center my-24 px-4">
      <h2 className="mb-10 text-2xl font-semibold md:text-3xl">Projects</h2>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groupProjectsForGrid(projects).map((item) => {
          if (item.type === "pair") {
            return (
              <div
                key={item.projects.map((p) => p.name).join("+")}
                className="flex h-full flex-col gap-6"
              >
                {item.projects.map((project) => (
                  <ProjectCardCompact
                    key={project.name}
                    name={project.name}
                    blurb={project.blurb}
                    onClick={() => openProject(project)}
                  />
                ))}
              </div>
            );
          }

          const { project } = item;

          if (!project.video) {
            return (
              <ProjectCardCompact
                key={project.name}
                name={project.name}
                blurb={project.blurb}
                onClick={() => openProject(project)}
              />
            );
          }

          return (
            <ProjectCard
              key={project.name}
              name={project.name}
              video={project.video}
              blurb={project.blurb}
              forcePause={selected !== null}
              videoRef={(el) => {
                cardVideoRefs.current[project.name] = el;
              }}
              onClick={() => openProject(project)}
            />
          );
        })}
      </div>

      <ProjectModal project={modalProject} onClose={closeModal} />
    </div>
  );
}
