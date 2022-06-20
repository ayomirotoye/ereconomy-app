import { ArrowRightIcon } from "../../assets/icons/ArrowRightIcon";

export const InfoCard = ({ title, text, image }: any) => {
    return (
        <div className="p-[16px] h-400">
            <div className="border border-1 border-primary-900 rounded-lg p-5 min-h-full">
                <div className="my-1 h-15 max-h-24">
                    {image}
                </div>
                <div className="my-1 h-15 min-h-24">
                    <p className="font-bold text-lg my-5">{title}</p>
                    <p className="text-sm leading-regular">
                        {text}
                    </p>
                </div>

            </div>
            <div className="flex justify-center h-10">
                <div className="absolute -mt-5 bg-primary-900 inline-flex items-baseline rounded-lg p-1">
                    <ArrowRightIcon fill={"#currentColor"} />
                </div>
            </div>
        </div>
    );
}

export default InfoCard;