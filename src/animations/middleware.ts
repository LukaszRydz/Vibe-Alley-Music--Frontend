export const middleware = () => {
    const animations = document.querySelector('html')?.getAttribute('animations') || 'on';
    return animations === 'off'
}