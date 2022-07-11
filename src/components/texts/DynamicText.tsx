export default function DynamicText({ size, className = "", children }: any) {
    return (
        <p style={{
            fontSize: size
        }} className={`${className}`}>
            {children}
        </p>
    )
}