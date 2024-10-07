import { Navbar } from "./components/common/navbar/NavbarComponents";
import ItemListContainer from "./components/layout/ItemListContainer";
import "./styles.css";

function App() {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="item-list-container">
        <ItemListContainer props="Bienvenido a e-commerce" />
      </div>
    </>
  );
}

export default App;
