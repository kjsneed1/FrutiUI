import "./Button.css";

export default function Button({
    children = "button",
    color = "default",
    borderText = false,
    size = "default",
    circle = false,
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

    let sizes = sizeOpt[size];

    let circText = "rectangle";
    sizes.outerBorderRadius = 5;
    sizes.innerBorderRadius = 4;
    if (circle) {
        circText = "circle";
        sizes.outerBorderRadius = 21;
        sizes.innerBorderRadius = 20;
        sizes.padding = 7;
        sizes.minWidth = 20;
    }

    return (
        <>
            <button className={`ButtonBorder ${color}`} onClick={onClick} disabled={disabled}>
                <div className={`Button ${color}${borderText ? " TextBordered" : ""}`} disabled={disabled}>{children}</div>
                <div
                    disabled={disabled}
                    className={`ButtonBackground ${color}`}>
                    {children}
                </div>
            </button>
        </>
    );
}
