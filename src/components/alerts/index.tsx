import { FailedIcon } from "../../assets/icons/FailedIcon";
import { SuccessIcon } from "../../assets/icons/SuccessIcon";

export default function Alert({ message, type = "success", t }: any) {

    return (
        <div className={`bg-white px-6 py-3 shadow-md rounded-md ${t.visible ? 'animate-enter' : 'animate-leave'}`}
        >
            <div className="flex justify-between items-center space-x-2">
                <>
                    {type === "success" ? <SuccessIcon className="h-5 w-5 mt-3" /> :
                        <FailedIcon className="h-10 w-10 mt-3" />}
                    <div>
                        {message}
                    </div>
                </>
            </div>
        </div>
    )
}