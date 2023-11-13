export const dateConverter = (date:Date)=>{
    let rawDate = new Date(date)
    return rawDate.toLocaleDateString()
}

interface obj{
    [key: string]: any;
}
export const isEmpty = (obj:obj)=>{
    let result = Object.keys(obj).filter(key=>{
        return obj[key] === ""
    })

    if (result.length > 0) return true

    return false
}