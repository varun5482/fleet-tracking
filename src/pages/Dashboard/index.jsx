import React, { useEffect, useRef } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getStatisticsAction } from '../../redux/Dashboard/Actions/dashboard';
import { setSocketData } from '../../redux/Dashboard/Slices/dashboard';
import Header from '../../components/Header';
import LeftPanel from '../../components/LeftPanel';
import RightPanel from '../../components/RightPanel';
import styles from './index.module.scss';

const Dashboard = () => {
  const { liveUpdates } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  const socketRef = useRef(null);

  useEffect(() => {
    if (!liveUpdates) {
      if (socketRef.current) {
        socketRef.current.close();
        socketRef.current = null;
      }
      return;
    }

    const socket = new WebSocket('wss://case-study-26cf.onrender.com');
    socketRef.current = socket;

    socketRef.current.onopen = () => {
      console.log('Connected to websocket');
    }

    socketRef.current.onmessage = (event) => {
      const eventData = JSON.parse(event.data);
      dispatch(setSocketData({
        data:eventData?.data,
        timestamp: moment().valueOf(),
      }))
      dispatch(getStatisticsAction());
    }

    socketRef.current.onerror = (event) => {
      console.log(event);
    }

    socketRef.current.onclose = () => {
      console.log('Closed');  
    }

    return () => {
      if (socket) {
        socket?.close?.();
        socketRef.current = null;
      }
    }
  }, [liveUpdates]);

  return (
    <div className={styles.dashboardContainer}>
      <Header />
      <div className={styles.content}>
        <div className={styles.leftPanel}>
            <LeftPanel />
        </div>
        <div className={styles.rightPanel}>
            <RightPanel />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
