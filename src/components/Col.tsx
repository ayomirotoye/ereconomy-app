import { useState } from "react"

export default function Col({ children, className }: any) {
    const [breakpoints, setBreakPoint] = useState("w-1/2");
    return (
        <div className={  `${className} ${breakpoints}`}>
            {children}
        </div>
    )
}