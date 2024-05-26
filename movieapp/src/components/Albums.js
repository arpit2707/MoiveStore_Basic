import React, { useContext } from "react";
import { Cartctx } from "../store/CartContext";
import Banner from "./Banner";

const Albums = (props) => {
  const ctx = useContext(Cartctx);
  const { addToCart, items } = ctx;
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  const movies = async () => {
    try {
      const res = await fetch("https://swapi.dve/api/films/");
      const dta = await res.json();
      console.log("RES", dta);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container row align-center ms-5">
      <Banner />
      <button
        onClick={() => {
          movies();
        }}
      >
        Fetch Movies
      </button>
      <table className="text-center ">
        {productsArr &&
          productsArr.map((item, index) => (
            // <div className="col-6">

            <tr className="border-bottom mb-3 border-black border-2">
              <th>16 , June</th>
              <th>{item.title}</th>
              <th>{`$` + item.price}</th>
              <th>
                <button
                  className="btn-success"
                  onClick={() => {
                    addToCart({
                      id: index + 1,
                      title: item.title,
                      image: item.imageUrl,
                      price: item.price,
                    });
                  }}
                >
                  Add to Cart
                </button>
              </th>
            </tr>
          ))}
        <button className="w-2">See the cart</button>
      </table>
    </div>
  );
};
export default Albums;
