import { FiClock, FiActivity, FiTrendingUp, FiUser } from "react-icons/fi";

const statisticsCards = [
    {
      key: 'total',
      icon: <FiUser />,
      text: 'TOTAL FLEET'
    },
    {
      key: 'average_speed',
      icon: <FiTrendingUp />,
      text: 'AVG SPEED'
    },
    {
      key: 'en_route',
      icon: <FiActivity />,
      text: 'MOVING'
    },
    {
      key: 'timeStamp',
      icon: <FiClock />,
      text: 'LAST UPDATE'
    },
];

export default statisticsCards;