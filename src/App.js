import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Aside from "./components/aside";
function App() {
  return (
    <>
      <Router>
        <div className="flex ">
          <div className="bg-white w-72 ">
            <Sidebar />
          </div>

          <div className="bg-slate-100 grow p-6">
     <Aside />  
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
