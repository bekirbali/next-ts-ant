"use client";

import React, { useRef, useState } from "react";
import { Drawer } from "antd";
import { IDrawerProps } from "../models/models";
import { dummyData } from "../utils/data";

const RightDrawer: React.FC<IDrawerProps> = ({
  open,
  setOpen,
  id,
  productName,
  setProductName,
}) => {
  const [text, setText] = useState<string>("");

  // form submit edildiğinde ürün adını değiştirmek için
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProductName(text);
  };

  // blurda ürün adını değiştirmek için
  const handleBlur = () => {
    setProductName(text);
    console.log(productName);
  };

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // inputa yazı yazarken 3 saniye sonra ürün adını otomatik değiştirmek için
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue: string = e.target.value;
    setText(inputValue);

    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setProductName(inputValue);
    }, 3000);
  };

  // drawer kapatmak için click eventi
  const handleClose = () => {
    setOpen(false);
    setText("");
  };

  return (
    <>
      <Drawer
        title={productName}
        placement="right"
        closable={true}
        closeIcon={true}
        onClose={handleClose}
        open={open}
        style={{ color: "black", backgroundColor: "#f3f3f3" }}
        width="44%"
        key="right"
      >
        {dummyData.gunluk_raporlar.map((item, index) => {
          return (
            <div key={index}>
              {item.urunler.map((urun, index) => {
                if (urun.id === id) {
                  return (
                    <div key={index}>
                      <h1>Urun Adi: {urun.urun_adi}</h1>
                      <h1>Urun Adedi: {urun.adet}</h1>
                    </div>
                  );
                }
              })}
            </div>
          );
        })}

        {/* ürün adı değiştirmek için input */}
        <form
          onSubmit={handleSubmit}
          className="border border-slate-500 p-4 rounded-md"
        >
          <label htmlFor="prodName">Urun Adi</label>
          <input
            name="prodName"
            type="text"
            value={text}
            placeholder={productName}
            onChange={handleChange}
            onBlur={handleBlur}
            className="border border-black p-2 w-full rounded-md"
          />
        </form>
      </Drawer>
    </>
  );
};

export default RightDrawer;
