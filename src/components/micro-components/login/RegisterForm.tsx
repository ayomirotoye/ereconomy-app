import { useState } from "react"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { urlPaths } from "../../../static/constants"
import { hasKeys } from "../../../utils/helpers"
import Button from "../../buttons/Button"
import CustomInput from "../../inputs/CustomInput"
import PasswordInput from "../../inputs/PasswordInput"
import DynamicText from "../../texts/DynamicText"

export default function RegisterForm({ switchToRegister }: any) {
    const router = useNavigate();
    const [values, setValues] = useState({
        "email": "",
        "password": "",
        "isForce": true,
        "deviceId": ""
    });
    const [formErrors] = useState<any>({});

    function loginUser() {
        router(urlPaths.dashboard);
    }

    return (
        <form className="form px-3">
            <DynamicText size="32px" className="font-bold text-primary-900 mb-3 text-right">Register</DynamicText>
            <div className="mb-4">
                <CustomInput
                    value={values.email}
                    hideableLabelText=""
                    fixedLabelText="Email"
                    onChange={(e: any) => {
                        setValues({ ...values, [e.target.name]: e.target.value })
                    }}
                    type="email"
                    inputFontSize="md:text-sm"
                    name="email"
                    error={{
                        hasError: formErrors.email,
                        message: formErrors.email
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
                />
            </div> : []}

            <div className="flex justify-between">
                <button onClick={switchToRegister} type="button">
                    <strong className="text-xs font-bold text-secondary-900 mr-2 cursor-pointer">Login ? Start here !</strong></button>
                <Link to="forgot" className=""><strong className="text-xs font-bold text-secondary-900 mr-2 cursor-pointer">Forgot Password ?</strong></Link>
            </div>
        </form>
    )
}