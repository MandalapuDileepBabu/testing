import "./Nav.css";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import logo from "../assets/aplora-logo.jpg";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleNavClick = (id) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Features", id: "features" },
    { name: "How it works", id: "how-it-works" },
    { name: "Templates", id: "templates" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className={`nav-wrapper ${isScrolled ? "scrolled" : ""}`}>
      <div className="section-container">
        <nav className="navbar">
          <div className="logo" onClick={handleLogoClick}>
            <img src={logo} alt="Aplora Logo" className="logo-img" />
            <span>Aplora</span>
          </div>

          <div
            className={`hamburger ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <li key={item.name}>
                <span
                  className="nav-link-item"
                  onClick={() => handleNavClick(item.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>

          <div className="nav-auth-area">
            {user ? (
              <div className="user-profile-nav">
                <span className="user-name">Hey, {user.displayName || user.email.split('@')[0]}</span>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
              </div>
            ) : (
              <Link to="/login" className="nav-btn-link">
                <button className="main-nav-btn">Start Building</button>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

