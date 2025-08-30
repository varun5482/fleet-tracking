import React from 'react';
import { FiTruck } from "react-icons/fi";
import styles from './index.module.scss';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.title}>
        <div className={styles.icon}><FiTruck /></div>
        Fleet Tracking Dashboard
      </div>
      <div className={styles.subTitle}>Real-time vehicle monitoring <span className={styles.dot}></span> Loginext Case Study</div>
    </div>
  )
}

export default Header;
