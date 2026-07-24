export const profile = {
  name: "Kanumetta Rajesh",
  shortName: "Rajesh",
  title: "MERN Stack & Chatbot Associate",
  phone: "7989294331",
  email: "rkanumetta@gmail.com",
  github: "https://github.com/rkanumetta",
  medium: "https://medium.com/@rajesh92.k",
  linkedin: "https://www.linkedin.com/in/rajesh-kumar-kanumetta-609a82a9/",
  years: "8+",
  summary:
    "I design and ship enterprise chat platforms, contact-center flows, and MERN systems that scale under real traffic.",
  education: "MCA, JNTU-K University",
};

export const writing = [
  {
    title: "Prompting Is Dead. Long Live the Loop.",
    summary:
      "Why serious agentic work needs verify-and-repeat loops, not one-shot prompts. Outcomes beat utterances.",
    date: "Jul 2026",
    readTime: "8 min",
    url: "https://medium.com/@rajesh92.k/prompting-is-dead-long-live-the-loop-27d6028192b1",
    tags: ["Agentic AI", "Claude Code", "Automation"],
  },
  {
    title: "Stop Guessing Your LLM Costs",
    summary:
      "Build token observability in Node.js with all-llm-token-tracker. Track input, output, and usage across providers.",
    date: "Jul 2026",
    readTime: "5 min",
    url: "https://medium.com/@rajesh92.k/stop-guessing-your-llm-costs-build-token-observability-with-all-llm-token-tracker-441f5bce3d62",
    tags: ["LLM", "Node.js", "Observability"],
  },
  {
    title: "Mastering Node.js Authentication",
    summary:
      "User auth with MongoDB, Mongoose indexes, bcrypt hashing, and Joi request validation for secure APIs.",
    date: "Oct 2023",
    readTime: "3 min",
    url: "https://medium.com/@rajesh92.k/mastering-node-js-d134bc517e7a",
    tags: ["Node.js", "MongoDB", "Auth"],
  },
];

export const repos = [
  {
    name: "all-llm-token-tracker",
    description:
      "Lightweight npm package for LLM token observability. OpenAI and Anthropic extractors, pluggable storage, query summaries.",
    language: "TypeScript",
    stars: 1,
    url: "https://github.com/rkanumetta/all-llm-token-tracker",
    featured: true,
  },
  {
    name: "api.ai",
    description:
      "Chatbot fulfillment app built on Dialogflow / api.ai for conversational workflows.",
    language: "JavaScript",
    stars: 0,
    url: "https://github.com/rkanumetta/api.ai",
    featured: false,
  },
  {
    name: "chatbox",
    description: "Sample chat box application for conversational UI experiments.",
    language: "JavaScript",
    stars: 0,
    url: "https://github.com/rkanumetta/chatbox",
    featured: false,
  },
  {
    name: "api",
    description: "API experiments and service patterns in JavaScript.",
    language: "JavaScript",
    stars: 0,
    url: "https://github.com/rkanumetta/api",
    featured: false,
  },
];

export const experience = [
  {
    company: "RingCentral",
    role: "Chat Bot & MERN Developer",
    period: "May 2025 - Present",
    focus:
      "Dialogflow playbooks, multi-channel contact flows, React chat UIs, and LLM-backed bot analytics on GCP.",
  },
  {
    company: "Allstate Solutions",
    role: "Chat Bot & MEAN / MERN Developer",
    period: "Aug 2021 - May 2025",
    focus:
      "AWS Connect widgets, Lex flows, secure PII handling, Datadog monitoring, and mentoring engineers on delivery quality.",
  },
  {
    company: "Miracle Software Systems",
    role: "Chat Bot & MEAN Developer",
    period: "Oct 2016 - Aug 2021",
    focus:
      "Enterprise MEAN apps, Dialogflow bots, ServiceNow integrations, and automation frameworks for internal operations.",
  },
];

export const projects = [
  {
    name: "Support Bot & Analytics",
    org: "RingCentral",
    result: "LLM agents evaluate handoffs, history, and feedback loops for support performance.",
    stack: ["Dialogflow CX", "React", "Node.js", "GCP Cloud Run"],
  },
  {
    name: "AWS Connect Chat Widget",
    org: "Allstate",
    result: "Custom React chat with persistency, redaction, and concierge flows. Over 70% business growth in six months.",
    stack: ["AWS Connect", "ChatJS", "TypeScript", "Lex"],
  },
  {
    name: "Connect Flows & Monitoring",
    org: "Allstate",
    result: "Reusable contact modules plus dashboards tracking daily users, messages, and bot health.",
    stack: ["React", "Angular", "DynamoDB", "Node.js"],
  },
  {
    name: "Kendra Knowledge Search",
    org: "Allstate",
    result: "Fallback intent search over ServiceNow knowledge with analytics surfaced in Angular.",
    stack: ["AWS Kendra", "Lex", "Angular", "MongoDB"],
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    items: ["React", "Angular", "TypeScript", "HTML/CSS", "Jest"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "REST APIs", "MongoDB", "DynamoDB"],
  },
  {
    label: "Conversational AI",
    items: ["AWS Lex", "Dialogflow CX", "IBM Watson", "AWS Connect", "LLM agents"],
  },
  {
    label: "Cloud & Delivery",
    items: ["AWS", "GCP", "Firebase", "Docker", "Jenkins", "Datadog"],
  },
];
