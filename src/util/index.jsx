import { FaStar, FaRegStar } from "react-icons/fa6"

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

export const convertHexToRGBA = (cssProperty, opacity) => {
    const style = getComputedStyle(document.body)

    const hex = style.getPropertyValue(cssProperty)

    let red = parseInt(hex.substring(1, 3), 16)

    let green = parseInt(hex.substring(3, 5), 16)
    let blue = parseInt(hex.substring(5, 7), 16)
    if (opacity) {
        return `rgba(${red},${green},${blue},${opacity})`;
    }
    return `rgba(${red},${green},${blue})`;
}


export const starDecoder = (rating) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(FaStar)
        } else {
            stars.push(FaRegStar)
        }

    }

    return (
        <>
            {stars.map((Star, i) => (
                <Star key={i} />
            ))}
        </>
    )
}