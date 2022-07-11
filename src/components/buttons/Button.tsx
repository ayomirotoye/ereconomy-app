import { SpinnerCircleIcon } from "../../assets/icons/SpinnerCircleIcon";
import { ButtonType } from "../../types/classes";

const Button = ({
    onClicked,
    buttonText,
    extraDivStyles = "w-full",
    isLoading = false,
    className = "py-4 w-full font-bold bg-green-900 text-white rounded-lg border-0 cursor-pointer",
    children = [],
}: ButtonType) => {

    return (
        <div className={extraDivStyles}>
            <button
                disabled={isLoading}
                onClick={onClicked}
                type="button"
                className={className}>
                <span>{isLoading ? <SpinnerCircleIcon width="30px" height="30px" /> : <>{children} {buttonText}</>}</span></button>
        </div >
    );
}
export default Button;