import React from "react";

export default function AddProduct() {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [error, setError] = React.useState(false);

  const addProduct = async () => {
    // console.log(name, price, category, company);
    // console.log(!name)
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    console.log(userId);
    let result = await fetch("http://localhost:5000/add-product", {
      method: "POST",
      body: JSON.stringify({ name, price, category, userId, company }),
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    });
    result = await result.json();
    localStorage.setItem("product", JSON.stringify(result));
    console.log(result);
  };
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
            {error && !name && <span className="error-msg">Enter valid name</span>}
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
            {error && !price && <span className="error-msg">Enter valid name</span>}
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
            {error && !category && <span className="error-msg">Enter valid name</span>}
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
            {error && !company && <span className="error-msg">Enter valid name</span>}
          </div>
          <button
            onClick={addProduct}
            type="button"
            className="btn btn-primary"
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}
