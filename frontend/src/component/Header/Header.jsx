import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.title}>
          <a href="/" className={styles.logo}>
            Plant monitoring System
          </a>
        </div> 
      </div>    
    </header>
  );
};

export default Header;
