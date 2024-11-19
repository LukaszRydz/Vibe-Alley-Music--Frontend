import { useNavigate } from 'react-router-dom';
import { linkRecognition } from '../../utils/helpers';
import { BtnLink } from './BtnLink';

import styles from './CustomTags.module.scss';

export const CustomTag = ({ tag }: { tag: { [key: string]: string[] } }) => {
    const navigate = useNavigate();
    
    const tagType: string = Object.keys(tag)[0] || 'none'
    const elements: string[] | string = tag[tagType] || []

    switch (tagType) {
        case 'list':
            return generateList(elements)
        case 'redirect':
            return generateRedirectBtn(() => navigate(String(elements), { replace: true }))
        
    }

    return null
}

const generateList = (elements: string[]) => {
    return (
        <ul className={styles['custom-list']}>
            {elements.map((element, index) => {
                const elementContent = element.split('-')
                const title = elementContent[0]

                const parseDescription = () => {
                    if (linkRecognition(elementContent[1])) {
                        return <BtnLink link={elementContent[1]}/>
                    } else {
                        return <span className={styles.description}>{elementContent[1]}</span>
                    }
                }

 

                return <li key={index}>
                    <span className={styles.title}>{title}</span>
                    {' - '}
                    {parseDescription()}
                </li>
            })}
        </ul>
    )
}

const generateRedirectBtn = (navigate: () => void) => {
    return (
        <button className={styles['redirect-btn']} onClick={() => navigate()}>
            <span>Redirect {'>'}</span>
        </button>
    )
}