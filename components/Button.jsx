import "./Button.css";

export default function Button({
    children = "Button",
    color = "default",
    borderText = false,
    size = "default",
    shape = "default",
    transparent,
    onClick,
    disabled,
}) {

    const sizeOpt = {
        default: {
            minHeight: 24,
            minWidth: 48,
            fontSize: 11,
            padding: 14,
        },
        small: {
            minHeight: 20,
            minWidth: 32,
            fontSize: 9,
            padding: 12,
        },
        xsmall: {
            minHeight: 16,
            minWidth: 28,
            fontSize: 7,
            padding: 9,
        },
        large: {
            minHeight: 28,
            minWidth: 56,
            fontSize: 14,
            padding: 18,
        },
        xlarge: {
            minHeight: 32,
            minWidth: 64,
            fontSize: 17,
            padding: 22,
        },
    };
    

    return (
        <>
            <button className={`ButtonBorder ${color} ${size} ${shape}`} onClick={onClick} disabled={disabled}>
                <div className={`Button ${color}${borderText ? " TextBordered" : ""} ${size} ${shape}`} disabled={disabled}>{children}</div>
                <div
                    disabled={disabled}
                    className={`ButtonBackground ${color}${transparent ? " Transparent" : ""} ${size} ${shape}`}>
                    {children}
                </div>
            </button>
        </>
    );
}
