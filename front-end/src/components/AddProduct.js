import React from 'react'

export default function AddProduct() {
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [company, setCompany] = React.useState('');
  const addProduct = async () =>{
    console.log(name, price, category, company);
  }
  return (
    <>
    <div className="container my-4">
      <h3>Add Your Product</h3>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="category"
            placeholder="Enter category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="company"
            placeholder="Enter company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <button onClick={addProduct} type="button" className="btn btn-primary">
          Add Product
        </button>
        </form>
        </div>
    </>
  )
}
