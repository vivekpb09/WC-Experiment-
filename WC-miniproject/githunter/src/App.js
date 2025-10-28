// App.js
import React, { useState, useEffect, useCallback } from 'react';
import {
  Sun, Moon, GitHub, Search, AlertCircle, Users, UserPlus,
  Briefcase, MapPin, Link, Database, ExternalLink
} from 'react-feather';
import './App.css';

// --- Component: Header ---
const Header = ({ isDarkMode, toggleDarkMode }) => {
  const buttonIcon = isDarkMode ? <Sun size={20} /> : <Moon size={20} />;
  const headerTextColor = isDarkMode ? 'text-white' : 'text-gray-800';

  return (
    <header className="header-container mb-12 relative">
      {/* Dark Mode Toggle */}
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {buttonIcon}
      </button>

      <h1
        className={`header-title-text text-4xl md:text-5xl font-bold ${headerTextColor} mb-4 flex justify-center items-center`}
      >
        <GitHub className="mr-3 text-primary" />
        Git<span className="text-primary">Hunter</span>
      </h1>

      <p className="text-lg text-gray-500 max-w-lg mx-auto">
        Find any GitHub user profile instantly
      </p>
    </header>
  );
};

// --- Component: SearchInput ---
const SearchInput = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!username.trim()) {
      setError('Please enter a GitHub username.');
      return;
    }
    setError('');
    onSearch(username.trim());
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-section">
      <input
        type="text"
        id="username"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button
        id="search-btn"
        className="search-btn transition duration-300 flex items-center"
        onClick={handleSearch}
      >
        <span>Search</span>
        <Search className="ml-2" size={16} />
      </button>

      {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
    </div>
  );
};

// --- Component: StateDisplay ---
const StateDisplay = ({ state, message }) => {
  let iconContent, title, text;
  let className = 'state-card github-card inline-block';
  const titleColor = state === 'error' ? 'text-red-500' : 'text-gray-700';
  const textColor = 'text-gray-500';

  switch (state) {
    case 'loading':
      iconContent = (
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
      );
      title = 'Searching GitHub...';
      text = 'Fetching user data, please wait';
      className += ' pulse';
      break;

    case 'error':
      iconContent = <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />;
      title = 'Error Occurred';
      text = message || 'Something went wrong. Please try again later.';
      break;

    case 'default':
    default:
      iconContent = <GitHub className="w-16 h-16 text-gray-400 mx-auto mb-4" />;
      title = 'Search for a GitHub user';
      text = 'Enter a username above to get started';
      break;
  }

  return (
    <div className="text-center py-12">
      <div className={className}>
        {iconContent}
        <h3 className={`text-xl font-semibold mb-2 ${titleColor}`}>{title}</h3>
        <p className={textColor}>{text}</p>
      </div>
    </div>
  );
};

// --- Helper: DetailBox ---
const DetailBox = ({ icon: Icon, title, value, children }) => (
  <div className="repo-card p-4 rounded-lg">
    <h4 className="font-semibold mb-2 flex items-center text-gray-600">
      <Icon className="w-4 h-4 mr-2" />
      {title}
    </h4>
    {children || <p className="text-gray-800">{value}</p>}
  </div>
);

// --- Component: ProfileCard ---
const ProfileCard = ({ user }) => {
  const defaultAvatar = 'https://avatars.githubusercontent.com/u/9919?s=200&v=4';
  const repoProgressWidth = `${Math.min(100, (user.public_repos / 1000) * 100)}%`;
  const formattedDate = new Date(user.updated_at).toLocaleDateString();

  const formatUrl = (url) => {
    if (!url) return { display: 'Not specified', href: '#' };
    const fullUrl = url.startsWith('http') ? url : `https://${url}`;
    return { display: fullUrl.replace(/https?:\/\//, ''), href: fullUrl };
  };
  const blogLink = formatUrl(user.blog);

  return (
    <div className="github-card">
      {/* Profile Header */}
      <div className="profile-header-bg p-6 flex flex-col md:flex-row items-center">
        <img
          id="avatar"
          src={user.avatar_url || defaultAvatar}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-white mb-4 md:mb-0 md:mr-6"
        />
        <div className="text-center md:text-left">
          <h2 id="name" className="text-2xl font-bold text-white">
            {user.name || 'No name provided'}
          </h2>
          <p id="username-display" className="text-gray-300 mb-2">
            @{user.login}
          </p>
          <div className="flex justify-center md:justify-start space-x-4 text-gray-300">
            <span className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span id="followers">{user.followers}</span> followers
            </span>
            <span className="flex items-center">
              <UserPlus className="w-4 h-4 mr-1" />
              <span id="following">{user.following}</span> following
            </span>
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="p-6">
        <p id="bio" className="text-gray-700 mb-6">
          {user.bio || 'No bio provided'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <DetailBox icon={Briefcase} title="Company" value={user.company || 'Not specified'} />
          <DetailBox icon={MapPin} title="Location" value={user.location || 'Not specified'} />
          <DetailBox icon={Link} title="Website">
            <a
              href={blogLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {blogLink.display}
            </a>
          </DetailBox>
        </div>

        {/* Repository Count */}
        <div className="repo-card p-4 rounded-lg">
          <h4 className="font-semibold text-gray-600 mb-2 flex items-center">
            <Database className="w-4 h-4 mr-2" />
            Repositories
          </h4>
          <div className="flex items-center">
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                id="repo-progress"
                className="bg-primary h-4 rounded-full"
                style={{ width: repoProgressWidth }}
              ></div>
            </div>
            <span id="public-repos" className="ml-2 text-gray-700 font-medium">
              {user.public_repos}
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="profile-footer px-6 py-4 flex justify-between items-center">
        <a
          id="profile-link"
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-primary hover:underline"
        >
          <span>View Profile</span>
          <ExternalLink className="ml-2" size={16} />
        </a>
        <p className="text-gray-500 text-sm">
          Last updated: <span id="updated-at">{formattedDate}</span>
        </p>
      </div>
    </div>
  );
};

// --- Main App Component ---
const GitHunterApp = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Load saved preference from localStorage
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  const [user, setUser] = useState(null);
  const [state, setState] = useState('default');
  const [errorMessage, setErrorMessage] = useState('');

  // --- Toggle Dark Mode ---
  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => {
      const newValue = !prev;
      localStorage.setItem('darkMode', JSON.stringify(newValue));
      return newValue;
    });
  }, []);

  // --- Fetch GitHub User ---
  const fetchUser = async (username) => {
    setState('loading');
    setUser(null);
    setErrorMessage('');

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (response.status === 404) throw new Error('User not found.');
      if (response.status === 403)
        throw new Error('API rate limit exceeded. Please try again later.');
      if (!response.ok)
        throw new Error('Something went wrong while fetching user data.');

      const data = await response.json();
      setUser(data);
      setState('success');
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message || 'Network error. Please try again.');
      setState('error');
    }
  };

  // --- Apply Dark Mode Class ---
  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div
      className={`app-container min-h-screen ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'
      }`}
    >
      <div className="container mx-auto px-4 py-12">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <SearchInput onSearch={fetchUser} />

        {/* State Management */}
        {state === 'default' && <StateDisplay state="default" />}
        {state === 'loading' && <StateDisplay state="loading" />}
        {state === 'error' && <StateDisplay state="error" message={errorMessage} />}
        {state === 'success' && user && <ProfileCard user={user} />}
      </div>
    </div>
  );
};

export default GitHunterApp;
