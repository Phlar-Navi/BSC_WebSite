import { useState, useEffect } from "react";
import "./TeamSection.css";
import { getTeam } from "./api";

// Fallback static images
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

const STATIC_TEAM = [
  { id: 1, name: "Dr Mbonjo Bitsie Dora", position: "Founder and President", bio: "Leading BSC's mission to build a sickle cell free community with passion, dedication, and a vision for transformative change in Cameroon and beyond.", image: bitsie },
  { id: 2, name: "Dr Wolle Mba Berna Marquise", position: "Vice President", bio: "Supporting the strategic direction of BSC and championing awareness initiatives to educate communities about sickle cell disease.", image: berna },
  { id: 3, name: "Ms Mafor Yvonne Azie", position: "General Secretary", bio: "Ensuring organizational efficiency and coordinating BSC's operations to deliver impactful programs and support to warriors.", image: yvonne },
  { id: 4, name: "Ms Akwa Constance Nji", position: "Project Manager & Regional Coordinator - Center", bio: "Overseeing the execution of BSC's diverse programs from screening campaigns to community events and online activities.", image: akwa },
  { id: 5, name: "Sona Sonia Sheilla", position: "Accountant Officer", bio: "Managing BSC's financial resources with transparency and ensuring sustainable funding for all our initiatives.", image: sona },
  { id: 6, name: "Chomwa Tamwo Chamberlin", position: "Communication Officer", bio: "Crafting compelling narratives and managing BSC's communication strategies to amplify our message and reach.", image: chamberlin },
  { id: 7, name: "Assongmo Manuella", position: "Communication Officer", bio: "Driving engagement across digital platforms and ensuring our community stays informed and connected.", image: manuella },
  { id: 8, name: "Nguimbous Antoinette Priscille", position: "Head Media Department", bio: "Leading BSC's media initiatives and creating impactful visual content to raise awareness about sickle cell disease.", image: antoinette },
  { id: 9, name: "Dr Issangui Gaudy", position: "Head of Medical and Research", bio: "Spearheading medical support programs and research initiatives to advance sickle cell care and treatment.", image: issangui },
  { id: 10, name: "Ms Djuidje Kelly Capwel", position: "Head of Juristic Department", bio: "Providing legal guidance and ensuring BSC operates with full compliance and protects the rights of sickle cell warriors.", image: kelly },
  { id: 11, name: "Issa Ibrahim", position: "Regional Coordinator - Far North", bio: "Coordinating BSC's efforts in the Far North region, building local partnerships, and ensuring our programs reach those in need.", image: issa },
  { id: 12, name: "Tanekeu Tateng Harold Rayan", position: "Regional Coordinator - West", bio: "Coordinating BSC's efforts in the West region, building local partnerships, and ensuring our programs reach those in need.", image: tanekeu },
  { id: 13, name: "Tiku Kevin Tebeck", position: "Regional Coordinator - North", bio: "Coordinating BSC's efforts in the North region, building local partnerships, and ensuring our programs reach those in need.", image: tiku },
  { id: 14, name: "Egoh Kellser Abla", position: "Regional Coordinator - North West", bio: "Coordinating BSC's efforts in the North West region, building local partnerships, and ensuring our programs reach those in need.", image: egoh },
];

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState(STATIC_TEAM);

  useEffect(() => {
    const fetchTeam = async () => {
      const data = await getTeam();
      if (data && data.length > 0) {
        setTeamMembers(data);
      }
    };
    fetchTeam();
  }, []);

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
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>

              <div className="team-content">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-position">{member.position}</p>
                <p className="member-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
