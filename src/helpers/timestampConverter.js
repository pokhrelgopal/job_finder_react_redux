export default function timeAgo(timestamp) {
  const now = new Date();
  const targetDate = new Date(timestamp);
  const diffInMinutes = Math.floor((now - targetDate) / (1000 * 60));

  if (diffInMinutes < 60) {
    return diffInMinutes === 1
      ? "1 minute ago"
      : `${diffInMinutes} minutes ago`;
  } else if (diffInMinutes < 1440) {
    // 1440 minutes in a day (24 hours)
    const hours = Math.floor(diffInMinutes / 60);
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  } else {
    const days = Math.floor(diffInMinutes / 1440);
    return days === 1 ? "1 day ago" : `${days} days ago`;
  }
}
