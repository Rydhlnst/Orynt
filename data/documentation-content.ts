export type DocumentationSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export const documentationHero = {
  eyebrow: "ORYNT",
  title: "Adaptive Liquidity Infrastructure for Autonomous Finance",
  subtitle: "Research Thesis - v0.1",
  intro: "Markets were designed for human participation.",
  followUp: "The next financial layer will coordinate autonomous capital.",
};

export const documentationSections: DocumentationSection[] = [
  {
    id: "opening-statement",
    title: "Opening Statement",
    paragraphs: [
      "As intelligent systems evolve beyond passive computation into active economic participants, financial infrastructure must evolve alongside them.",
      "Static liquidity systems, fragmented coordination layers, and outdated execution models are no longer sufficient for machine-native environments.",
      "ORYNT explores adaptive liquidity infrastructure designed for autonomous finance.",
      "Not as a traditional protocol.",
      "Not as a speculative interface.",
      "But as an evolving coordination layer for intelligent capital systems.",
    ],
  },
  {
    id: "the-shift",
    title: "The Shift",
    paragraphs: [
      "Financial infrastructure evolves in cycles.",
      "Each cycle redefines how markets coordinate value, process information, distribute liquidity, and facilitate participation.",
      "The earliest financial systems were limited by geography.",
      "Digital infrastructure removed geographic limitations and introduced globally connected markets.",
      "Decentralized finance removed centralized dependency and enabled permissionless coordination.",
      "The next transition is already beginning.",
      "Autonomous systems are entering economic environments not as passive analytical tools, but as active participants.",
      "This changes the structure of financial interaction itself.",
      "The market is no longer defined exclusively by human decision-making.",
      "Execution systems are becoming increasingly algorithmic.",
      "Coordination layers are becoming increasingly automated.",
      "Liquidity flows are becoming increasingly dynamic.",
      "Participation itself is evolving toward machine-native interaction.",
      "This transition introduces entirely new infrastructure requirements.",
      "Traditional systems were not designed for autonomous capital coordination at scale.",
      "They were designed for human-driven interaction patterns.",
      "ORYNT explores the infrastructure direction required for this next financial layer.",
    ],
  },
  {
    id: "structural-inefficiency",
    title: "Structural Inefficiency in Modern Liquidity Systems",
    paragraphs: [
      "Modern decentralized liquidity environments remain highly fragmented.",
      "Despite rapid ecosystem growth, capital efficiency remains constrained by:",
      "Liquidity often exists.",
      "But coordination does not.",
      "This creates several long-term structural inefficiencies:",
    ],
    bullets: [
      "Disconnected execution layers",
      "Isolated liquidity environments",
      "Inconsistent coordination systems",
      "Static infrastructure design",
      "Fragmented liquidity distribution",
      "Reactive infrastructure models",
      "Human-centric design constraints",
      "Static execution architecture",
    ],
  },
  {
    id: "autonomous-capital-systems",
    title: "Autonomous Capital Systems",
    paragraphs: [
      "The concept of autonomous capital extends beyond automation.",
      "Autonomous systems are capable of participating within financial environments through:",
      "This transition may reshape:",
    ],
    bullets: [
      "Continuous analysis",
      "Adaptive execution",
      "Dynamic interaction",
      "Evolving coordination behavior",
      "Liquidity interaction",
      "Capital routing",
      "Execution timing",
      "Market coordination",
      "Decentralized participation",
      "Infrastructure scalability",
    ],
  },
  {
    id: "adaptive-coordination-layers",
    title: "Adaptive Coordination Layers",
    paragraphs: [
      "Coordination represents one of the most overlooked dimensions of decentralized financial infrastructure.",
      "Most systems optimize for isolated functionality.",
      "Few systems explore infrastructure capable of adaptive coordination across evolving market environments.",
      "ORYNT approaches infrastructure through the lens of coordinated interaction.",
    ],
  },
  {
    id: "infrastructure-as-evolving-system",
    title: "Infrastructure as an Evolving System",
    paragraphs: [
      "Traditional financial architecture is often designed as fixed infrastructure.",
      "ORYNT approaches infrastructure differently.",
      "Infrastructure is viewed as an evolving system.",
      "Adaptive systems cannot rely entirely on rigid architecture.",
      "As market behavior evolves, participation structures evolve, and execution environments evolve, infrastructure layers must remain capable of adaptation.",
    ],
  },
  {
    id: "research-oriented-development-direction",
    title: "Research-Oriented Development Direction",
    paragraphs: [
      "ORYNT is intentionally positioned as a research-oriented infrastructure direction.",
      "The objective is not short-term complexity.",
      "The objective is long-term infrastructure exploration.",
      "Many modern systems prioritize feature density before foundational coordination efficiency.",
      "ORYNT prioritizes directional infrastructure philosophy first.",
    ],
  },
  {
    id: "long-term-financial-evolution",
    title: "Long-Term Financial Evolution",
    paragraphs: [
      "Financial infrastructure continues evolving toward increasingly intelligent systems.",
      "Markets are becoming:",
      "This evolution introduces entirely new coordination challenges.",
      "ORYNT explores the infrastructure direction surrounding these evolving requirements.",
    ],
    bullets: [
      "More distributed",
      "More autonomous",
      "More interconnected",
      "More computational",
      "More adaptive",
    ],
  },
  {
    id: "evolution-path",
    title: "Evolution Path",
    paragraphs: ["Phase I - Initialization"],
    bullets: [
      "Network identity formation",
      "Community initialization",
      "Liquidity establishment",
      "Foundational infrastructure alignment",
      "Phase II - Coordination Layers",
      "Adaptive coordination research",
      "Infrastructure layer development",
      "Ecosystem positioning",
      "Phase III - Autonomous Infrastructure",
      "Autonomous financial coordination",
      "Intelligent execution systems",
      "Adaptive ecosystem layers",
    ],
  },
  {
    id: "orynt-core-principles",
    title: "ORYNT Core Principles",
    paragraphs: [
      "1. Adaptive Systems - Infrastructure must evolve alongside changing financial environments.",
      "2. Intelligent Coordination - Efficient systems depend on scalable coordination mechanisms.",
      "3. Autonomous Execution - Future markets will increasingly operate through machine-native interaction.",
      "4. Infrastructure First - Long-term ecosystems are built on resilient foundational layers.",
      "5. Minimal Complexity - Scalable systems prioritize clarity over unnecessary abstraction.",
    ],
  },
  {
    id: "closing-statement",
    title: "Closing Statement",
    paragraphs: [
      "Markets adapt.",
      "Systems coordinate.",
      "Capital evolves.",
      "The next financial layer will not simply process transactions.",
      "It will coordinate autonomous value flow.",
      "ORYNT explores the infrastructure direction behind that transition.",
    ],
  },
];

export const tableOfContents = documentationSections.map(({ id, title }) => ({
  id,
  title,
}));
