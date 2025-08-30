import React from 'react'
import { FiActivity } from "react-icons/fi";
import styles from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../redux/Dashboard/Slices/dashboard';

const Filters = () => {
  const {
    stats,
    filters: activeFilter,
  } = useSelector((state) => state.dashboard);

  const { data, loading } = stats;

  const dispatch = useDispatch();

  const filters = [
    {
      key: '',
      label: 'All',
      indicatorColor: styles.grey, 
    },
    {
      key: 'idle',
      label: 'Idle',
      indicatorColor: styles.lightGrey,
    },
    {
      key: 'en_route',
      label: 'En Route',
      indicatorColor: styles.blue,
    },
    {
      key: 'delivered',
      label: 'Delivered',
      indicatorColor: styles.green,
    },
  ];

  const handleFilterClick = (key) => {
    dispatch(setFilters(key));
  }


  return (
    <div className={styles.filterContainer}>
      <div className={styles.title}>
        <FiActivity />
        Filter by Status
      </div>
      <div className={styles.content}>
        {
          filters?.map((filter) => {
            return <div
              className={`${styles.filterTab} ${activeFilter === filter?.key ? styles.activeFilter : ''}`}
              onClick={() => handleFilterClick(filter.key)}
            >
              <div className={`${styles.dot} ${filter.indicatorColor}`}></div>
              <div>{filter?.label || ''}</div>
              <div className={styles.count}>
                ( {data?.[filter.key || 'total'] || 0} )
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Filters;
