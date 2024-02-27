import React, { useState } from "react";
import Home from "./pages/Home/Home";
import { Loader } from "./components/Loader/Loader";

function App() {
  const [loaderFinished, setLoaderFinished] = useState(false);

  return (
    <main>
      {!loaderFinished && <Loader setLoaderFinished={setLoaderFinished} />}
      <Home />
    </main>
  );
}

export default App;
