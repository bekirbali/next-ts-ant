import React, { useState } from "react";
import { dummyData } from "../utils/data";
import { IDataProps } from "../models/models";
import RightDrawer from "./RightDrawer";

const DataList: React.FC<IDataProps> = ({ open, setOpen, id, setId }) => {
  const [productName, setProductName] = useState<string>("");

  const clickHandler = (id: number, name: string) => {
    setId(id);
    console.log(id);
    setProductName(name);
    setOpen(true);
  };

  return (
    <div className={`flex flex-col ${open ? "w-1/2" : "w-full"} `}>
      <div className="text-center flex justify-center items-center gap-4">
        <h1>Tasks</h1>
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-400 p-2 rounded-md"
        />
        <button className="p-3 bg-slate-700 rounded-md text-white">
          + New Task
        </button>
      </div>
      <div className={`flex flex-col w-full`}>
        {dummyData.gunluk_raporlar.map((item, index) => {
          return (
            <div key={index} className="w-full p-4">
              <h1 className="cursor-default text-center font-bold text-2xl">
                Toplam Satis: {item.toplam_satis}
              </h1>
              <ul className="flex flex-col gap-4 font-semibold">
                {item.urunler.map((urun, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => clickHandler(urun.id, urun.urun_adi)}
                      className="cursor-pointer border-b flex justify-between"
                    >
                      <span>Urun Adi: {urun.urun_adi}</span> --{" "}
                      <span>Urun Adedi: {urun.adet}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <>
        <RightDrawer
          open={open}
          setOpen={setOpen}
          id={id}
          productName={productName}
          setProductName={setProductName}
        />
      </>
    </div>
  );
};

export default DataList;
