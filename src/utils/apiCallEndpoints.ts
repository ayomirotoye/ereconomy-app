export const endpoints={
    loginEndpoint:  `${process.env.REACT_APP_PUBLIC_API_BASE_URL}/auth/login`,
    refreshTokenEndpoint:  `${process.env.REACT_APP_PUBLIC_API_BASE_URL}/auth/refresh-token`,
    registerEndpoint: `${process.env.REACT_APP_PUBLIC_API_BASE_URL}/user/register`,
    initiateCardPayment:`${process.env.REACT_APP_PUBLIC_API_BASE_URL}/payment/fund-account/card/initiate`,
    verifyCardPayment:`${process.env.REACT_APP_PUBLIC_API_BASE_URL}/payment/card-funding/status`,
    emailVerificationOtp:`${process.env.REACT_APP_PUBLIC_API_BASE_URL}/token/generate`,
    forgotPassword:`${process.env.REACT_APP_PUBLIC_API_BASE_URL}/user/forgot-password`,
    refreshToken:`${process.env.REACT_APP_PUBLIC_API_BASE_URL}/auth/refresh-token`,
    userBalanceEndpoint:`${process.env.REACT_APP_PUBLIC_API_BASE_URL}/account/balance`,
    earningsEndpoint:`${process.env.REACT_APP_PUBLIC_API_BASE_URL}/earning`,
    transactionsEndpoint:`${process.env.REACT_APP_PUBLIC_API_BASE_URL}/transaction`
}