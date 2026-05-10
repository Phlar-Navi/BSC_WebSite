import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getNews } from "./api";
import "./LatestNews.css";

const LatestNews = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatest = async () => {
      const data = await getNews({ featured: true });
      if (data) {
        const items = data.results || data;
        setPosts(items.slice(0, 3));
      }
      setLoading(false);
    };
    fetchLatest();
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // Ne rien afficher si pas de posts ou erreur API
  if (loading || posts.length === 0) return null;

  return (
    <section className="latest-news-section" id="news">
      <div className="latest-news-container">
        <div className="latest-news-header">
          <p className="latest-news-tagline">Actualités</p>
          <h2 className="latest-news-title">Dernières Nouvelles</h2>
          <p className="latest-news-subtitle">
            Les dernières actualités et annonces de Break Sickle Cycle.
          </p>
        </div>

        <div className="latest-news-grid">
          {posts.map((post) => (
            <article key={post.id} className="latest-news-card">
              {post.image && (
                <div className="latest-news-image">
                  <img src={post.image} alt={post.title} />
                </div>
              )}
              <div className="latest-news-content">
                <span className="latest-news-category">{post.category_display}</span>
                <h3 className="latest-news-card-title">{post.title}</h3>
                <p className="latest-news-excerpt">{post.excerpt}</p>
                <div className="latest-news-footer">
                  <span className="latest-news-date">{formatDate(post.published_at)}</span>
                  <Link to={`/news/${post.slug}`} className="latest-news-link">
                    Lire →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="latest-news-cta">
          <Link to="/news" className="btn-all-news">
            Voir toutes les actualités
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
