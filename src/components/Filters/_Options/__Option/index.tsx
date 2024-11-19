import styles from '../index.module.scss';

export const Option = ({ id, label, checked, onChange }: OptionItemProps) => {
    return (
        <div className={ styles.option }>
            <input type="checkbox" id={id} checked={checked} onChange={onChange} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

interface OptionItemProps {
    id: string;
    label: string;
    checked: boolean;
    onChange: () => void;
}
