import colors from "tailwindcss/colors"
import { AvatarIcon } from "../../../assets/icons/AvatarIcon"
import DynamicText from "../../../components/texts/DynamicText"

export default function Leaderboard({ listItems }: any) {
    return (
        <div className="overflow-auto">
            {listItems.map((_items: any, index: number) => {
                return <div className="w-full flex my-1">
                    <div className="flex w-1/5 justify-between">
                        <DynamicText className="mr-2 -mb-1 font-bold" size="16px">{index + 1}</DynamicText>
                        <AvatarIcon className="h-5 w-5 mt-1 text-right" fill={colors.gray["500"]} />
                    </div>
                    <div className="w-4/5 text-center lowercase">Ayomide Akinrotoye</div>
                    <div className="w-2/5 font-bold text-right">N5,000</div>
                </div>
            })}

        </div>
    )
}