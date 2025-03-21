export function convertDatetoUnix(date) {


    const [year, month, day] = date.split("-");
    const newDate = new Date(year, month - 1, day);

    return Math.floor(newDate.getTime() / 1000);
}
export function converttoHumanDate(date) {

    const dateObj = new Date(date * 1000);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return dateObj.toLocaleDateString('en-EN', options);


}

export function timeToMinutes(timeString = '') {
    // Split the input time into hours and minutes
    const [hours, minutes] = timeString.split(":").map(Number);

    // Convert hours to minutes and add the minutes
    return hours * 60 + minutes;
}
export function minutesToTime(minutes) {
    // Convert minutes to hours and minutes
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${String(hours).padStart(2, '0')}:${String(remainingMinutes).padStart(2, '0')}`;

    
}

export function convertUnixToDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
    const day = String(date.getDate()).padStart(2, '0'); // Pad single digit day
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
}