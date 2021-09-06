import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import axios from "axios";
import { add } from "./imagesSlice";
const Images = () => {
  const [limit, setlimit] = useState(5);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `https://fakestoreapi.com/products?limit=${limit}`
      );
      dispatch(add(data.data));
    };
    fetchData();
  }, [limit]);
  const images = useSelector((state: RootState) => state.images);

  return images.length === 0 ? (
    <h1>Fetching</h1>
  ) : (
    <div>
      <button
        onClick={() => {
          setlimit(limit + 3);
        }}
      >
        Fetch more
      </button>
      {images.map((image, index) => (
        <img src={image.image} />
      ))}
    </div>
  );
};

export default Images;
