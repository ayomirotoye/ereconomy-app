import { useEffect, useState } from "react";
import LoaderContainer from "../components/containers/LoaderContainer";
import { doAuthentication, refreshToken } from "../utils/tokenUtils";

export default function PrivateRoute({ children }: any) {
    const [pageContent, setPageContent] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const isAuthenticated = doAuthentication();
        console.log("isAuthenticated::", isAuthenticated)
        if (!isAuthenticated) {
            window.location.href = "/";
        } else {
            const rightNow = new Date();
            const requeryTime = new Date(Number(sessionStorage.getItem("requeryTime")));

            console.log("rightNow::", rightNow)
            console.log("requeryTime::", requeryTime);

            refreshToken().then(() => {
                setIsLoading(false);
                setPageContent(children)
            })
        }

        return () => {
            setIsLoading(false);
            setPageContent([]);
        }
    }, [])

    return (
        <>
            {isLoading ? <LoaderContainer /> : pageContent}
        </>
    )
}