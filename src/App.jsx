import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import CreateCard from "./pages/CreateCard";
import EditCard from "./pages/EditCard";
import AvinashTallapaneni from "./components/AvinashTallapaneni";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/create" element={<CreateCard />} />
        <Route path="/edit/:id" element={<EditCard />} />
      </Routes>
      <AvinashTallapaneni />
    </div>
  );
}

export default App;
