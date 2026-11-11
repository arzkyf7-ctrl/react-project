import React from "react";
import getData from "../utils/data";
import ItemList from "./ItemList";
import InputForm from "./InputForm";

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getData(),
    };
  }
  onDeleteData = (id) => {
    const data = this.state.data.filter((item) => item.id !== id);
    this.setState({ data });
  };
  onAddData = (namaBarang, jumlah, keterangan) => {
    const id = this.state.data.length + 1;
    const newData = {
      id,
      namaBarang,
      jumlah,
      keterangan,
    };
    this.setState((prevState) => ({
      data: [...prevState.data, newData],
    }));
  };
  render() {
    return (
      <div className="basket">
        <h1>Keranjang Belanja</h1>
        <InputForm onAddData={this.onAddData} />
        <ItemList data={this.state.data} onDeleteData={this.onDeleteData} />
      </div>
    );
  }
}
export default Basket;
