"use client";

import React, { useState } from "react";
import LeftMenu from "../components/LeftMenu";
import DataList from "../components/DataList";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<number | null>(null);

  return (
    <div className="flex bg-[#f3f3f3] text-black">
      <div>
        <LeftMenu />
      </div>
      <div className="w-full">
        <DataList open={open} setOpen={setOpen} id={id} setId={setId} />
      </div>
    </div>
  );
};

export default App;
