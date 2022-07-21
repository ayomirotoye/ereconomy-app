import colors from "tailwindcss/colors";
import { config } from "../tailwind.config";
import Brand from "./Brand";
import ProgressBar from "./ProgressBar";
import DynamicText from "./texts/DynamicText";

export type ProgressBarProps = {
    id?: string;
    now?: number;
    children?: any;
    title?: string;
    className?: string
}

const defaultClassName = "flex justify-between items-center my-3 ";
const CustomProgressBarWithBrand = ({ id = "progressbar", now = 50, title, className = "" }: ProgressBarProps) => {
    return (
        <div className={className ? defaultClassName.concat(className) : defaultClassName}>
            <div className="w-1/2 flex justify-start">
                <Brand color="text-primary-900" />
            </div>
            <div className="inline-block align-middle">
                <DynamicText size="16px" className="font-bold text-primary-900 text-right ">{title}</DynamicText>
                <ProgressBar className={className} id={id} now={now} />
            </div>
        </div>
    );
}

export default CustomProgressBarWithBrand;