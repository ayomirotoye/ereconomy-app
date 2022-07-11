export default function ({ children, isCentered }: any) {
    return (
        <div className="container">
            <div className={` ${isCentered ? "mx-auto" : ""}`}>
                {children}
            </div>
        </div>
    )
}