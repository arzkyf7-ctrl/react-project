import React from "react";
import BasketItem from "./BasketItem";

function ItemList({ data = [], onDeleteData }) {
  return (
    <div className="item-list">
      {data.map((item) => {
        return (
          <BasketItem
            key={item.id}
            id={item.id}
            namaBarang={item.namaBarang}
            jumlah={item.jumlah}
            keterangan={item.keterangan}
            onDeleteData={onDeleteData}
          />
        );
      })}
    </div>
  );
}
export default ItemList;
