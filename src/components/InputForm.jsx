import React from "react";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      namaBarang: "",
      jumlah: "",
      keterangan: "",
    };
    this.onChangeNamaBarang = this.onChangeNamaBarang.bind(this);
    this.onChangeJumlah = this.onChangeJumlah.bind(this);
    this.onChangeKeterangan = this.onChangeKeterangan.bind(this);
  }
  onChangeNamaBarang = (event) => {
    this.setState(() => {
      return {
        namaBarang: event.target.value,
      };
    });
  };
  onChangeJumlah = (event) => {
    this.setState(() => {
      return {
        jumlah: event.target.value,
      };
    });
  };
  onChangeKeterangan = (event) => {
    this.setState(() => {
      return {
        keterangan: event.target.value,
      };
    });
  };
  onSubmitForm = (event) => {
    event.preventDefault();
    const { namaBarang, jumlah, keterangan } = this.state;
    if (namaBarang === "" || jumlah === "" || keterangan === "") {
      alert("Semua field harus diisi!");
      return;
    }
    this.props.onAddData(namaBarang, jumlah, keterangan);
    this.setState(() => {
      return {
        namaBarang: "",
        jumlah: "",
        keterangan: "",
      };
    });
  };
  render() {
    return (
      <form className="input-form" onSubmit={this.onSubmitForm}>
        <input
          type="text"
          placeholder="Nama Barang"
          value={this.state.namaBarang}
          onChange={this.onChangeNamaBarang}
        />
        <input
          type="number"
          placeholder="Jumlah"
          value={this.state.jumlah}
          onChange={this.onChangeJumlah}
        />
        <input
          type="text"
          placeholder="Keterangan"
          value={this.state.keterangan}
          onChange={this.onChangeKeterangan}
        />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}
export default InputForm;
