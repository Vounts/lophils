const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const months2 = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const day = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

export const ISOtoHumanDate = (date) => {};

export const ISOtoHumanDateTime = (date, additional) => {
  const newDate = new Date(date);
  return `${months[newDate.getMonth()]} ${
    newDate.getDate() + parseInt(additional)
  }, ${newDate.getFullYear()} at ${newDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })}`;
};

export const ISOtoHumanDateTime2 = (date, additional) => {
  const newDate = new Date(date);
  return `${newDate.getDate() + parseInt(additional)} ${
    months2[newDate.getMonth()]
  } ${newDate.getFullYear()} ${newDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })}`;
};

export const ISOtoHumanDateTime3 = (date, additional) => {
  const newDate = new Date(date);
  return `${day[newDate.getDay()]}, ${months[newDate.getMonth()]} ${
    newDate.getDate() + parseInt(additional)
  }, ${newDate.getFullYear()} at ${newDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })}`;
};

export function timeDifference(current, previous) {
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerMonth) {
    return "  " + Math.round(elapsed / msPerDay) + " days ago";
  } else if (elapsed < msPerYear) {
    return "  " + Math.round(elapsed / msPerMonth) + " months ago";
  } else {
    return "  " + Math.round(elapsed / msPerYear) + " years ago";
  }
}
