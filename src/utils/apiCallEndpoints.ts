export const endpoints={
    loginEndpoint:  `${process.env.PUBLIC_API_BASE_URL}/api/v1/auth/login`,
    refreshTokenEndpoint:  `${process.env.PUBLIC_API_BASE_URL}/api/v1/auth/login`,
    registerEndpoint: `${process.env.PUBLIC_API_BASE_URL}/api/v1/user/register`,
    initiateCardPayment:`${process.env.PUBLIC_API_BASE_URL}/api/v1/payment/fund-account/card/initiate`,
    verifyCardPayment:`${process.env.PUBLIC_API_BASE_URL}/api/v1/payment/card-funding/status`,
    emailVerificationOtp:`${process.env.PUBLIC_API_BASE_URL}/api/v1/token/generate`,
    forgotPassword:`${process.env.PUBLIC_API_BASE_URL}/api/v1/user/forgot-password`,
    refreshToken:`${process.env.PUBLIC_API_BASE_URL}/api/v1/auth/refresh-token`,
    userBalanceEndpoint:`${process.env.PUBLIC_API_BASE_URL}/api/v1/account/balance`
}