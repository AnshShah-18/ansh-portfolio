// =====================
// Portfolio Data
// =====================
// src/data/portfolioData.js
// src/data/portfolioData.js

export const data = {
  name: "Ansh Shah",
  role: "M.S. Computer Science @ UIC (May 2026)",
  location: "Chicago, IL",
  email: "ansh18june@gmail.com",
  phone: "+1 312 478 1448",
  links: {
    linkedin: "https://www.linkedin.com/in/ansh-shah-15364a217/",
    github: "https://github.com/AnshShah-18",
  },
  summary:
    "Graduate CS student focused on applied machine learning, distributed systems, and cloud computing. Experienced with building distributed RAG pipelines on AWS EMR using Scala/Spark, and deploying ML models for real-world use cases.",

  // 🧠 Skills
  skills: [
    "Python", "Scala", "C++", "JavaScript", "React", "Node.js", "HTML/CSS",
    "PyTorch", "TensorFlow", "Scikit-learn", "NLP", "Pandas", "NumPy",
    "AWS (EC2, EMR, S3, Lambda)", "Hadoop MapReduce", "Apache Spark",
    "Docker", "Kubernetes", "Git / GitHub", "PostgreSQL", "MySQL",
    "Tableau", "Power BI", "Linux", "Lucene", "Ollama", "RAG Pipelines"
  ],

  // 💻 Projects
projects: [
  {
    title: "Distributed RAG Pipeline on AWS EMR",
    highlights: [
      "Implemented semantic retrieval using Lucene + Ollama embeddings",
      "Processed hundreds of MSR research papers via Hadoop MapReduce in Scala",
      "Built scalable RAG architecture on AWS EMR and S3 for distributed indexing"
    ],
    tags: ["Scala", "Spark", "AWS", "Lucene", "Ollama"],
    link: "https://github.com/AnshShah-18/RAG-Pipeline",
    color: "blue", // 🟦 accent color
  },
  {
    title: "Summify — AI Text Summarization Tool",
    highlights: [
      "Developed NLP pipeline for summarization using transformer models",
      "Used readability indices and keyword extraction for analysis",
    ],
    tags: ["Python", "NLP", "Deep Learning"],
    link: "https://github.com/AnshShah-18/Summify",
    color: "purple", // 🟪 accent color
  },
  {
    title: "AdmitAssist — USA Masters Admission Prediction",
    highlights: [
      "Built predictive model with 77.8% accuracy",
      "Scraped 15,000+ profiles using BeautifulSoup and requests",
      "Created responsive React web app for predictions",
    ],
    tags: ["Python", "React", "ML"],
    link: "https://github.com/AnshShah-18/AdmitAssist",
    color: "green", // 🟩 accent color
  },
],


  // 💼 Experience
  experience: [
  {
    role: "Graduate Research Assistant",
    org: "Discovery Partners Institute (Bluegill Project)",
    period: "May 2024 – Present",
    bullets: [
      "Working on autonomic AI infrastructure using Bluegill cloud platform",
      "Optimizing large-scale ML pipelines on Azure and AWS"
    ],
    color: "blue"   // 🟦 glow color
  },
  {
    role: "AI/ML Intern",
    org: "We Rebel",
    period: "Jan 2024 – Apr 2024",
    bullets: [
      "Developed end-to-end ML APIs for music and finance integrations",
      "Collaborated with frontend team using React & Django"
    ],
    color: "purple" // 🟪 glow color
  },
  {
    role: "Software Developer Intern",
    org: "Obmondo (AI Startup, Copenhagen)",
    period: "Jun 2023 – Dec 2023",
    bullets: [
      "Deployed micro-services on Kubernetes with CI/CD pipelines",
      "Managed Gitea repos and SSH/PGP automation"
    ],
    color: "green"  // 🟩 glow color
  },
],


  // 🎓 Education
  education: [
  {
    degree: "M.S. in Computer Science",
    school: "University of Illinois Chicago (UIC)",
    period: "2024 – 2026",
    details:
      "Specializing in Machine Learning, Cloud Computing, and Distributed Systems.",
    color: "blue", // 🟦 glow color
  },
  {
    degree: "B.E. in Information Technology",
    school: "K. J. Somaiya College of Engineering (Mumbai University)",
    period: "2019 – 2023",
    details:
      "Graduated with First Class Distinction; projects included NLP, data analysis, and cloud integration.",
    color: "purple", // 🟩 glow color
  },
],


  // 📜 Certifications
  certs: [
    "Oracle Cloud Infrastructure 2024 Generative AI — Aug 2024",
    "Advanced Computer Vision with TensorFlow — Oct 2023",
    "Introduction to TensorFlow for AI/ML/DL — Oct 2023",
    "IBM EDA for Machine Learning — Mar 2023",
    "TryCatch: Python Developer — Aug 2022",
  ],
};
