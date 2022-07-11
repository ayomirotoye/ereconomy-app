import { fieldHasError } from "../../utils/formUtils";
import { formatCurrency, isNullOrUndefined } from "../../utils/helpers";

export default function AmountInput({
    onChange,
    value,
    fixedLabelText,
    type = "number",
    inputFontSize = "text-3xl",
    name = "",
    autoFocus = false,
    maxLength = "",
    onKeyDown,
    compKey,
    index,
    inputClassName = "",
    error = {},
    errorModal = true,
    currency = "N"
}: any) {

    return (
        <div className={`grow border-2  ${fieldHasError(error, type, value) ? "border-red-900" : "border-black-900"} rounded-md text-left px-3 py-3`}>
            <div>
                <input
                    key={compKey ?? fixedLabelText.concat("_", String(index))}
                    autoFocus={autoFocus}
                    name={name}
                    className={`focus:outline-none ${inputFontSize} text-primary-900 w-full font-bold ${inputClassName}`}
                    onChange={onChange}
                    value={formatCurrency(value)}
                    type={"text"}
                    onKeyDown={onKeyDown}
                    maxLength={maxLength}
                />
            </div>

            {!errorModal &&
                <div className="text-red-500 text-sm font-semibold my-5">{(!isNullOrUndefined(error) && error?.hasError) || (type === "number" && value < 0) ? error?.message : []}
                </div>
            }
        </div>
    )
}