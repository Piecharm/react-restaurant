import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Menu from "./components/Menu";

function App() {
    return (
        <BrowserRouter>
            <div className="bg-[#dfd9d9]">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}>
                        Home
                    </Route>
                    <Route path="/menu" element={<Menu />}>
                        Menu
                    </Route>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
