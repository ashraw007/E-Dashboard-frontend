// AddProductForm.js
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./UpdateProductPage.css";

const UpdateProductPage = () => {
  const [name, setproductName] = useState("");
  const [price, setproductPrice] = useState("");
  const [category, setproductCategory] = useState("");
  const [company, setproductCompany] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  });

  const getProductDetails = async () => {
    let result = await fetch(
      `https://e-dashboard-backend-sjgp.onrender.com/product/${params.id}`,
      {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
    result = await result.json();
    setproductName(result.name);
    setproductPrice(result.price);
    setproductCategory(result.category);
    setproductCompany(result.company);
  };

  const updateProduct = async () => {
    let result = await fetch(
      `https://e-dashboard-backend-sjgp.onrender.com/product/${params.id}`,
      {
        method: "put",
        body: JSON.stringify({ name, price, category, company }),
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
    result = await result.json();
    if (result) {
      navigate("/");
    }
  };

  return (
    <form className="add-product-form">
      <h2 className="title">Update Product</h2>
      <label htmlFor="productName">Product Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setproductName(e.target.value)}
        required
      />
      <label htmlFor="productPrice">Product Price:</label>
      <input
        type="text"
        value={price}
        onChange={(e) => setproductPrice(e.target.value)}
        required
      />
      <label htmlFor="productCategory">Product Category:</label>
      <input
        type="text"
        value={category}
        onChange={(e) => setproductCategory(e.target.value)}
        required
      />
      <label htmlFor="productCompany">Product Company:</label>
      <input
        type="text"
        value={company}
        onChange={(e) => setproductCompany(e.target.value)}
        required
      />
      <button className="button" type="button" onClick={updateProduct}>
        Update Product
      </button>
    </form>
  );
};

export default UpdateProductPage;
