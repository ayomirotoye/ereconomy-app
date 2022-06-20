import Navbar from "./Navbar";

type pageWrapperProps = {
    isHeaderVisible?: boolean;
    children: any
}
export default function PageWrapper({ isHeaderVisible = true, children }: pageWrapperProps) {
    return (
        <>
            <Navbar isVisible={isHeaderVisible} />
            {children}
        </>
    )
}