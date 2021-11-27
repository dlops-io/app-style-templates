export const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export function epochToJsDate(ts) {
    let dt = new Date(ts)
    return dt.toLocaleDateString() + " " + dt.toLocaleTimeString();
}

export function GetInitials(display_name) {
    if (!display_name) {
        display_name = "A"
    }
    let initials = display_name.replace(/[^a-zA-Z- ]/g, "").match(/\b\w/g);
    initials = initials.join('');
    initials = initials.toUpperCase();

    return initials;
}