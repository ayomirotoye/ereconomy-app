import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages";
import "./assets/styles/css/svgStyles.css"
import "./assets/styles/css/custom.css"
import { urlPaths } from "./static/constants";
import Login from "./pages/auth/login";

function App() {
  return (
    <div className="App">
      <main className="border-none body-font font-ptSerif">
        <Suspense fallback="loading">
          <BrowserRouter basename={process.env.PUBLIC_URL ?? ""} >
            <Routes>
              <Route index element={<Home />} />
              <Route path={urlPaths.login} element={<Login />} />
              {/* <Route path={urlPaths.dashboard} element={<Dashboard />} /> */}
            </Routes>
          </BrowserRouter>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
