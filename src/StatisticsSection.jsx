import "./StatisticsSection.css";

const StatisticsSection = () => {
  const stats = [
    {
      id: 1,
      number: "100k+",
      label: "People Reached",
      description: "Through social media, radio and TV campaigns"
    },
    {
      id: 2,
      number: "15k+",
      label: "Students Impacted",
      description: "In 20 schools across Cameroon"
    },
    {
      id: 3,
      number: "300",
      label: "Youths Screened",
      description: "Under 35 received genotype status"
    },
    {
      id: 4,
      number: "6",
      label: "Regions",
      description: "Active presence across the country"
    },
    {
      id: 5,
      number: "50",
      label: "Volunteers",
      description: "Committed to the BSC mission"
    },
    /* {
      id: 6,
      number: "240",
      label: "Symposium Participants",
      description: "At the University of Douala"
    } */
  ];

  return (
    <section className="statistics-section" id="impact">
      <div className="statistics-container">
        {/* HEADER */}
        <div className="statistics-header">
          <h2 className="statistics-title">
            Highlight the growth of our impact by the numbers
          </h2>
          <p className="statistics-description">
            Through our "One Voice, One Hope: Youths Leading the Sickle Cell Fight" campaign, 
            we're making a tangible difference in communities across Cameroon. Our efforts have 
            revealed that only 12% of symposium participants knew their genotype beforehand, 
            highlighting the critical need for continued awareness and education.
          </p>
        </div>

        {/* STATS GRID */}
        <div className="statistics-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;