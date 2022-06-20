import { useEffect, useState } from "react";

export default function ClientOnly({ children, ...delegated }: any) {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps

        setHasMounted(true);
    }, []);
    if (!hasMounted) {
        return null;
    }
    return (
        <div {...delegated}>
            {children}
        </div>
    );
}
