import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutAdmin from "../pages/LayoutAdmin/LayoutAdmin";
import LayoutCLient from "../pages/LayoutClient/LayoutCLient";
import CreateTest from "../pages/CreateTest/CreateTest";
import StartGame from "../pages/StartGame/StartGame";
import { MiKahootProvider } from "../context";

const RoutesKahoot = () => {
    return (
        <BrowserRouter>
            <MiKahootProvider>
                <Routes>
                    <Route path="/" element={<LayoutAdmin />} />
                    <Route path="/create" element={<CreateTest />} />
                    <Route path="/game/:codigo" element={<LayoutCLient />} />
                    <Route path="/game/:codigo/start" element={<StartGame />} />
                </Routes>
            </MiKahootProvider>

        </BrowserRouter>

    );
}

export default RoutesKahoot;