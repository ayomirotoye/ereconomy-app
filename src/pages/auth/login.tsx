import { useEffect, useState } from "react";
import LoginForm from "../../components/micro-components/login/LoginForm";
import RegisterForm from "../../components/micro-components/login/RegisterForm";
import PageWrapper from "../../components/PageWrapper";

export default function Login() {
    const [page, setPage] = useState("login");

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        sessionStorage.clear();
    }, [])

    return <PageWrapper isHeaderVisible={false}>
        <div className="flex flex-col h-screen" id="login-container">
            <div className="w-full flex flex-grow justify-center items-center">
                <div className="bg-white border-4 rounded-md border-primary-900 p-5 w-1/3">
                    {page === "login" ?
                        <LoginForm switchToRegister={() => setPage("register")} /> :
                        <RegisterForm switchToRegister={() => setPage("login")} />
                    }
                </div>
            </div>
        </div>
    </PageWrapper>
}