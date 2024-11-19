import { Paragraph } from "./Paragraph";

import { delivery, returns, privacy } from "./Policy.json";

import styles from "./Policy.module.scss";

export const Policy = () => {
    const language: string = "pl";

    const deliveryPolicy = language === "pl" ? delivery[0].pl : delivery[0].en;
    const returnsPolicy = language === "pl" ? returns[0].pl : returns[0].en;
    const privacyPolicy = language === "pl" ? privacy[0].pl : privacy[0].en;

    return (
        <div className={styles.polices}>
            <h1 className={styles.policy}>Delivery Policy</h1>
            {deliveryPolicy.map((data: { paragraph: string; content: string }, index: number) => (
                <Paragraph key={index} heading={data.paragraph}>
                    <span className={styles.content}>{data.content}</span>
                </Paragraph>
            ))}

            <h1 className={styles.policy}>Returns Policy</h1>
            {returnsPolicy.map((data: { paragraph: string; content: string }, index: number) => (
                <Paragraph key={index} heading={data.paragraph}>
                    <span className={styles.content}>{data.content}</span>
                </Paragraph>
            ))}

            <h1 className={styles.policy}>Privacy Policy</h1>
            {privacyPolicy.map((data: { paragraph: string; content: string }, index: number) => (
                <Paragraph key={index} heading={data.paragraph}>
                    <span className={styles.content}>{data.content}</span>
                </Paragraph>
            ))}
        </div>
    );
};
