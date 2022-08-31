import React, { useState, useEffect } from "react";
import ProductCard from "../../core/component/ProductCard/ProductCard";
import S from "../../styles/card/card.module.scss";
import { ProductType } from "../../Types/card/cardTypes";

export default function Index() {
  const [currentProduct, setCurrentProduct] = useState<ProductType>({
    category: "",
    title: "",
    desc: "",
    price: 0,
    solded: 0,
  });
  const [loading, setLoading] = useState(true);

  async function fetchData(url: string) {
    try {
      const res = await fetch(url);

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setCurrentProduct(data[0]);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    } catch (error) {
      console.log("fetch error");
    }
  }

  useEffect(() => {
    fetchData("/data/card/data.json");
  }, []);

  return (
    <section className={S.full}>
      {loading ? (
        <h1>Loading data...</h1>
      ) : (
        <ProductCard {...currentProduct}></ProductCard>
      )}
    </section>
  );
}
