import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateProduct() {
const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() =>{
    getProductDetails();
  }, []);

  const getProductDetails = async () =>{
    console.log(params);
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    });
    result = await result.json();
    setName(result.name);
    setCategory(result.category);
    setPrice(result.price);
    setCompany(result.company);
  }

  const updateProduct = async () => {
    // console.log(name, price, category, company);
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({name, price, category, company}),
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    });
    result = await result.json();
    navigate("/");
    // console.log(result);
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
          <button
            onClick={updateProduct}
            type="button"
            className="btn btn-primary"
          >
            Update Product
          </button>
        </form>
      </div>
    </>
  );
}
