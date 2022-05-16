import React from "react";
import Link from "next/link";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
const Checkout = ({ addToCart, cart, removeFromCart, subTotal }) => {
  return (
    <div className="container px-2 sm:m-auto">
      <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
      <h1 className="font-bold text-xl">1. Delivery Details</h1>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>

      <div className="px-2 w-full">
        <div className="mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">
            Address
          </label>
          <textarea
            rows={2}
            cols={10}
            type="address"
            id="address"
            name="address"
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></textarea>
          <div className="mx-auto flex my-4">
            <div className="px-2 w-1/2">
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="leading-7 text-sm text-gray-600"
                >
                  Phone
                </label>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className="mb-4">
                <label
                  htmlFor="state"
                  className="leading-7 text-sm text-gray-600"
                >
                  State
                </label>
                <input
                  type="state"
                  id="state"
                  name="state"
                  className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="leading-7 text-sm text-gray-600"
                >
                  City
                </label>
                <input
                  type="city"
                  id="city"
                  name="city"
                  className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className="mb-4">
                <label
                  htmlFor="pincode"
                  className="leading-7 text-sm text-gray-600"
                >
                  Pincode
                </label>
                <input
                  type="pincode"
                  id="pincode"
                  name="pincode"
                  className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="font-bold text-xl">2. Review Cart Items & Pay</h1>
      <div className={` z-10 sideCart bg-pink-100 p-6 m-2`}>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 font-semibold">Your cart is empty</div>
          )}
          {Object.keys(cart).map((k) => (
            <li key={k}>
              <div className="item flex my-5">
                <div className="font-semibold">{cart[k].name}</div>
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
      </div>
      <Link href={"/Checkout"}>
        <button className="flex ml-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
          <BsFillBagCheckFill className="m-1" />
          Pay Rs.{subTotal}
        </button>
      </Link>
    </div>
  );
};

export default Checkout;
