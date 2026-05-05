// LOCAL_META doubles as a whitelist — only repos listed here appear in the portfolio.
export const LOCAL_META = {
  ScanMate: {
    description:
      'Privacy-first iOS document scanner built for the visually-impaired community. Offline-first architecture with Core Data persistence and zero cloud dependency. Published academic paper.',
    tags: ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'iOS', 'Accessibility'],
  },
  DebugMentor: {
    description:
      'AI-driven coding interview coach using reinforcement learning (REINFORCE, Thompson Sampling, UCB1) to dynamically select practice problems and adapt debugging strategies to each learner\'s skill level.',
    tags: ['Python', 'Reinforcement Learning', 'PyTorch', 'Claude API', 'Thompson Sampling'],
  },
  BlogForge: {
    description:
      'Multi-agent AI content creation pipeline using CrewAI and Groq LLaMA. Autonomously researches, writes, edits, and publishes blog posts — iterating until a measurable quality threshold is met.',
    tags: ['Python', 'CrewAI', 'Groq LLaMA', 'Multi-Agent', 'Agentic AI'],
  },
  'Cyberbullying-risk-detection-system': {
    displayName: 'Cyberbullying Risk Detector',
    description:
      'Content moderation triage tool that fine-tunes DistilBERT with LoRA to classify social media comments into Safe, Toxic, and Cyberbullying categories. Only 1.09% of parameters trainable — served via Gradio.',
    tags: ['Python', 'DistilBERT', 'LoRA', 'Hugging Face', 'NLP', 'Gradio'],
  },
  'wcag-compliance-auditor': {
    displayName: 'WCAG Compliance Auditor',
    description:
      'Automated WCAG 2.2 auditor that detects accessibility violations and uses AI to generate code-level fixes — targeting the 95.9% of websites that fail basic accessibility checks.',
    tags: ['Python', 'WCAG 2.2', 'Accessibility', 'Prompt Engineering', 'GenAI'],
  },
  'info7375-midterm-reasoning-patterns': {
    displayName: 'Reasoning Patterns Notebook',
    description:
      'Jupyter notebook + research chapter benchmarking ReAct vs Plan-and-Execute reasoning architectures for LLM agents. Deep dive into agentic AI internals with annotated experiments.',
    tags: ['Python', 'ReAct', 'Plan-and-Execute', 'LLM Agents', 'Jupyter'],
  },
  'Escape-room-project': {
    displayName: 'Escape Room Automation Engine',
    description:
      'Full-stack escape room web app implementing all 15 GoF design patterns (Singleton, Factory, Observer, Strategy, Decorator, Command, and more) in a real working application. 3-milestone capstone.',
    tags: ['Java 17', 'Spring Boot', 'React 18', 'Design Patterns', 'GoF', 'H2'],
  },
  chatapp: {
    displayName: 'Chat App',
    description:
      'Real-time Firebase-powered messaging app with user authentication, live chat, and media sharing. 4 GitHub stars.',
    tags: ['Flutter', 'Firebase', 'Dart', 'Real-time'],
  },
  'Clone-Netflix': {
    displayName: 'Netflix Clone',
    description:
      'Full-featured Netflix clone with stunning login animations powered by Rive, movie detail pages, and IMDB API integration.',
    tags: ['Flutter', 'Dart', 'Rive Animations', 'REST API'],
  },
  Scancer: {
    description:
      'ML-based Flutter app that scans certificates, extracts structured data via OCR, and exports detected entities as Excel sheets.',
    tags: ['Flutter', 'Dart', 'ML', 'OCR', 'Data Extraction'],
  },
  covifind: {
    displayName: 'CoviFind',
    description:
      'Flutter app that detects COVID-19 from X-ray and CT scan images using an on-device TensorFlow Lite model. Also surfaces live COVID stats by country and state via public APIs.',
    tags: ['Flutter', 'TensorFlow Lite', 'Dart', 'REST APIs', 'ML', 'Health Tech'],
  },
}

// Projects not on GitHub — appended after the fetched repos.
export const MANUAL_PROJECTS = [
  {
    id: 'manual-1',
    name: 'IdeaBoard',
    displayName: 'IdeaBoard',
    description:
      'Social innovation platform enabling users to post, comment, and vote on ideas. Built with MVC architecture, annotated JPA entities, and RESTful APIs for scalable backend design and clean separation of concerns.',
    tags: ['Java', 'Spring Boot', 'Hibernate', 'JSP', 'MySQL', 'Tomcat'],
    language: 'Java',
    github: null,
    stars: 0,
  },
  {
    id: 'manual-2',
    name: 'PersonalFinanceManager',
    displayName: 'Personal Finance Manager',
    description:
      'Full-stack finance tracker built with ReactJS and Spring Boot. Supports income and expense logging, budget setup, and transaction history. Applies OOP principles — Encapsulation for data management, Inheritance for transaction types.',
    tags: ['Java', 'Spring Boot', 'React JS', 'MS SQL', 'OOP'],
    language: 'Java',
    github: null,
    stars: 0,
  },
]

export const fallbackProjects = Object.keys(LOCAL_META).map((name, i) => ({
  id: i + 1,
  name,
  displayName: LOCAL_META[name].displayName || name,
  description: LOCAL_META[name].description || '',
  tags: LOCAL_META[name].tags || [],
  language: null,
  github: `https://github.com/Vrushti24/${name}`,
  stars: 0,
}))
