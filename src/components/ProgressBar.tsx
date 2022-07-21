import { ProgressBarProps } from "./CustomProgressBarWithBrand";

export default function ProgressBar({ id, now = 100, }: ProgressBarProps) {
    return <div className='h-1 w-full bg-gray-300'>
        <div
            style={{ width: `${now}%` }}
            className={`h-16 bg-red-900`}>
        </div>
    </div>

}