import React from "react";
import BasketBody from "./BasketBody";
import DeleteButton from "./DeleteButton";

function BasketItem({ id, namaBarang, jumlah, keterangan, onDeleteData }) {
  return (
    <div className="basket-item">
      <BasketBody
        namaBarang={namaBarang}
        jumlah={jumlah}
        keterangan={keterangan}
      />
      <DeleteButton id={id} onDeleteData={onDeleteData} />
    </div>
  );
}
export default BasketItem;
