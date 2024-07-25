export default function Link (props) {
    return (
        <a  
            className={props.className}
            href={props.href}
            target={props.target || "_blank"}
        >
            {props.children}
        </a>
    )
}