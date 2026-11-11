import React from "react";

function BasketBody({ namaBarang, jumlah, keterangan }) {
  return (
    <div className="basket-body">
      <p className="nama-barang">{namaBarang}</p>
      <p className="jumlah-barang">{jumlah}</p>
      <p className="keterangan">{keterangan}</p>
    </div>
  );
}
export default BasketBody;
