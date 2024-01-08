// App.tsx

import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
// import ComponentA from "./components/ComponentA";
// import ComponentB from "./components/ComponentB";
// import ComponentC from "./components/ComponentC";

const App: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<string>("Default");

  const handleButtonClick = (component: string) => {
    setSelectedComponent(component);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        onButtonClick={handleButtonClick}
        selectedComponent={selectedComponent}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Main content area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          {selectedComponent}
          {/* Conditionally render components based on the selectedComponent state */}
          {/* {selectedComponent === "componentA" && <ComponentA />}
         
         {selectedComponent === "componentB" && <ComponentB />}
          {selectedComponent === "componentC" && <ComponentC />} */}
        </main>
      </div>
    </div>
  );
};

export default App;
