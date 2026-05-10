import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// --- Activities / Programs ---
export const getActivities = async (params = {}) => {
  try {
    const response = await api.get('/activities/', { params });
    return response.data.results || response.data;
  } catch (error) {
    console.error('Error fetching activities:', error);
    return null;
  }
};

export const getActivityDetail = async (id) => {
  try {
    const response = await api.get(`/activities/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching activity detail:', error);
    return null;
  }
};

// --- News ---
export const getNews = async (params = {}) => {
  try {
    const response = await api.get('/news/', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    return null;
  }
};

export const getNewsDetail = async (slug) => {
  try {
    const response = await api.get(`/news/${slug}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching news detail:', error);
    return null;
  }
};

// --- Gallery ---
export const getGallery = async () => {
  try {
    const response = await api.get('/gallery/');
    return response.data;
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return null;
  }
};

// --- Team ---
export const getTeam = async () => {
  try {
    const response = await api.get('/team/');
    return response.data;
  } catch (error) {
    console.error('Error fetching team:', error);
    return null;
  }
};

// --- Statistics ---
export const getStatistics = async () => {
  try {
    const response = await api.get('/statistics/');
    return response.data;
  } catch (error) {
    console.error('Error fetching statistics:', error);
    return null;
  }
};

// --- Homepage aggregated data ---
export const getHomepageData = async () => {
  try {
    const response = await api.get('/homepage/');
    return response.data;
  } catch (error) {
    console.error('Error fetching homepage data:', error);
    return null;
  }
};

export default api;
