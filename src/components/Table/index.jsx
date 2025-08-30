import React, { useEffect } from 'react'
import moment from 'moment';
import { FiXOctagon } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { setModalOpenStatus } from '../../redux/Vehicle/Slices/vehicle';
import { getVehiclesAction } from '../../redux/Dashboard/Actions/dashboard';
import { STATUS_LABEL_MAPPING } from '../../utils/Constants';
import Shimmer from '../Shimmer';
import HEADER_STRUCTURE from './HeaderStructure';
import styles from './index.module.scss';

const Table = () => {
  const {
    vehicles,
    filters,
  } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  const { data, loading } = vehicles;

  const handleVehicleClick = (id) => {
    dispatch(setModalOpenStatus(id));
  };

  useEffect(() => {
    dispatch(getVehiclesAction({status: filters}));
  },[filters])

  const getFormatedData = (_data, key) => {
    switch(key) {
      case 'vehicleNumber': 
        return <div className={styles.vehicleNumber} onClick={() => handleVehicleClick(_data.id)} >
          {_data?.[key]}
        </div>
      case 'status':
        return <div className={`${styles.status} ${styles?.[_data?.[key]]}`}>
          {STATUS_LABEL_MAPPING?.[_data?.[key]]}
        </div>
      case 'speed': 
        return <div className={styles.speed}>
          {_data?.[key]} mph
        </div>
      case 'estimatedArrival': 
      case 'lastUpdated':
        if (!_data?.[key]) {
          return '-';
        }
        const dateString = moment(_data?.[key]).format('DD/MM/YYYY, HH:mm:ss');
        return <div>
          {dateString}
        </div>
      case 'currentLocation':
        const location = _data?.[key];
        return <div>
          {(location.lat).toFixed(4)}, {(location.lng).toFixed(4)}
        </div>
      default: 
        return _data?.[key] || '-';
    }
  }
  
  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.tableHeaderContainer}>
          {HEADER_STRUCTURE?.map?.((header) => {
            return <th className={styles.tableHeader}>{header.label}</th> 
          })}
        </thead>
        {loading === 'loading' ?  Array(10).fill(0).map((_) => {
          return <tr className={styles.tableBodyContainer}>
            {HEADER_STRUCTURE?.map?.(({key}) => {
              return <td className={styles.tableRow}>
                <Shimmer width='100%' height='14px' />
              </td>
            })}
          </tr>
        }) :  
        data?.map?.((tableData) => {
          return <tr className={styles.tableBodyContainer}>
            {HEADER_STRUCTURE?.map?.(({key}) => {
              return <td className={styles.tableRow}>{getFormatedData(tableData, key)}</td>
            })}
          </tr>
        }) 
      }
      </table>
      {loading !== 'loading' && data?.length === 0 ? <div className={styles.noData}>
        <FiXOctagon />
        No Information found
      </div> : null}
    </div>
  )
}

export default Table
