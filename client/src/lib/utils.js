export function formatDataMessageTime(date){
    return new Date(date).toLocaleTimeString("en-IN",{
        hours: '2-digit',
        minutes: '2-digit',
        hour12: false
    })
}