// App.tsx

import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import CashFreeDashboard from "./components/CashFree/CashFreeDashboard";

// import ComponentA from "./components/ComponentA";
// import ComponentB from "./components/ComponentB";
// import ComponentC from "./components/ComponentC";

const App: React.FC = () => {
  const [selectedComponent, setSelectedComponent] =
    useState<string>("Payments");

  const handleButtonClick = (component: string) => {
    setSelectedComponent(component);
  };

  return (
    <div className="flex font-inter h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        onButtonClick={handleButtonClick}
        selectedComponent={selectedComponent}
      />

      <div className="flex-1  flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Main content area */}
        <main className="flex-1 overflow-x-hidden p-5 overflow-y-auto bg-gray-200">
          {/* {selectedComponent} */}
          <CashFreeDashboard />
        </main>
      </div>
    </div>
  );
};

export default App;
