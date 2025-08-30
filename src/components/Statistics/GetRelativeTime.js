import moment from "moment";

const GetRelativeTime = (date) => {
    if (!date) return '';
    const now = moment();
    const diffInSeconds = now.diff(date, 'seconds');
  
    if (diffInSeconds < 5) return 'Just now';
    if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
  
    const diffInMinutes = now.diff(date, 'minutes');
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  
    const diffInHours = now.diff(date, 'hours');
    if (diffInHours < 24) return `${diffInHours}h ago`;
  
    const diffInDays = now.diff(date, 'days');
    if (diffInDays < 7) return `${diffInDays}d ago`;
  
    const diffInWeeks = now.diff(date, 'weeks');
    if (diffInWeeks < 4) return `${diffInWeeks}w ago`;
  
    const diffInMonths = now.diff(date, 'months');
    if (diffInMonths < 12) return `${diffInMonths}mo ago`;
  
    const diffInYears = now.diff(date, 'years');
    return `${diffInYears}y ago`;
  } 

export default GetRelativeTime;