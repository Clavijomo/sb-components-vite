import './MyLabel.css';

interface Props {
    /** 
     * Text to display
     */
    label: string
    /** 
     * Label size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';

    /** 
     * Is uppercase?
     */
    allCaps?: boolean

    /** 
     * Label color
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary'

    /** 
     * Font color
     */
    fontColor?: string
}

export const MyLabel = ({
    label,
    size = 'normal',
    color = 'text-secondary',
    allCaps = false,
    fontColor
}: Props) => {
    return (
        <span
            style={{ color: fontColor }}
            className={`${size} ${color} label`}>
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}
