import axios from "axios";
import { useEffect, useState } from "react";
import Rating from "react-rating";

export function MainMenu(props) {
  const [products, setProducts] = useState(null);

  function insertNewProd() {
    setProducts([
      ...products,
      {
        thumbnail: "",
        title: "Producto de prueba",
        rating: 3,
        description: "Esto es una descripción",
        price: 7,
        discountPercentage: 15,
      },
    ]);
  }

  useEffect(() => {
    const productsAxios = axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data.products);
      });
  }, []);

  return (
    <>
      <div class="card">
        <h5 class="card-header display-3">
          My Products (User: {props.user.username})
        </h5>
        <div class="card-body">
          <h5 class="card-title display-5">Buy your products here!</h5>
          <div className="row">
            <button onClick={insertNewProd}> insertar nuevo producto</button>
          </div>
          <div className="products d-flex flex-wrap">
            {products &&
              products.map((product, index) => (
                <div class="card" style={{ width: "25%", height: "30vw" }}>
                  <img src={product.thumbnail} class="card-img-top" />
                  <div class="card-body" style={{ overflowY: "scroll" }}>
                    <h5 class="card-title">{product.title}</h5>
                    <Rating initialRating={product.rating} readonly="true" />
                    <p class="card-text">{product.description}</p>
                    <button type="button" class="btn btn-info">
                      {product.price}€ ({product.discountPercentage}% OFF)
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
