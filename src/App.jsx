import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import { AppContext } from "./utils/ContextApi";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/search" exact element={<SearchResult />} />
                <Route path="*" exact element={<h1 className="text-center text-2xl flex items-center justify-center bg-black text-white h-screen">Oops! The page you are looking for cannot be found</h1>} />
            </Routes>
        </Router>
    )
}

export default App;
