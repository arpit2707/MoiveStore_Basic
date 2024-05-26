import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { Cartctx } from "../store/CartContext";
import Banner from "./Banner";

const Albums = (props) => {
  const ctx = useContext(Cartctx);
  const { addToCart, items } = ctx;
  const [load, setLoad] = useState(false);
  const [title, setTitle] = useState("");
  const [txxt, setTxxt] = useState("");
  const [dater, setDateR] = useState("");
  const intervalRef = useRef(null);
  const setLoader = (se) => {
    setLoad(se);
  };
  console.log(props);
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
  const movies = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const dta = await res.json();
      setLoad(false);
      clearInterval(intervalRef.current);
      console.log("RES", dta);
    } catch (error) {
      console.log(error);
      throw new Error("Something Went wrong retrying");
      intervalRef.current = setInterval(() => {
        movies();
      }, 5000);
    }
  }, []);
  useEffect(() => {
    movies();
  }, []);
  return (
    <div className="container row align-center ms-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(title, txxt, dater);
        }}
      >
        <label>Title</label>
        <input onChange={(e) => setTitle(e.target.value)}></input>
        <label>Opening Text</label>
        <input onChange={(e) => setTxxt(e.target.value)}></input>
        <label>Release Date</label>
        <input onChange={(e) => setDateR(e.target.value)}></input>
        <button>ADD Movie</button>
      </form>
      {load && (
        <div className="position-absolute z-10 w-full h-full">Loader</div>
      )}
      <Banner />
      <button
        onClick={() => {
          setLoad(true);
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
export default React.memo(Albums);
