import { Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar"
import { Footer } from "./components/Footer"
import { Home } from "./components/Home"
import { About } from "./components/About";

function App() {


    return (
        <>
            <NavBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App
