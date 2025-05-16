import "./Button.css";

export default function Button({ text, color, size, onClick, disabled }) {
    // const colorClass = color ? `${color}-btn` : "";
    // const sizeClass = size ? `${size}-btn` : null;

    const classNames = ["btn"];
    if (color) classNames.push(`${color}-btn`);
    if (size) classNames.push(`${size}-btn`);
    return (
        <button className={classNames.join(" ")} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
}
