const publications = [
  {
    title: "A Secure Framework for Geofenced Data Encryption via Cryptographic Hashing and Multi-Channel Steganography",
    authors: "Momin, A., et al.",
    venue: "IEEE International Conference on Smart Computing and Networks (ICSN 2025)",
    date: "December 2025",
    category: "Security & Cryptography"
  },
  {
    title: "A Survey on Cache Consistency Models in Modern Microprocessors",
    authors: "Momin, A., et al.",
    venue: "International Journal of Industrial and Information Engineering (IIIE_Journal)",
    date: "May 2025",
    category: "Systems & Architecture"
  },
  {
    title: "Attendance Management Device with Face Recognition",
    authors: "Momin, A., et al.",
    venue: "IEEE International Conference on Recent Computing and Engineering Technologies (ICRECT)",
    date: "April 2025",
    category: "Computer Vision & Embedded Systems"
  }
];

const awards = [
  {
    rank: "Rank 1",
    name: "RTO Hackathon 2025",
    description: "Winner of the prestigious RTO Hackathon"
  },
  {
    rank: "Rank 4",
    name: "Hack The Breach CTF 2025",
    description: "Top 4 finalist in cybersecurity competition"
  },
  {
    rank: "Top 20",
    name: "Bajaj HackRx 6.0",
    description: "National Level Hackathon Finalist"
  }
];

export default function Publications() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-header">
          <h1>Publications & Awards</h1>
          <p className="page-subtitle">Research contributions and achievements</p>
        </div>

        <div className="publications-section">
          <h2>Publications</h2>
          <div className="publications-list">
            {publications.map((pub, idx) => (
              <div key={idx} className="publication-card">
                <span className="pub-category">{pub.category}</span>
                <h3>{pub.title}</h3>
                <p className="pub-authors">{pub.authors}</p>
                <p className="pub-venue">{pub.venue}</p>
                <p className="pub-date">{pub.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="awards-section">
          <h2>Awards & Achievements</h2>
          <div className="awards-grid">
            {awards.map((award, idx) => (
              <div key={idx} className="award-card">
                <div className="award-rank">{award.rank}</div>
                <h3>{award.name}</h3>
                <p>{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
