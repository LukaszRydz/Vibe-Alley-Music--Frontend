import { useNavigate } from 'react-router-dom';
import styles from './Chat.module.scss';
import { brRegex, urlRegex } from '../../utils/helpers';

export const ParsedMessage = ({ message } : { message: string }) => {
    const navigate = useNavigate();
    
    const redirect = (link: string) => {
        const loc = window.location.host;
        if (!link) return;
        link.includes(loc) ? navigate(link.split(loc)[1], {replace: true}) : window.open(link, '_blank');
    }
    
    const linkElement = (link: string) => {
        return (
            <a 
                key={(Math.random() + 1).toString(36).substring(7)} 
                className={styles.link} 
                onClick={() => redirect(link)}>
                <span className={styles.hidden}>Link</span>
                <span className={styles.hovered}>{link}</span>
            </a>
        );
    };

    const convertTextToJSX = (text: string) => {
        const parts = text.split(new RegExp(`(${urlRegex.source}|${brRegex.source})`));
        
        return parts.map((part, index) => {
            if (part.match(urlRegex)) {
                return linkElement(part);
            } else if (part.match(brRegex)) {
                return <br key={index} />;
            } else {
                return part;
            }
        });
    };

    return convertTextToJSX(message);
}