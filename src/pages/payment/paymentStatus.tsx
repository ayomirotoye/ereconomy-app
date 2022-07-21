import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { SpinnerCircleIcon } from "../../assets/icons/SpinnerCircleIcon";
import Alert from "../../components/alerts";
import Button from "../../components/buttons/Button";
import CustomInput from "../../components/inputs/CustomInput";
import PageWrapper from "../../components/PageWrapper";
import DynamicText from "../../components/texts/DynamicText";
import { useQuery } from "../../hooks/components";
import { callVerifyCardPayment } from "../../services/paymentService";
import { responseMessages } from "../../static/constants";
import { ApiResponse } from "../../types/interfaces";
import { handleMyErrors } from "../../utils/errorHandlingUtil";
import { isNullOrUndefined, isSuccessful } from "../../utils/helpers";

type PaymentDetails = {
    paymentStatus?: string,
    amount?: string,
    fee?: string,
    currency: string,
    paymentMethod?: string,
    paymentReference?: string
}


export default function PaymentStatus() {
    const queryParams = useQuery();
    const navigate = useNavigate();

    const [isVerifying, setIsVerifying] = useState(true);
    const [redirecTo, setRedirectTo] = useState("");
    const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>(Object.assign({
        paymentStatus: "verifying",
        amount: "",
        fee: "",
        currency: "NGN",
        paymentMethod: "CARD",
        paymentReference: "",
    }));

    useEffect(() => {

        if (!isNullOrUndefined(queryParams) && Object.keys(queryParams).includes("reference")) {
            let reference = queryParams.reference
            console.log("reference::", reference)
            setPaymentDetails({
                ...paymentDetails,
                paymentReference: reference
            })
            setRedirectTo(queryParams.redirectTo ?? "/dashboard")
            setIsVerifying(true);
            const data = callVerifyCardPayment(reference);

            data.then((response: ApiResponse) => {
                setIsVerifying(false);
                console.log("response_from::", response)
                if (isSuccessful(response?.responseCode)) {
                    toast.custom((t) => <Alert type="success" t={t} message={response?.message ?? responseMessages.SUCCESSFUL} />, {
                        position: 'top-center',
                    });
                    setPaymentDetails(
                        {
                            ...paymentDetails,
                            amount: response?.data.amount,
                            fee: response?.data.fee,
                            paymentStatus: response?.data.transactionStatus,
                        }
                    )
                } else {
                    toast.custom((t) => <Alert type="failed" t={t} message={response?.message ?? responseMessages.BAD_REQUEST} />, {
                        position: 'top-center',
                    });
                    setPaymentDetails(
                        {
                            ...paymentDetails,
                            amount: response?.data.amount,
                            paymentStatus: "failed",
                        }
                    )
                }
            }).catch((err: any) => {
                let errorMsg: any = handleMyErrors(err)?.message;
                console.log("ERROR:::", errorMsg);
                setPaymentDetails({ ...paymentDetails, paymentStatus: errorMsg });
                setIsVerifying(false);
            });
        }
        return () => {
            setPaymentDetails({ ...paymentDetails, paymentStatus: "" });
            setIsVerifying(false);
        }
    }, [])

    return (
        <PageWrapper isHeaderVisible={true}>
            <div className="h-100 md:h-80 flex justify-center items-center">
                <div className="bg-white border-4 rounded-md border-primary-900 p-5 md:w-1/3 w-full ">
                    <form className="form px-3">
                        <DynamicText size="32px" className="font-bold text-primary-900 mb-3 text-right">Payment Status</DynamicText>

                        <div className="mb-4">
                            <CustomInput
                                value={paymentDetails.amount}
                                hideableLabelText=""
                                fixedLabelText="Amount Paid"
                                type="text"
                                inputFontSize="md:text-sm"
                                name="amount"
                                readOnly={true}
                            />
                        </div>
                        <div className="mb-4">
                            <CustomInput
                                value={paymentDetails.fee}
                                hideableLabelText=""
                                fixedLabelText="Payment Fee"
                                type="text"
                                inputFontSize="md:text-sm"
                                name="fee"
                                readOnly={true}
                            />
                        </div>

                        <div className="mb-4">
                            {paymentDetails.paymentStatus === "verifying" ?
                                <SpinnerCircleIcon width={20}
                                    height={20} /> : <CustomInput
                                    value={paymentDetails.paymentStatus}
                                    hideableLabelText=""
                                    fixedLabelText="Status"
                                    type="text"
                                    inputFontSize="md:text-sm"
                                    name="status"
                                    readOnly={true}
                                />}
                        </div>
                        <Button
                            onClicked={() => {
                                window.location.href = redirecTo
                            }}
                            buttonText="Go to Dashboard"
                            isLoading={isVerifying}
                        />

                    </form>
                </div>
            </div>
        </PageWrapper>
    )
}