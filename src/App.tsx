import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";

function App() {
  return(
     <aside className="bg-bg-primary">
     <NavBar
     title="Parceros FOOD"/>
     <main>
      <Outlet/>
     </main>
    
     </aside>)
}

export default App;
