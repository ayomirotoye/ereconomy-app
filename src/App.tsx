import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/styles/css/custom.css";
import "./assets/styles/css/svgStyles.css";
import LoaderContainer from "./components/containers/LoaderContainer";
import PrivateRoute from "./routing/PrivateRoute";
import { urlPaths } from "./static/constants";


const Home = lazy(() => import("./pages/index"));
const Login = lazy(() => import("./pages/auth/login"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const PaymentStatus = lazy(() => import("./pages/payment/paymentStatus"));

function App() {

  return (
    <div className="App">
      <main className="border-none body-font font-ptSerif">
        <Suspense fallback={<LoaderContainer />}>
          <BrowserRouter basename={process.env.PUBLIC_URL ?? ""} >
            <Routes>
              <Route index element={<Home />} />
              <Route path={urlPaths.login} element={<Login />} />
              <Route path={urlPaths.paymentStatus} element={<PaymentStatus />} />
              <Route path={urlPaths.dashboard} element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
