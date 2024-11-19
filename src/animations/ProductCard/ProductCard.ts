import gsap from 'gsap'

export const coverBackgroundAnimation = (coverWrapperRef: HTMLDivElement, card: HTMLDivElement) => {
    if (document.documentElement.getAttribute('animations') !== 'on') return

    const theme: string = document.documentElement.getAttribute('data-theme') || 'light'
    const shadow = theme === 'light' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8'
    
    const cover: HTMLImageElement = coverWrapperRef.querySelector('img')!
    const shadowAnimElements = card.querySelectorAll('.shadow-anim')

    const badges = card.querySelectorAll('.badges_anim')!
    const badgesBottom = card.querySelectorAll('.badges_anim_bottom')!

    // no delay between animations
    const tl = gsap.timeline({ paused: true, duration: 1, ease: 'power2.out' })
    tl.fromTo(cover, {
        scale: 1,
    }, {
        scale: 0.95,
    }, 0).fromTo(shadowAnimElements, {
        filter: `drop-shadow(0px 0px 0px ${shadow})`
    }, {
        filter: `drop-shadow(5px 5px 4px ${shadow})`,
    }, 0).fromTo(coverWrapperRef, {
        '--before-cover-opacity': '0',
    }, {
        '--before-cover-opacity': '1',
    }, 0)

    if (badges.length > 0) {
        tl.fromTo(badges, {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -10,
            duration: 0.2,
        }, 0)
    }

    if (badgesBottom.length > 0) {
        tl.fromTo(badgesBottom, {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: 10,
            duration: 0.2,
        }, 0)
    }

    card.addEventListener('mouseover', () => {
        tl.play()
    })

    card.addEventListener('mouseout', () => {
        tl.reverse()
    })

    const cleanup = () => {
        card.removeEventListener('mouseover', () => tl.play())
        card.removeEventListener('mouseout', () => tl.reverse())

        tl.kill()
    }

    return cleanup
}