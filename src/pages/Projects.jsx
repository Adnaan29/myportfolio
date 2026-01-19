const projects = [
  {
    title: "High-Performance, Multi-Format RAG Engine",
    desc: "Built a production-ready Retrieval-Augmented Generation system supporting 8 document and image formats with OCR, secure API access, and robust handling of large and potentially unsafe files. Implemented a hybrid retrieval pipeline using BM25 with semantic ranking and content-based caching for accurate, reusable context.",
    tech: ["Python", "FAISS", "BM25", "LangChain", "FastAPI", "OCR"],
    highlights: [
      "Supports 8+ document formats",
      "Hybrid retrieval with semantic ranking",
      "Secure API with access controls",
      "Production-ready error handling"
    ]
  },
  {
    title: "Secure GPS-Bound Key Management with Distributed Media-Based Storage",
    desc: "Designed a location-bound encryption system where decryption requires device presence, combining symmetric encryption, steganography, and GPS-based verification across 3 media types (image, audio, video) for cryptographic proof-of-location.",
    tech: ["C++", "Cryptography", "ESP32", "Steganography", "GPS"],
    highlights: [
      "Geographic access constraints",
      "Multi-media steganography",
      "Microcontroller integration",
      "Secure key storage"
    ]
  },
  {
    title: "Multiprogramming Operating System (MOS) Simulation",
    desc: "Implemented a two-phase OS simulation in C++, progressing from a single-job loader/executor to a paged, multiprogramming OS with virtual memory and interrupt handling. Designed SI, TI, and PI interrupt mechanisms, memory allocation, page faults, and time/line limits.",
    tech: ["C++", "Operating Systems", "Memory Management", "Virtual Memory"],
    highlights: [
      "Complete OS simulation",
      "Virtual memory with paging",
      "Interrupt handling",
      "Resource management"
    ]
  },
  {
    title: "Carbon Footprint Tracker Application",
    desc: "Developed an application to quantify and visualize CO₂ emissions from user activities. Features activity-level emission analysis and reduction strategies to help users understand and reduce their carbon impact.",
    tech: ["React", "Node.js", "Data Visualization", "MongoDB"],
    highlights: [
      "Real-time emission tracking",
      "Visual analytics",
      "Reduction recommendations",
      "User-friendly interface"
    ]
  }
];

export default function Projects() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-header">
          <h1>Featured Projects</h1>
          <p className="page-subtitle">Building solutions that solve real-world problems</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-header">
                <h2>{project.title}</h2>
              </div>
              <p className="project-description">{project.desc}</p>
              <div className="project-highlights">
                {project.highlights.map((highlight, hidx) => (
                  <div key={hidx} className="highlight-item">
                    <span className="highlight-dot"></span>
                    {highlight}
                  </div>
                ))}
              </div>
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
