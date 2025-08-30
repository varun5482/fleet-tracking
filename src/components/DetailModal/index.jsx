import React, { useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { FiTruck, FiUser, FiX, FiCheckSquare } from 'react-icons/fi';
import { getVehicleDetailAction } from '../../redux/Vehicle/Actions/vehicle';
import { STATUS_LABEL_MAPPING } from '../../utils/Constants';
import DETAIL_STRUCTURE from './DetailFormStructure';
import Shimmer from '../Shimmer';
import styles from './index.module.scss';

const DetailModal = (props) => {
  const { onClose } = props;
  const dispatch = useDispatch();
  const {
    data, loading, id
  } = useSelector((state) => state.vehicle);


  useEffect(() => {
    if (id) {
      dispatch(getVehicleDetailAction({id}));
    }
  }, [id])

  const getFormatedData = (key) => {
    switch (key) {
        case 'status': 
            return <div className={`${styles?.[data?.[key]]} ${styles.status}`}>
                <FiCheckSquare />
                {STATUS_LABEL_MAPPING?.[data?.[key]]}
            </div>
        case 'speed':
            return <div>
                {data?.[key] || 0} mph
            </div>
        case 'currentLocation':
            return <div className={styles.location}>
                <div>{data?.[key]?.lat} ,</div>
                <div>{data?.[key]?.lng}</div>
            </div>
        case 'batteryLevel':
            return <div className={styles.percentageContainer}>
                <div>{data?.[key]}%</div>
                <div className={styles.percentHolder}>
                    <div style={{width: `${data?.[key]}%`}} className={`${styles.bar} ${styles.battery}`}></div>
                </div>
            </div>
        case 'fuelLevel':
            return <div className={styles.percentageContainer}>
                <div>{data?.[key]}%</div>
                <div className={styles.percentHolder}>
                    <div style={{width: `${data?.[key]}%`}} className={`${styles.bar} ${styles.fuel}`}></div>
                </div>
            </div>
        case 'lastUpdated':
            const DateString = moment(data?.[key]).format('DD/MM/YYYY, HH:mm:ss');
            return <div>
                {DateString}
            </div>
        default:
            return <div>
                {data?.[key]}
            </div>
    }
  }

  return (
    <>
        <div className={styles.modal}>
            <div className={styles.titleContainer}>
                <div className={styles.titleHolder}>
                    <div className={styles.title}>
                        <FiTruck />
                        {loading === 'loaded' ? data?.vehicleNumber : <Shimmer width='100%' height='22px' />}
                    </div>
                    <div className={styles.subTitle}>
                        <FiUser />
                        <div>{loading === 'loaded' ? data?.driverName : <Shimmer width='70px' height='12px' />}</div>
                        <div className={styles.dot} />
                        <div>{loading === 'loaded' ? STATUS_LABEL_MAPPING?.[data?.status] : <Shimmer width='70px' height='12px' />}</div>
                    </div>
                </div>
                <div className={styles.closeIcon} onClick={onClose}>
                    <FiX />
                </div>
            </div>
            <div className={styles.divider} />
            <div className={styles.content}>
                {DETAIL_STRUCTURE?.map((detail) => (<div className={styles.card}>
                    <div className={styles.label}>
                        {detail?.icon && detail.icon }
                        <div>{detail?.label}</div>
                    </div>
                    <div className={styles.data}>
                        {loading === 'loaded' ? getFormatedData(detail?.key) : <Shimmer width='100%' height='20px' />}
                    </div>
                </div>))}
            </div>
        </div>
        <div className={styles.overlay} />
    </>
  )
}

export default DetailModal
