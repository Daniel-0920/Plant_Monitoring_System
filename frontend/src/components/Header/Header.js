import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
          Plant Monitoring Dashboard
      </div>
    </div>
  );
};

export default Header;
