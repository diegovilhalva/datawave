export const cssPerfectShape = (width, height) => {
    return {
        width,
        height,
        minWidth: width,
        minHeight: height,
        maxWidth: width,
        maxHeight: height
    }
}

export const convertHexToRGBA = (cssProperty,opacity) => {
    const style = getComputedStyle(document.body)

    const hex = style.getPropertyValue(cssProperty)

    let red = parseInt(hex.substring(1,3),16)

    let green = parseInt(hex.substring(3,5),16)
    let blue = parseInt(hex.substring(5,7),16)
    if(opacity){
        return `rgba(${red},${green},${blue},${opacity})`;
    }
    return `rgba(${red},${green},${blue})`;
}