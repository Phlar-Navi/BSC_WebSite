import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getNewsDetail } from "./api";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./NewsDetail.css";

const NewsDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const data = await getNewsDetail(slug);
      setPost(data);
      setLoading(false);
    };
    fetchPost();
  }, [slug]);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="news-detail-loading">
          <div className="spinner"></div>
          <p>Chargement...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="news-detail-error">
          <h2>Article introuvable</h2>
          <p>Cet article n'existe pas ou a été supprimé.</p>
          <Link to="/news" className="back-link">← Retour aux actualités</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <article className="news-detail">
        <div className="news-detail-container">
          <Link to="/news" className="back-link">← Retour aux actualités</Link>

          <header className="news-detail-header">
            <span className="news-detail-category">{post.category_display}</span>
            <h1 className="news-detail-title">{post.title}</h1>
            <div className="news-detail-meta">
              <span className="news-detail-author">Par {post.author}</span>
              <span className="news-detail-date">{formatDate(post.published_at)}</span>
            </div>
          </header>

          {post.image && (
            <div className="news-detail-image">
              <img src={post.image} alt={post.title} />
            </div>
          )}

          <div className="news-detail-content"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
          />
        </div>
      </article>
      <Footer />
    </>
  );
};

export default NewsDetail;
