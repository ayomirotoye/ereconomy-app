import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { callUserLoginApi } from "../../../services/authService"
import { alertTimeOutInMs, responseMessages, urlPaths } from "../../../static/constants"
import { hasKeys, isSuccessful } from "../../../utils/helpers"
import Alert from "../../alerts"
import Button from "../../buttons/Button"
import CustomInput from "../../inputs/CustomInput"
import PasswordInput from "../../inputs/PasswordInput"
import DynamicText from "../../texts/DynamicText"

export default function LoginForm({ switchToRegister }: any) {
    const router = useNavigate();
    const [values, setValues] = useState({
        "username": "",
        "password": "",
    });
    const [formErrors] = useState<any>({});

    const [isSubmitting, setIsSubmitting] = useState(false);

    async function loginUser() {
        setIsSubmitting(true);
        try {

            // Authenticate user with credentials
            const userLoginCall = await callUserLoginApi(values);
            setIsSubmitting(false);
            if (isSuccessful(String(userLoginCall?.responseCode))) {
                router(urlPaths.dashboard)
            } else {
                toast.custom((t) => <Alert type="failed" t={t} message={userLoginCall?.message ?? responseMessages.BAD_REQUEST} />, {
                    position: 'top-center',
                    duration: alertTimeOutInMs
                });
            }

        } catch (err: any) {
            console.log("error::", err)
        }
    }

    return (
        <form className="form px-3">
            <DynamicText size="32px" className="font-bold text-primary-900 mb-3 text-right">Login</DynamicText>
            <div className="mb-4">
                <CustomInput
                    value={values.username}
                    hideableLabelText=""
                    fixedLabelText="Email/Username"
                    onChange={(e: any) => {
                        setValues({ ...values, [e.target.name]: e.target.value })
                    }}
                    type="text"
                    inputFontSize="md:text-sm"
                    name="username"
                    error={{
                        hasError: formErrors.username,
                        message: formErrors.username
                    }}
                />
            </div>
            <PasswordInput
                className="mb-4"
                onChange={(e: any) => setValues({ ...values, password: e.target.value })}
            />

            {!hasKeys(formErrors) ? <div className="mb-2">
                <Button
                    onClicked={loginUser}
                    buttonText="Login"
                    isLoading={isSubmitting}
                />
            </div> : []}

            <div className="flex justify-between">
                <button onClick={switchToRegister} type="button">
                    <strong className="text-xs font-bold text-secondary-900 mr-2 cursor-pointer">New here ? Register !</strong></button>
                <Link to="forgot" className=""><strong className="text-xs font-bold text-secondary-900 mr-2 cursor-pointer">Forgot Password ?</strong></Link>
            </div>
        </form>
    )
}
