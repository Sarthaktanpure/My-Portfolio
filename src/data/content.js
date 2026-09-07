export const site = {
  name: "Sarthak Tanpure",
  tagline: "Full-Stack Developer & AI/ML Engineer building explainable, production-deployed systems",
  positioning: "Full-stack engineer who ships explainable AI systems, not just prototypes.",
  education:
    "B.E. Information Technology, Pravara Rural Engineering College (PREC), Loni - CGPA 9.0/10.0, Rank 1 in cohort, Top 5% in district",
  contactEmail: "sarthaktanpure255@gmail.com",
  contactPhone: "+91 9307919092",
  resumeHref: "/resume.docx",
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
  { label: "DSA", value: "136+ solved" },
  { label: "Projects", value: "6+ shipped" },
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
  githubHref: "https://github.com/Sarthaktanpure/MedVisionAI",
  liveHref: "https://med-vision-ai-green.vercel.app",
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
    name: "MedVision AI",
    tag: "Radiology Triage & Explainable AI",
    summary:
      "Deep learning medical imaging platform featuring CNN abnormality detection, Grad-CAM heatmap overlays, multi-scan comparison, and automated clinician report generation.",
    liveHref: "https://med-vision-ai-green.vercel.app",
    githubHref: "https://github.com/Sarthaktanpure/MedVisionAI",
    stack: ["TypeScript", "Python", "FastAPI", "React", "CNN", "Grad-CAM", "OpenCV"],
    accent: "cyan",
  },
  {
    name: "MedGuard AI",
    tag: "Pharma Verification & Provenance",
    summary:
      "Offline-first pharmaceutical authentication system designed to detect counterfeit drugs, verify batches via QR scans, track supply chains, and audit provenance.",
    liveHref: "https://med-guard-ai-frontend.vercel.app",
    githubHref: "https://github.com/Sarthaktanpure/MedGuardAI",
    stack: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "ONNX", "Tailwind CSS"],
    accent: "emerald",
  },
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
  headline: "136+ problems solved on LeetCode with real-time sync",
  detail:
    "Active competitive problem solver in Java 21 under contest constraints, with verified coverage across trees, heaps, graphs, two pointers, and dynamic programming.",
  href: site.leetcodeHref,
  username: "Sarthak_Tanpure_01",
  totalSolved: 136,
  breakdown: [
    { label: "Easy", count: 94, percentage: 69, color: "#10b981", lightColor: "#059669" },
    { label: "Medium", count: 35, percentage: 26, color: "#f59e0b", lightColor: "#d97706" },
    { label: "Hard", count: 7, percentage: 5, color: "#ef4444", lightColor: "#dc2626" },
  ],
  metrics: [
    { label: "Global Ranking", value: "#1,272,549", note: "Top active percentile" },
    { label: "Acceptance Rate", value: "46.9%", note: "Consistent first-pass accuracy" },
    { label: "Primary Lang", value: "Java 21", note: "Fast I/O & Collections" },
    { label: "Earned Badge", value: "50 Days 2026", note: "Daily problem-solving practice" },
  ],
  patterns: [
    { name: "Arrays & Hashing", count: "55+" },
    { name: "Trees & BST", count: "38+" },
    { name: "Graphs (BFS/DFS)", count: "32+" },
    { name: "Two Pointers", count: "28+" },
    { name: "Dynamic Programming", count: "24+" },
    { name: "Binary Search", count: "22+" },
  ],
  highlights: [
    {
      title: "Course Schedule II",
      difficulty: "Medium",
      pattern: "Topological Sort & Cycle Detection",
    },
    {
      title: "Validate Binary Search Tree",
      difficulty: "Medium",
      pattern: "Tree In-Order Traversal Invariant",
    },
    {
      title: "Trapping Rain Water",
      difficulty: "Hard",
      pattern: "Two Pointers / Monotonic Stack",
    },
    {
      title: "Longest Substring Without Repeating",
      difficulty: "Medium",
      pattern: "Sliding Window & Hash Set",
    },
  ],
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
