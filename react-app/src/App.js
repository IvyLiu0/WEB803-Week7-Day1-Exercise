import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import BarChart from "./animated-bar-chart-using-react-move/src/BarChart";
// import Vertex from "./react-vertex-sphere-of-spheres/src/index";
import App2 from "./collapsible-tree-w-vx//src/Tree";
import data from "./collapsible-tree-w-vx/src/data";

// function App() {
//   return (
//     <div>
//       <BarChart />
//       <App2 data={data} width={600} height={500} />
//       {/* <Vertex /> */}
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Week7Day1-Exercise</p>

        <ul>
          <li>
            <a href="/animated">BarChart</a>
          </li>
          <li>
            <a href="/collapsible">Tree</a>
          </li>
          <li>
            <a href="/vertex">Sphere</a>
          </li>
        </ul>

        <Router>
          <Routes>
            <Route path="/animated" element={<BarChart />} />
            <Route
              path="/collapsible"
              element={<App2 data={data} width={600} height={500} />}
            />
            {/* <Route path="/vertex" element={<Vertex />} /> */}
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
