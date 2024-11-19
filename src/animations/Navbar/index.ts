import gsap from 'gsap';
import SplitType from 'split-type';

export const navbarBtnAnimation = (btn: HTMLLIElement) => {
    if (document.documentElement.getAttribute('animations') !== 'on') return


    const span = btn.querySelector('span') 
    const text = new SplitType(span!)

    const tl = gsap.timeline({ paused: true })
        .fromTo(text.chars, {
            opacity: 0,
            display: 'none'
        }, {
            opacity: 1,
            display: 'inline-block',
            duration: 0.5,
            stagger: 0.03
        })

    const checkWindowWidth = () => {
        return window.innerWidth >= 450
    }

    btn.addEventListener('mouseover', () => {
        if (checkWindowWidth()) {
            tl.play()
        }
    })
    btn.addEventListener('mouseout', () => {
        if (checkWindowWidth()) {
            tl.reverse()
        }
    })

    const cleanup = () => {
        btn.removeEventListener('mouseover', () => tl.play())
        btn.removeEventListener('mouseout', () => tl.reverse())
    }

    return cleanup
}