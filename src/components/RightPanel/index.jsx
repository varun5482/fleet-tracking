import React from 'react'
import Table from '../Table';
import styles from './index.module.scss'
import { useSelector } from 'react-redux';

const RightPanel = () => {
  const { vehicles, liveUpdates } = useSelector((state) => state.dashboard);

  const currentValues = vehicles;

  return (
    <div className={styles.rightPanelContainer}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>Vehicles ({currentValues.count})</div>
        <div className={`${styles.btn} ${liveUpdates ? styles.active : styles.inactive}`}>{liveUpdates ? 'Live' : 'Not live'}</div>
      </div>
      <Table />
    </div>
  )
}

export default RightPanel;
