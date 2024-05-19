import React from "react";

const Albums = () => {
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

  return (
    <div className="row">
      {productsArr.map((item) => (
        <div className="col-6">
          <h3>{item.title}</h3>
          <img src={item.imageUrl}></img>
          <div className="d-flex">
            <h3>{`$` + item.price}</h3>
            <button>Add to Cart</button>
          </div>
        </div>
      ))}
      <button className="w-2">See the cart</button>
    </div>
  );
};
export default Albums;
