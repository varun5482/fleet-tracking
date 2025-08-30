import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { FiClock } from "react-icons/fi";
import { useSelector } from 'react-redux';
import statisticsCards from './StatisticsCardStructure';
import styles from './index.module.scss';
import GetRelativeTime from './GetRelativeTime';


const Statistics = () => {
  const {
    stats,
    lastUpdated,
  } = useSelector((state) => state.dashboard);

  const { data, loading } = stats;

  const [lastUpdatedTime, setLastUpdatedTime] = useState(GetRelativeTime(lastUpdated));

  const getFormatedData = (data, key) => {
    if (key === 'timeStamp') {
      return moment(data).format('HH:mm');
    }
    return data;
  }

  useEffect(() => {
   const _updated = lastUpdated || moment().valueOf();
   setLastUpdatedTime(GetRelativeTime(_updated));
   const intervalId = setInterval(() => {
      const value = GetRelativeTime(_updated);
      setLastUpdatedTime(value);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    }
  }, [lastUpdated])


  return (
    <div className={styles.statisticsContainer}>
      <div className={styles.title}>
        <FiClock />
        <div>Fleet Statistics</div>
      </div>
      <div className={styles.cardsContainer}>
        {statisticsCards.map((statCard) => {
          return (<div className={styles.statCard}>
            <div className={styles.statCardTitle}>{getFormatedData(data[statCard.key] || 0, statCard?.key)}</div>
            <div className={styles.statCardSubTitle}>
              {statCard?.icon && statCard.icon}
              <div>{statCard.text}</div>
            </div>
          </div>)
        })}
      </div>
      <div className={styles.info}>
        <FiClock />
        <div>Updated {lastUpdatedTime}</div>
        <div className={styles.dot} />
        <div>Next update in ~ 3 minutes</div>
      </div>
    </div>
  )
}

export default Statistics;
