import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products", {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    });
    result = await result.json();
    setProducts(result);
  };
  // console.log("products", products); // ✅ Log here
  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    });
    result = await result.json();
    if (result) {
      getProducts();
    }
    // console.log(id)
  };

  const searchHandler = async (event) => {
    // console.log(event.target.value);
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`, {
        headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
      });
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts();
    }
  };

  return (
    <>
      <div className="product-list">
        <h3>Our Product List</h3>
        <div className="container">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Product"
              onChange={searchHandler}
            />
          </div>
        </div>
        <ul>
          <li>S. No.</li>
          <li>Name</li>
          <li>Price</li>
          <li>Category</li>
          <li>Company</li>
          <li>Operation</li>
        </ul>
        {
          products.length>0 ? products.map((item, index) => (
            <ul className="product-item" key={item._id}>
              <li>{index + 1}</li>
              <li>{item.name}</li>
              <li>$ {item.price}</li>
              <li>{item.category}</li>
              <li>{item.company}</li>
              <li>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    deleteProduct(item._id);
                  }}
                >
                  Delete
                </button>{" "}
                /
                <Link to={"/update/" + item._id}>
                  {" "}
                  <button type="button" className="btn btn-info btn-sm">
                    Update
                  </button>
                </Link>
              </li>
            </ul>
          )) : 
          (<h3>No Result Found</h3>)
        }
      </div>
    </>
  );
}
