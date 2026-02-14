import "./TeamSection.css";
import bitsie from "./assets/team/bitsie.jpeg";
import akwa from "./assets/team/akwa.jpeg";
import chamberlin from "./assets/team/chamberlin.jpeg";
import issangui from "./assets/team/issangui.jpeg";
import kelly from "./assets/team/kelly.jpeg";
import yvonne from "./assets/team/yvonne.jpeg";
import sona from "./assets/team/sona.jpeg";
import berna from "./assets/team/berna.jpeg";
import antoinette from "./assets/team/antoinette.jpg";
import manuella from "./assets/team/manuella.jpg";
import issa from "./assets/team/issa.jpg";
import tanekeu from "./assets/team/tanekeu.jpg";
import tiku from "./assets/team/tiku.jpg";
import egoh from "./assets/team/egoh.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr Mbonjo Bitsie Dora",
      position: "Founder and President",
      bio: "Leading BSC's mission to build a sickle cell free community with passion, dedication, and a vision for transformative change in Cameroon and beyond.",
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:dora@breaksicklecycle.org",
      image: bitsie
    },
    {
      id: 2,
      name: "Dr Wolle Mba Berna Marquise",
      position: "Vice President",
      bio: "Supporting the strategic direction of BSC and championing awareness initiatives to educate communities about sickle cell disease.",
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:berna@breaksicklecycle.org",
      image: berna
    },
    {
      id: 3,
      name: "Ms Mafor Yvonne Azie",
      position: "General Secretary",
      bio: "Ensuring organizational efficiency and coordinating BSC's operations to deliver impactful programs and support to warriors.",
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:yvonne@breaksicklecycle.org",
      image: yvonne
    },
    {
      id: 4,
      name: "Ms Akwa Constance Nji",
      position: "Project Manager & Regional Coordinator - Center",
      bio: "Overseeing the execution of BSC's diverse programs from screening campaigns to community events and online activities.",
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:constance@breaksicklecycle.org",
      image: akwa
    },
    {
      id: 5,
      name: "Sona Sonia Sheilla",
      position: "Accountant Officer",
      bio: "Managing BSC's financial resources with transparency and ensuring sustainable funding for all our initiatives.",
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:sonia@breaksicklecycle.org",
      image: sona
    },
    {
      id: 6,
      name: "Chomwa Tamwo Chamberlin",
      position: "Communication Officer",
      bio: "Crafting compelling narratives and managing BSC's communication strategies to amplify our message and reach.",
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:chamberlin@breaksicklecycle.org",
      image: chamberlin
    },
    {
      id: 7,
      name: "Assongmo Manuella",
      position: "Communication Officer",
      bio: "Driving engagement across digital platforms and ensuring our community stays informed and connected.",
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:manuella@breaksicklecycle.org",
      image: manuella
    },
    {
      id: 8,
      name: "Nguimbous Antoinette Priscille",
      position: "Head Media Department",
      bio: "Leading BSC's media initiatives and creating impactful visual content to raise awareness about sickle cell disease.",
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:priscille@breaksicklecycle.org",
      image: antoinette
    },
    {
      id: 9,
      name: "Dr Issangui Gaudy",
      position: "Head of Medical and Research",
      bio: "Spearheading medical support programs and research initiatives to advance sickle cell care and treatment.",
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:gaudy@breaksicklecycle.org",
      image: issangui
    },
    {
      id: 10,
      name: "Ms Djuidje Kelly Capwel",
      position: "Head of Juristic Department",
      bio: "Providing legal guidance and ensuring BSC operates with full compliance and protects the rights of sickle cell warriors.",
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:kelly@breaksicklecycle.org",
      image: kelly
    },
    {
      id: 11,
      name: "Issa Ibrahim",
      position: "Regional Coordinator - Far North",
      bio: "Coordinating BSC's efforts in the Far North region, building local partnerships, and ensuring our programs reach those in need.",
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:issa@breaksicklecycle.org",
      image: issa
    },
    {
      id: 12,
      name: "Tanekeu Tateng Harold Rayan",
      position: "Regional Coordinator - West",
      bio: "Coordinating BSC's efforts in the West region, building local partnerships, and ensuring our programs reach those in need.",
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:harold@breaksicklecycle.org",
      image: tanekeu
    },
    {
      id: 13,
      name: "Tiku Kevin Tebeck",
      position: "Regional Coordinator - North",
      bio: "Coordinating BSC's efforts in the North region, building local partnerships, and ensuring our programs reach those in need.",
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:kevin@breaksicklecycle.org",
      image: tiku
    },
    {
      id: 14,
      name: "Egoh Kellser Abla",
      position: "Regional Coordinator - North West",
      bio: "Coordinating BSC's efforts in the North West region, building local partnerships, and ensuring our programs reach those in need.",
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:kellser@breaksicklecycle.org",
      image: egoh
    }
  ];

  return (
    <section className="team-section" id="team">
      <div className="team-container">
        {/* HEADER */}
        <div className="team-header">
          <p className="team-tagline">Meet the Team</p>
          <h2 className="team-title">Discover Break Sickle Cycle's Dedicated Professionals</h2>
          <p className="team-subtitle">
            Dedicated professionals united in the fight against sickle cell disease. 
            Our diverse team brings together medical expertise, community outreach, 
            and passionate advocacy.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              {/* IMAGE PLACEHOLDER */}
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>
              {/* <div className="team-image-placeholder">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div> */}

              <div className="team-content">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-position">{member.position}</p>
                <p className="member-bio">{member.bio}</p>

                {/* <div className="member-socials">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href={member.email} aria-label="Email">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* HIRING SECTION */}
        {/* <div className="hiring-section">
          <h3 className="hiring-title">We're hiring!</h3>
          <p className="hiring-description">
            Join our mission to build a sickle cell free community. We're looking for 
            passionate individuals ready to make a difference.
          </p>
          <button className="btn-hiring">Open positions</button>
        </div> */}
      </div>
    </section>
  );
};

export default TeamSection;