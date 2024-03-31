// AddProductForm.js
import React, { useState } from "react";
import "./AddProductPage.css";

const AddProductPage = () => {
  const [name, setproductName] = useState("");
  const [price, setproductPrice] = useState("");
  const [category, setproductCategory] = useState("");
  const [company, setproductCompany] = useState("");
  const [error, setError] = useState("");

  const handleAddProduct = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch(
      "https://e-dashboard-backend-sjgp.onrender.com/add-product",
      {
        method: "post",
        body: JSON.stringify({ name, price, category, company, userId }),
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
    result = await result.json();
    alert("Product Added");
    console.log(result);
    console.log(userId);
  };

  return (
    <form className="add-product-form">
      <h2 className="title">Add Product</h2>
      <label htmlFor="productName">Product Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setproductName(e.target.value)}
        required
      />
      {!name && error && <span>Enter the name</span>}
      <label htmlFor="productPrice">Product Price:</label>
      <input
        type="text"
        value={price}
        onChange={(e) => setproductPrice(e.target.value)}
        required
      />
      {!price && error && <span>Enter the price</span>}
      <label htmlFor="productCategory">Product Category:</label>
      <input
        type="text"
        value={category}
        onChange={(e) => setproductCategory(e.target.value)}
        required
      />
      {!category && error && <span>Enter the category</span>}
      <label htmlFor="productCompany">Product Company:</label>
      <input
        type="text"
        value={company}
        onChange={(e) => setproductCompany(e.target.value)}
        required
      />
      {!company && error && <span>Enter the company</span>}
      <button className="button" type="button" onClick={handleAddProduct}>
        Add Product
      </button>
    </form>
  );
};

export default AddProductPage;
