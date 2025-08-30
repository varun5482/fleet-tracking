import { FiUser, FiBattery, FiPhone, FiNavigation, FiMapPin, FiClock, FiWind, FiRadio } from 'react-icons/fi';

const DETAIL_STRUCTURE = [
    {
        key: 'status',
        label: 'STATUS',
        icon: <FiNavigation />,
    },
    {
        key: 'speed',
        label: 'CURRENT SPEED',
        icon: <FiRadio />,
    },
    {
        key: 'driverName',
        label: 'DRIVER',
        icon: <FiUser />,
    },
    {
        key: 'driverPhone',
        label: 'PHONE',
        icon: <FiPhone />,
    },
    {
        key: 'destination',
        label: 'DESTINATION',
        icon: <FiMapPin />,
    },
    {
        key: 'currentLocation',
        label: 'LOCATION',
        icon: <FiNavigation />,
    },
    {
        key: 'batteryLevel',
        label: 'BATTERY LEVEL',
        icon: <FiBattery />,
    },
    {
        key: 'fuelLevel',
        label: 'FUEL LEVEL',
        icon: <FiWind />,
    },
    {
        key: 'lastUpdated',
        label: 'LAST UPDATED',
        icon: <FiClock />,
    },
  ]

  export default DETAIL_STRUCTURE;