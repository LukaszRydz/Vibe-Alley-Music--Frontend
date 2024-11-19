export const urlRegex = /https?:\/\/[^\s.]+/g;
export const brRegex = /<br\s*\/?>/g;


export const discountCalc = (discount: number, price: number) => {
    const discountPrice = discount ? price * ((100 - discount) / 100) : null;

    return discountPrice?.toFixed(2) || null
}

export const linkRecognition = (text: string) => {
    const linkRegex = /https?:\/\/[^\s]+/;
    return linkRegex.test(text);
}