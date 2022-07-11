import { useEffect, useState } from "react";
import { useMediaQueryWrapper } from "../../hooks/components";

export default function MainPageContainer({ children }: any) {
    const { isSmallScreen } = useMediaQueryWrapper();
    const [smallScr, setSmallScr] = useState(false);

    useEffect(() => {
        setSmallScr(isSmallScreen);

        return () => {
            setSmallScr(false);
        }
    }, [isSmallScreen])

    return (
        <div className={smallScr ? 'col-span-10 sm:ml-10 px-10  overflow-y-auto' :
            'col-span-10 px-10  overflow-y-auto'}>
            {children}
        </div>
    )
}