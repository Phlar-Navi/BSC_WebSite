import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getActivityDetail } from "./api";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./ActivityDetail.css";

const ActivityDetail = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivity = async () => {
      setLoading(true);
      const data = await getActivityDetail(id);
      setActivity(data);
      setLoading(false);
    };
    fetchActivity();
  }, [id]);

  const getStatusBadge = (status, statusDisplay) => {
    const classes = {
      ongoing: "badge-ongoing",
      upcoming: "badge-upcoming",
      completed: "badge-completed",
    };
    return <span className={`detail-badge ${classes[status] || ""}`}>{statusDisplay}</span>;
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="activity-detail-loading">
          <div className="spinner"></div>
          <p>Chargement...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!activity) {
    return (
      <>
        <Navbar />
        <div className="activity-detail-error">
          <h2>Activité introuvable</h2>
          <p>Cette activité n'existe pas ou a été supprimée.</p>
          <Link to="/activities" className="back-link">← Retour aux activités</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="activity-detail">
        <div className="activity-detail-container">
          <Link to="/activities" className="back-link">← Retour aux activités</Link>

          <header className="activity-detail-header">
            <div className="activity-detail-badges">
              <span className="activity-detail-category">{activity.category_display}</span>
              {getStatusBadge(activity.status, activity.status_display)}
            </div>
            <h1 className="activity-detail-title">{activity.title}</h1>
            <div className="activity-detail-meta">
              <span>Par <strong>{activity.author}</strong></span>
              {activity.date_display && <span>• {activity.date_display}</span>}
            </div>
          </header>

          {activity.image && (
            <div className="activity-detail-image">
              <img src={activity.image} alt={activity.title} />
            </div>
          )}

          <div className="activity-detail-content">
            <p>{activity.description}</p>
          </div>

          <div className="activity-detail-actions">
            <Link to="/activities" className="btn-back">
              ← Voir toutes les activités
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ActivityDetail;
