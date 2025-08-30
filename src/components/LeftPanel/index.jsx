import React, { useEffect } from 'react';
import { FiWifi, FiWifiOff } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { toggleLiveUpdates } from '../../redux/Dashboard/Slices/dashboard';
import { getStatisticsAction } from '../../redux/Dashboard/Actions/dashboard';
import Filters from '../Filters';
import Statistics from '../Statistics';
import styles from './index.module.scss';

const LeftPanel = () => {
  const {
    liveUpdates
  } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  const handleLiveToggle = () => {
    dispatch(toggleLiveUpdates(!liveUpdates));
  }

  useEffect(() => {
    dispatch(getStatisticsAction());
  }, [])

  return (
    <div className={styles.leftPanelContainer}>
      <div className={styles.liveUpdateButtonContainer}>
        {liveUpdates ? <div className={`${styles.btn} ${styles.active}`} onClick={handleLiveToggle}>
          <FiWifi />
          Live Updates Active
        </div> : <div className={`${styles.btn} ${styles.inactive}`} onClick={handleLiveToggle}>
            <FiWifiOff />
            Live Updates Off
          </div>}
      </div>
      <Filters />
      <div className={styles.divider} />
      <Statistics />
    </div>
  )
}

export default LeftPanel
