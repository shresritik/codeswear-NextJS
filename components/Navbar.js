import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { MdAccountCircle } from "react-icons/md";
import { BsFillBagCheckFill } from "react-icons/bs";
const Navbar = ({ addToCart, cart, removeFromCart, clearCart, subTotal }) => {
  const ref = useRef();
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 sticky top-0 z-10 bg-white shadow-md">
      <div className="logo mx-5">
        <Link href={"/"}>
          <a>
            <Image width={200} height={40} src="/logo.webp" alt="" />
          </a>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-6 font-bold md:text-xl">
          <Link href={"/Tshirts"}>
            <a>
              <li>Tshirts</li>
            </a>
          </Link>
          <Link href={"/Hoodies"}>
            <a>
              <li>Hoodies</li>
            </a>
          </Link>
          <Link href={"/Stickers"}>
            <a>
              <li>Stickers</li>
            </a>
          </Link>
          <Link href={"/Mugs"}>
            <a>
              <li>Mugs</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-0 mx-5 top-4 cursor-pointer flex">
        <Link href="/Login">
          <a>
            <MdAccountCircle className="text-xl md:text-3xl" />
          </a>
        </Link>
        <AiOutlineShoppingCart
          onClick={toggleCart}
          className="text-xl md:text-3xl"
        />
      </div>
      <div
        ref={ref}
        className={`w-72 h-[100vh] z-10 sideCart absolute top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transform ${
          Object.keys(cart).length === 0 ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 font-normal">Your cart is empty</div>
          )}
          {Object.keys(cart).map((k) => (
            <li key={k}>
              <div className="item flex my-5">
                <div className="w-2/3 font-semibold">{cart[k].name}</div>
                <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                  <AiFillMinusCircle
                    onClick={() => {
                      removeFromCart(
                        k,
                        1,
                        cart[k].name,
                        cart[k].size,
                        cart[k].variant
                      );
                    }}
                    className="cursor-pointer text-pink-500"
                  />
                  <span className="mx-2 text-sm">{cart[k].qty}</span>
                  <AiFillPlusCircle
                    onClick={() => {
                      addToCart(
                        k,
                        1,
                        cart[k].name,
                        cart[k].size,
                        cart[k].variant
                      );
                    }}
                    className="cursor-pointer text-pink-500"
                  />
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="font-bold my-2">Subtotal: Rs.{subTotal}</div>
        <div className="flex">
          <Link href={"/Checkout"}>
            <button className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
              <BsFillBagCheckFill className="m-1" />
              Checkout
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
