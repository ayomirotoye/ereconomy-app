import { useEffect, useState } from "react"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { useNavigate } from "react-router"
import colors from "tailwindcss/colors"
import { useAppDispatch, useAppSelector } from "../../../hooks/state"
import { callSendEmailVerificationOtpUrl } from "../../../services/utilService"
import { appendTokenInputData, deleteTokenInputData } from "../../../state/reducers/tokenizedInputReducer"
import { urlPaths } from "../../../static/constants"
import Button from "../../buttons/Button"
import CustomProgressBarWithBrand from "../../CustomProgressBarWithBrand"
import CustomInput from "../../inputs/CustomInput"
import PasswordInput from "../../inputs/PasswordInput"
import TokenizedInput from "../../inputs/TokenizedInput"
import DynamicText from "../../texts/DynamicText"

const totalStage = 4;
export default function RegisterForm({ switchToRegister }: any) {
    const router = useNavigate();
    const dispatch = useAppDispatch();
    const [stage, setStage] = useState(1);
    const [progress, setProgress] = useState(() => (stage / totalStage) * 100);
    const [values, setValues] = useState({
        "emailAddress": "",
        "password": "",
        "emailValidationToken": "",
        "firstName": "",
        "gender": "",
        "lastName": "",
        "phoneNumber": "",
        "username": "",
    });
    const [formErrors] = useState<any>({});

    const tokenInputData = useAppSelector(
        (state: any) => state.tokenizedInputReducer?.tokenInputData
    );

    function loginUser() {
        router(urlPaths.dashboard);
    }

    const handleTokenChange = ({ val, index }: any) => {
        dispatch(appendTokenInputData({ val, index }));
    }

    const handleTokenDelete = (index: any) => {
        dispatch(deleteTokenInputData({ index }));
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps

        setProgress((stage / totalStage) * 100);
        if (stage === totalStage) {
            callSendEmailVerificationOtpUrl(values.emailAddress);
        }
    }, [stage]);


    return (
        <form className="form px-3">
            <CustomProgressBarWithBrand title="Register" className="my-2" />
            {stage == 1 && <> <div className="mb-4">
                <CustomInput
                    value={values.emailAddress}
                    hideableLabelText=""
                    fixedLabelText="Email"
                    onChange={(e: any) => {
                        setValues({ ...values, [e.target.name]: e.target.value })
                    }}
                    type="email"
                    inputFontSize="md:text-sm"
                    name="emailAddress"
                    error={{
                        hasError: formErrors.emailAddress,
                        message: formErrors.emailAddress
                    }}
                />
            </div>
                <PasswordInput
                    className="mb-4"
                    onChange={(e: any) => setValues({ ...values, password: e.target.value })}
                />
                <div className="mb-4">
                    <CustomInput
                        value={values.username}
                        hideableLabelText=""
                        fixedLabelText="Preferred Username"
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
                </div></>}

            {stage == 2 && <>
                <div className="mb-4">
                    <CustomInput
                        value={values.firstName}
                        hideableLabelText=""
                        fixedLabelText="Firstname"
                        onChange={(e: any) => {
                            setValues({ ...values, [e.target.name]: e.target.value })
                        }}
                        type="text"
                        inputFontSize="md:text-sm"
                        name="firstName"
                        error={{
                            hasError: formErrors.firstName,
                            message: formErrors.firstName
                        }}
                    />
                </div>
                <div className="mb-4">
                    <CustomInput
                        value={values.lastName}
                        hideableLabelText=""
                        fixedLabelText="Lastname"
                        onChange={(e: any) => {
                            setValues({ ...values, [e.target.name]: e.target.value })
                        }}
                        type="text"
                        inputFontSize="md:text-sm"
                        name="lastName"
                        error={{
                            hasError: formErrors.lastName,
                            message: formErrors.lastName
                        }}
                    />
                </div>
                <div className="mb-4">
                    <CustomInput
                        value={values.phoneNumber}
                        hideableLabelText=""
                        fixedLabelText="Phonenumber"
                        onChange={(e: any) => {
                            setValues({ ...values, [e.target.name]: e.target.value })
                        }}
                        type="text"
                        inputFontSize="md:text-sm"
                        name="phoneNumber"
                        error={{
                            hasError: formErrors.phoneNumber,
                            message: formErrors.phoneNumber
                        }}
                    />
                </div>
            </>}
            {/* {call callSendEmailVerificationOtpUrl} */}
            {stage == 3 && <div className="my-5">
                <div className="mb-3 text-center">Please enter token sent your email</div>
                <TokenizedInput
                    onType={(val: any) => handleTokenChange(val)}
                    value={tokenInputData}
                    name={"token"}
                    onDelete={(index: any) => handleTokenDelete(index)}
                    resendText="Resend token"
                    onResend={() => callSendEmailVerificationOtpUrl(values.emailAddress)}
                />
            </div>}




            {stage === 1 && <div className="flex justify-between">
                <button onClick={switchToRegister} type="button">
                    <strong className="text-xs font-bold text-secondary-900 mr-2 cursor-pointer">Login ? Start here !</strong>
                </button>
                <Button
                    onClicked={() => setStage((stage) => stage + 1)}
                    buttonText="Submit"
                    extraDivStyles="w-1/2"
                />
            </div>}
            {stage > 1 && <div className="flex justify-between space-x-4">
                <div className="flex justify-center items-center cursor-pointer" onClick={() => setStage((stage) => stage - 1)}>
                    <AiOutlineArrowLeft className="h-7 w-7"
                        strokeWidth={50}
                        stroke={colors.green[900]}
                        fill={colors.green[900]} />
                </div>
                <Button
                    onClicked={() => setStage((stage) => stage + 1)}
                    buttonText="Next"
                    extraDivStyles="w-1/2"
                />
            </div>}
        </form>
    )
}