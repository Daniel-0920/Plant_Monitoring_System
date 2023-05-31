import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header"
import { Fruits } from "./page/Fruits/Fruits";
import { Main } from "./page/Main/Main";
import { Row } from "./page/Row/Row";
import { Tree } from "./page/Tree/Tree"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='row' element={<Row />} />
        <Route path="/row/tree" element={<Tree />} />
        <Route path="/fruits" element={<Fruits />} />

      </Routes>
    </>

  );
}

export default App;
