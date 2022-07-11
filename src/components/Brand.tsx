export default function Brand({color}: any) {
    return (
        <>
            <div className="md:block hidden">
                <span className={`font-bold text-[22px] lg:text-[32px] ${color}`}>èrèconomy</span>
            </div>
            <div className="md:hidden">
                <span className={`font-bold text-[28px] ${color}`}>èrè</span>
            </div>
        </>
    );
}
