import { Navbar } from "./components/common/navbar/NavbarComponents";
import ItemListContainer from "./components/layout/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer data="Hellooo!!!" />
    </>
  );
}

export default App;
