import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductPage.css";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("https://e-dashboard-backend-sjgp.onrender.com/", {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id) => {
    let deleteItem = await fetch(`http://localhost:5000/product/${id}`, {
      method: "delete",
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    deleteItem = await deleteItem.json();
    if (deleteItem) {
      alert("product deleted");
      getProducts();
    }
  };

  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`, {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
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
    <div className="table-container">
      <h1>
        <center>Product Information</center>
      </h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={searchHandle}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          boxSizing: "border-box",
          marginBottom: "50px",
        }}
      />
      <table className="responsive-table">
        <thead>
          <tr>
            <th>Product No</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Category</th>
            <th>Product Company</th>
            <th>Delete Record</th>
            <th>Update Record</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.company}</td>
                <td>
                  <button
                    onClick={() => deleteProduct(item._id)}
                    style={{ backgroundColor: "red" }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button style={{ backgroundColor: "#0056b3" }}>
                    <Link
                      to={"/update/" + item._id}
                      className="nav-link"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Update
                    </Link>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <h3 style={{ textAlign: "center" }}>No Result Found</h3>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductPage;
