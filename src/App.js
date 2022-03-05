import styles from './css/mycssmodule.module.css'
import { Routes, Route } from "react-router-dom";
import HomeContainer from "./container/HomeContainer"
// import GetCat from './components/GetCat';
import GetProduct from './components/GetProduct';
import GetCatContainer from './container/GetCatContainer';

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="product/:id" element={<GetProduct />} />
        <Route path="/" element={<HomeContainer />} />
        <Route path="type/:cat" element={<GetCatContainer />} />
      </Routes>
    </div>
  );
}

export default App;