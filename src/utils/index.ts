export const dateConverter = (date:Date)=>{
    let rawDate = new Date(date)
    return rawDate.toLocaleDateString()
}