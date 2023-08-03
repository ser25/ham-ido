import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./page/Home.tsx";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/*<Route path="/s" element={<Home />}/>*/}
          {/*<Route path="*" element={<NotFound />}/>*/}
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
