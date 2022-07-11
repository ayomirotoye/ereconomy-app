import colors from "tailwindcss/colors";
import { EyeIcon } from "../../../assets/icons/EyeIcon";
import DynamicText from "../../texts/DynamicText";
import Leaderboard from "./Leaderboard";

export default function DashboardThirdSection() {
    return (
        <div className="md:flex justify-between md:space-x-3 mt-5">
            <div className="md:w-1/2 h-48 mb-5 sm:mb-0">
                <div className="w-full rounded-lg bg-gray-100 overflow-hidden shadow-xl h-full overflow-auto">
                    <div className="flex flex-col justify-between px-4 py-2">
                        <div className="flex justify-between">
                            <DynamicText size="16px" className="font-bold text-primary-900">Leaderboard</DynamicText>
                            <EyeIcon fill={colors.white} className="p-1 bg-green-900 rounded-lg h-5 w-5" height="60" width="60" />
                        </div>
                        <Leaderboard listItems={[
                            {
                                name: "",
                                value: ""
                            },
                            {
                                name: "",
                                value: ""
                            },
                            {
                                name: "",
                                value: ""
                            },
                            {
                                name: "",
                                value: ""
                            },
                            {
                                name: "",
                                value: ""
                            },
                        ]} />
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 h-48">
                <div className="w-full rounded-lg bg-gray-100 overflow-hidden shadow-xl h-full ">
                </div>
            </div>
        </div>
    )
}