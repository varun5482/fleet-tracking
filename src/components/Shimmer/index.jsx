import React from 'react';
import styles from './index.module.scss';

const Shimmer = (props) => {
  const { width, height } = props;
  return (
    <div className={styles.shimmerWrapper} style={{ width: width, height: height }}>
      <div className={styles.shimmer}></div>
    </div>
  )
}

export default Shimmer;
