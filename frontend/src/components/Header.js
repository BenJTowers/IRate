import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <h1>IRate</h1> {/* Replace with an actual logo if available */}
      </div>
      <nav>
        <Link to="/" style={styles.navLink}>Search</Link>
        <Link to="/my-list" style={styles.navLink}>My List</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    fontSize: '1.5em',
  },
  navLink: {
    margin: '0 10px',
    color: '#fff',
    textDecoration: 'none',
  }
};

export default Header;