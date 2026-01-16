import "./DiseaseSection.css";
import imgDefinition from "./assets/scd-definition.png";
import imgTypes from "./assets/scd-types.png";
import imgTransmission from "./assets/scd-transmission.png";

const DiseaseTimelineSection = () => {
  const timelineItems = [
    {
      id: 1,
      position: "right",
      title: "What is Sickle Cell Disease?",
      tag: "Definition",
      description: "Sickle Cell Disease (SCD) is an inherited genetic blood disorder that is neither contagious nor transmissible. It cannot be spread through blood transfusions or physical contact. The disease occurs when an individual inherits two abnormal hemoglobin genes—one from each biological parent. In Cameroon, this condition is often overlooked and misunderstood by the community; some people believe it is a taboo or caused by witchcraft. Many think that individuals with this condition cannot live long, with a common myth stating that those affected by SCD die before the age of 21. However, in recent times, this is no longer the case, as life expectancy has improved to over 45 years.",
      buttons: [
        { text: "Learn more", type: "primary" },
        { text: "Get support", type: "secondary" }
      ],
      image: imgDefinition
    },
    {
      id: 2,
      position: "left",
      title: "Types of Sickle Cell Disease",
      tag: "Types",
      description: "There are several distinct types of SCD, each resulting from genetic mutations that disrupt the production of hemoglobin and lead to the formation of abnormal hemoglobin. The type and severity of the disease are determined by the specific gene variants inherited.",
      list: [
        "Sickle Cell Anemia (HbSS)",
        "Hemoglobin SC Disease (HbSC)",
        "Sickle Beta-Zero Thalassemia (Sβ0)",
        "Sickle Beta-Plus Thalassemia (Sβ+)",
        "Hemoglobin SD Disease (HbSD)",
        "Hemoglobin SE Disease (HbSE)",
        "Hemoglobin SO Disease (HbSO)"
      ],
      buttons: [
        { text: "View details", type: "primary" },
        { text: "Compare types", type: "secondary" }
      ],
      image: imgTypes
    },
    {
      id: 3,
      position: "right",
      title: "How Does It Occur?",
      tag: "Transmission",
      description: "Sickle Cell Anemia occurs when an individual inherits two abnormal genes (one from each parent) that produce hemoglobin 'S.' This abnormal hemoglobin causes red blood cells to become rigid and take on a sickle shape. Sickle Cell Anemia is the most severe form of SCD and significantly impacts the lives of those affected.",
      buttons: [
        { text: "Genetic testing", type: "primary" },
        { text: "Prevention", type: "secondary" }
      ],
      image: imgTransmission
    }
  ];

  return (
    <section className="disease-timeline-section" id="learn">
      <div className="timeline-container">
        {/* HEADER */}
        <div className="timeline-header">
          <p className="timeline-tagline">Educational Resources</p>
          <h2 className="timeline-main-title">Understanding Sickle Cell Disease</h2>
          <p className="timeline-subtitle">
            Knowledge is power. Learn about SCD, its different types, and how it is inherited 
            to better understand and support those affected by this condition.
          </p>
          {/* <div className="timeline-header-buttons">
            <a href="#resources" className="btn-primary">Download Guide</a>
            <a href="#contact" className="btn-secondary">Ask a Question</a>
          </div> */}
        </div>

        {/* TIMELINE */}
        <div className="timeline">
          <div className="timeline-line"></div>

          {timelineItems.map((item) => (
            <div 
              key={item.id} 
              className={`timeline-item ${item.position}`}
            >
              <div className="timeline-dot"></div>
              
              {/* IMAGE */}
              <div className="timeline-media">
                <img src={item.image} alt={item.title} />
              </div>

              {/* CONTENT */}
              <div className="timeline-content">
                <div className="timeline-card">
                  <span className="timeline-tag">{item.tag}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                  
                  {item.list && (
                    <ul className="timeline-list">
                      {item.list.map((listItem, index) => (
                        <li key={index}>{listItem}</li>
                      ))}
                    </ul>
                  )}
                  
                  {/* <div className="timeline-buttons">
                    {item.buttons.map((button, index) => (
                      <button 
                        key={index} 
                        className={`btn-timeline ${button.type}`}
                      >
                        {button.text}
                        <span className="arrow">›</span>
                      </button>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiseaseTimelineSection;