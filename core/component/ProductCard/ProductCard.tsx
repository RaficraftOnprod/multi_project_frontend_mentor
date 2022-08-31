import React, { SVGProps, useEffect, useState } from "react";
import Image from "next/image";
import desktop_img from "../../../public/assets/card/image-product-desktop.jpg";
import S from "./ProductCard.module.scss";
import { ProductType } from "../../../Types/card/cardTypes";

export default function ProductCard({
  category,
  title,
  desc,
  price,
  solded,
}: ProductType) {
  function handleClick() {
    alert("add to cart");
  }

  return (
    <div className={S.productCard}>
      <div className={S.container_img}>
        <Image
          src={desktop_img}
          alt="product"
          width={desktop_img.width}
          height={desktop_img.height}
        />
      </div>

      <article>
        <h2>{category}</h2>
        <h1>{title}</h1>
        <p className={S.description}>{desc}</p>
        <div className={S.container_price}>
          <p className={S.price}>${price}</p>
          <p className={S.solded}>${solded}</p>
        </div>
        <button type="button" name="add_cart" onClick={handleClick}>
          <span>
            <CartIcon />
            <p>Add to Cart</p>
          </span>
        </button>
      </article>
    </div>
  );
}

export function CartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <title>SVG Cart Icon</title>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm-8 2a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"
      ></path>
    </svg>
  );
}
