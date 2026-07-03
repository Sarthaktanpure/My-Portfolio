export const site = {
  name: "Sarthak Tanpure",
  tagline: "Full-Stack Developer & AI/ML Engineer building explainable, production-deployed systems",
  positioning: "Full-stack engineer who ships explainable AI systems, not just prototypes.",
  education:
    "B.E. Information Technology, Pravara Rural Engineering College (PREC), Loni - CGPA 9.0/10.0, Rank 1 in cohort, Top 5% in district",
  contactEmail: "sarthaktanpure255@gmail.com",
  contactPhone: "+91 9307919092",
  resumeHref: "/resume.pdf",
  githubHref: "https://github.com/Sarthaktanpure",
  linkedInHref: "https://linkedin.com/in/sarthak-tanpure-a74b5133a",
  leetcodeHref: "https://leetcode.com/u/Sarthak_Tanpure_01",
  rootUrl: "https://replace-with-your-domain.example.com",
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "MedVision AI", href: "#medvision" },
  { label: "Projects", href: "#projects" },
  { label: "DSA", href: "#dsa" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { label: "CGPA", value: "9.0/10" },
  { label: "DSA", value: "250+ problems" },
  { label: "Projects", value: "5 shipped" },
  { label: "Hackathons", value: "4 national" },
];

export const skills = [
  {
    title: "Languages",
    note: "Contest-ready and backend-friendly.",
    items: ["Java", "C++", "JavaScript", "Python"],
  },
  {
    title: "Full-Stack",
    note: "MERN, real-time apps, and REST-first systems.",
    items: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "REST APIs"],
  },
  {
    title: "DevOps",
    note: "Practical deployment and delivery tooling.",
    items: ["Git", "Docker", "Kubernetes", "CI/CD", "Render", "GoDaddy"],
  },
  {
    title: "Tools",
    note: "Shipping and debugging the whole stack.",
    items: ["GitHub", "Postman", "Razorpay API", "Vercel"],
  },
];

export const flagshipProject = {
  name: "MedVision AI",
  shortName: "Explainable Deep Learning for Radiology Triage",
  summary:
    "A CNN-based triage pipeline for chest X-ray and CT scan classification with Grad-CAM overlays, built as a decoupled Python microservice that keeps the MERN app fast and scalable.",
  stack: ["MERN", "Python microservice", "TensorFlow", "CNN", "Grad-CAM", "Flask", "React", "Node.js"],
  githubHref: "https://github.com/Sarthaktanpure/MedVision",
  bullets: [
    "CNN pipeline uses transfer learning with ResNet and EfficientNet backbones to detect abnormalities in chest imaging.",
    "Independent Python service handles preprocessing and inference so the web app stays responsive under load.",
    "Grad-CAM overlays translate predictions into clinician-readable heatmaps instead of black-box scores.",
  ],
  pipeline: [
    "React Upload",
    "Node/Express API",
    "REST Bridge",
    "Python/Flask Service",
    "CNN + Grad-CAM",
  ],
};

export const projects = [
  {
    name: "FullStack Trading Platform",
    tag: "Zerodha Clone",
    summary:
      "Production-grade trading dashboard with portfolio tracking, holdings, and order placement modeled on Zerodha Kite's utility-first UX.",
    liveHref: "https://zerodha-dun.vercel.app",
    githubHref: "https://github.com/Sarthaktanpure/Zerodha",
    stack: ["React", "Node", "Express", "MongoDB", "REST"],
    accent: "amber",
  },
  {
    name: "AgriConnect",
    tag: "Marketplace",
    summary:
      "Farmer-to-buyer marketplace with role-based auth, Razorpay payments, and real-time order/chat updates through Socket.io.",
    liveHref: "https://agriconnect-ohet.vercel.app",
    githubHref: "https://github.com/Sarthaktanpure/Agriconnect",
    stack: ["MongoDB", "Razorpay", "Socket.io", "Express", "React"],
    accent: "teal",
  },
  {
    name: "MeetSpace",
    tag: "WebRTC Rooms",
    summary:
      "Low-latency peer-to-peer video conferencing with multi-user rooms, screen sharing, and resilient signaling logic.",
    liveHref: "",
    githubHref: "https://github.com/Sarthaktanpure/MeetSpace",
    stack: ["WebRTC", "Socket.io", "React", "Node", "STUN/TURN"],
    accent: "slate",
  },
  {
    name: "Jay Yogeshwar Solar",
    tag: "Client Delivery",
    summary:
      "Paid freelance website delivered end-to-end as a second-year student, from requirements and design through deployment.",
    liveHref: "https://jayyogeshwarsolar.in",
    githubHref: "",
    stack: ["Full-stack delivery", "UI design", "Deployment", "Client communication"],
    accent: "gold",
  },
];

export const dsa = {
  headline: "250+ problems solved on LeetCode and GFG",
  detail:
    "Strong in Java under contest constraints, with pattern coverage across arrays, linked lists, stacks, queues, graphs, DP, sliding window, and trees.",
  href: site.leetcodeHref,
  grid: [
    [1, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 1, 0, 1, 1],
  ],
};

export const hackathons = [
  {
    name: "Google Solution Challenge",
    result: "Top 100+ in India",
    detail: "GSA track placement in a national-level competition focused on solving real-world problems.",
  },
  {
    name: "PICT Hackathon",
    result: "Top 10 of 250+",
    detail: "Strong showing in a large field with rapid prototyping and product framing.",
  },
  {
    name: "NMIT Hackathon",
    result: "Finalist, Top 5 of 100+",
    detail: "AI/ML track finalist with an emphasis on applied model integration.",
  },
  {
    name: "Amity Nirman Hackathon",
    result: "Top 15 of 100+",
    detail: "Cybersecurity track second-round qualifier with practical implementation focus.",
  },
];

export const experience = {
  title: "Freelance Web Delivery",
  company: "Jay Yogeshwar Solar",
  period: "Client project",
  detail:
    "Solo-delivered a business website end-to-end as a second-year student: requirements gathering, interface design, build, and deployment.",
  highlights: [
    "Handled scope, communication, and delivery like a real client engagement.",
    "Converted business needs into a reliable public-facing site with a production-ready handoff.",
    "Built credibility through shipping, not just demos.",
  ],
};

export const contactLinks = [
  {
    label: "Email",
    value: site.contactEmail,
    href: `mailto:${site.contactEmail}`,
  },
  {
    label: "Phone",
    value: site.contactPhone,
    href: `tel:${site.contactPhone.replace(/\s+/g, "")}`,
  },
  {
    label: "GitHub",
    value: "Sarthaktanpure",
    href: site.githubHref,
  },
  {
    label: "LinkedIn",
    value: "sarthak-tanpure-a74b5133a",
    href: site.linkedInHref,
  },
  {
    label: "LeetCode",
    value: "Sarthak_Tanpure_01",
    href: site.leetcodeHref,
  },
];
