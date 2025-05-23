import React from "react";
import Navbar from "./General/Navbar";
import Content from "./General/Content";
import { useState } from "react";

function App() {

  const [tab, setTab] = useState("Home");

  const TabChangeHandler = (selectedTab) => {
    setTab(selectedTab);
  };

  return (
    <div>
      <Navbar onTabClicked={TabChangeHandler} Underline={tab}/>
      <Content currentTab={tab}/>
    </div>
  );
}

export default App;
