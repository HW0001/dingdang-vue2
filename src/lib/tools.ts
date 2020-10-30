const clone = (obj: object) => {
    return JSON.parse(JSON.stringify(obj));
}


export {clone}