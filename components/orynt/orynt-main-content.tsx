import { ArrowRight, CircleDot } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  autonomousCapabilities,
  constraints,
  inefficiencies,
  marketTraits,
  principles,
  roadmapPhases,
  transitionImpacts,
} from "@/data/orynt-thesis";

import { PrincipleCard } from "./principle-card";
import { RoadmapCard } from "./roadmap-card";
import { SectionHeading } from "./section-heading";
import { ThesisCard } from "./thesis-card";

export function OryntMainContent() {
  return (
    <article className="mx-auto w-full max-w-4xl space-y-16 py-8 md:py-12">
      <section className="space-y-6" id="top">
        <Badge className="border-border uppercase tracking-[0.2em]">
          ORYNT
        </Badge>
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Adaptive Liquidity Infrastructure for Autonomous Finance
          </h1>
          <p className="text-base text-muted-foreground md:text-lg">Research Thesis - v0.1</p>
        </div>
        <p className="max-w-3xl text-base leading-7 text-muted-foreground">
          ORYNT explores adaptive liquidity infrastructure designed for autonomous finance as an
          evolving coordination layer for intelligent capital systems.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge>Research Thesis</Badge>
          <Badge>v0.1</Badge>
          <Badge>Autonomous Finance</Badge>
          <Badge>Adaptive Liquidity</Badge>
        </div>
      </section>

      <Separator />

      <section className="space-y-5">
        <SectionHeading id="opening-statement" title="Opening Statement" />
        <ThesisCard>
          <div className="space-y-4">
            <p>Markets were designed for human participation.</p>
            <p>The next financial layer will coordinate autonomous capital.</p>
            <p>
              Intelligent systems are evolving from passive computation into active economic
              participants.
            </p>
            <p>
              Static liquidity systems, fragmented coordination layers, and outdated execution models
              are no longer sufficient.
            </p>
            <p>
              ORYNT is not positioned as a traditional protocol or speculative interface, but as an
              evolving coordination layer for intelligent capital systems.
            </p>
          </div>
        </ThesisCard>
      </section>

      <section className="space-y-5">
        <SectionHeading id="the-shift" title="The Shift" />
        <p className="max-w-3xl text-base leading-7 text-muted-foreground">
          Financial infrastructure evolves in cycles: geography-limited systems, digitally connected
          markets, decentralized finance, and now autonomous financial systems.
        </p>
        <ThesisCard className="border-border bg-muted/35 shadow-none">
          <blockquote className="border-l border-border pl-4 text-lg text-foreground">
            The market is no longer defined exclusively by human decision-making.
          </blockquote>
        </ThesisCard>
      </section>

      <section className="space-y-6">
        <SectionHeading
          id="structural-inefficiency"
          title="Structural Inefficiency in Modern Liquidity Systems"
        />
        <p className="max-w-3xl text-base leading-7 text-muted-foreground">
          Modern decentralized liquidity environments remain fragmented despite ecosystem growth.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-border bg-card/70 shadow-none">
            <CardHeader>
              <CardTitle className="text-base">Current Constraints</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {constraints.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CircleDot className="mt-1 h-3.5 w-3.5 text-foreground" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-border bg-card/70 shadow-none">
            <CardHeader>
              <CardTitle className="text-base">Long-Term Inefficiencies</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {inefficiencies.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CircleDot className="mt-1 h-3.5 w-3.5 text-foreground" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading id="autonomous-capital-systems" title="Autonomous Capital Systems" />
        <p className="max-w-3xl text-base leading-7 text-muted-foreground">
          Autonomous capital extends beyond automation through adaptive and continuous participation.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {autonomousCapabilities.map((capability) => (
            <Card key={capability} className="border-border bg-card/70 shadow-none">
              <CardContent className="p-5">
                <p className="text-sm text-foreground">{capability}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="border-border bg-card/70 shadow-none">
          <CardHeader>
            <CardTitle className="text-base">Transition may reshape</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {transitionImpacts.map((impact) => (
                <li key={impact} className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-3.5 w-3.5 text-foreground" />
                  <span>{impact}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <SectionHeading id="adaptive-coordination-layers" title="Adaptive Coordination Layers" />
        <p className="max-w-3xl text-base leading-7 text-muted-foreground">
          Coordination is one of the most overlooked dimensions of decentralized financial
          infrastructure.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-border bg-card/70 shadow-none">
            <CardHeader>
              <CardTitle className="text-base">Traditional Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>- Isolated functionality</li>
                <li>- Static liquidity</li>
                <li>- Human-driven usage</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-border bg-card/70 shadow-none">
            <CardHeader>
              <CardTitle className="text-base">ORYNT Direction</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>- Coordinated interaction</li>
                <li>- Adaptive liquidity</li>
                <li>- Autonomous participation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          id="infrastructure-as-an-evolving-system"
          title="Infrastructure as an Evolving System"
        />
        <p className="max-w-3xl text-base leading-7 text-muted-foreground">
          Traditional financial architecture is often fixed. ORYNT treats infrastructure as an
          evolving system.
        </p>
        <div className="space-y-3">
          {["Market behavior evolves", "Participation structures evolve", "Execution environments evolve", "Infrastructure must remain adaptable"].map((line) => (
            <Card key={line} className="border-border bg-card/70 shadow-none">
              <CardContent className="p-4 text-sm text-muted-foreground">{line}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeading
          id="research-oriented-development-direction"
          title="Research-Oriented Development Direction"
        />
        <ThesisCard>
          <div className="space-y-3">
            <p>ORYNT is positioned as a research-oriented infrastructure direction.</p>
            <p>Not short-term complexity.</p>
            <p>Long-term infrastructure exploration.</p>
            <p>Foundational coordination efficiency before feature density.</p>
            <p>Directional infrastructure philosophy first.</p>
          </div>
        </ThesisCard>
      </section>

      <section className="space-y-5">
        <SectionHeading id="long-term-financial-evolution" title="Long-Term Financial Evolution" />
        <p className="max-w-3xl text-base leading-7 text-muted-foreground">
          Financial infrastructure continues evolving toward increasingly intelligent systems.
        </p>
        <div className="flex flex-wrap gap-2">
          {marketTraits.map((trait) => (
            <Badge key={trait} className="border-border px-3 py-1.5 text-sm">
              {trait}
            </Badge>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading id="evolution-path" title="Evolution Path" />
        <div className="grid gap-4 lg:grid-cols-3">
          {roadmapPhases.map((phase) => (
            <RoadmapCard key={phase.title} title={phase.title} items={phase.items} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading id="orynt-core-principles" title="ORYNT Core Principles" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {principles.map((principle) => (
            <PrincipleCard key={principle.title} title={principle.title} body={principle.body} />
          ))}
        </div>
      </section>

      <section className="space-y-5 pb-4">
        <SectionHeading id="closing-statement" title="Closing Statement" />
        <ThesisCard className="border-border bg-muted/35 shadow-none">
          <div className="space-y-3 text-foreground">
            <p>Markets adapt.</p>
            <p>Systems coordinate.</p>
            <p>Capital evolves.</p>
            <p className="text-muted-foreground">
              The next financial layer will not simply process transactions. It will coordinate
              autonomous value flow.
            </p>
            <p className="font-medium">
              ORYNT explores the infrastructure direction behind that transition.
            </p>
          </div>
        </ThesisCard>
      </section>
    </article>
  );
}
