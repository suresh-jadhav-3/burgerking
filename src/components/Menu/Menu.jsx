import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from '../../context/CartContext';

const Menu = () => {
  const { AddToCart } = useCart();

  const products = [
    { id: 1, img: "https://i0.wp.com/rhubarbandcod.com/wp-content/uploads/2022/06/The-Classic-Cheeseburger-1.jpg?fit=665%2C475&ssl=1", name: "Classic Cheeseburger", price: 199 },
    { id: 2, img: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_375,h_282/k%2FPhoto%2FRecipes%2F2022-03_bacon-cheeseburger%2F2022-03-16_ATK-0561", name: "Bacon Cheeseburger", price: 499 },
    { id: 3, img: "https://media.istockphoto.com/id/539659420/photo/mushroom-swiss-burger.jpg?s=612x612&w=0&k=20&c=jMNa1F6VJmUGvDafmgumvBqtWvFhyIPdgmvcxGKHWiM=", name: "Mushroom Swiss Burger", price: 499 },
    { id: 4, img: "https://overthefirecooking.com/wp-content/uploads/2024/05/Cover-Image-1024x1536.jpg", name: "BBQ Bacon Burger", price: 499 },
    { id: 5, img: "https://carmyy.com/wp-content/uploads/2023/01/Avocado-Burger-1-1024x1536.jpg", name: "Avocado Burger", price: 499 },
    { id: 6, img: "https://www.savoryonline.com/app/uploads/recipes/155472/double-stack-diner-burger-640x640-c-center.jpg", name: ". Double Stacked Burger", price: 299 },
    { id: 8, img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/5/5/0/FNM_060115-Truffle-Burger-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1431449537294.webp", name: " The Truffle Burger", price: 299 },
    { id: 9, img: "https://www.closetcooking.com/wp-content/uploads/2021/08/Korean-BBQ-Burgers-1200-7411.jpg", name: "The Korean BBQ Burger", price: 299 },
    { id: 10, img: "https://images.themodernproper.com/billowy-turkey/production/posts/2018/Mediterranean-Turkey-Burger-with-Tzatziki-5.jpg?w=400&q=82&auto=format&fit=crop&dm=1609855651&s=377c1325c14bc4754cddc91d92d73196", name: "The Mediterranean Burger", price: 299 },
    { id: 11, img: "https://vivaciousgourmet.com/wp-content/uploads/2021/04/Aloha-Hawaiian-Burger-902x1024.jpg", name: "Hawaiian Burger", price: 299 },
    { id: 12, img: "https://stephenlarosa.co/wp-content/uploads/2021/07/Breakfast-Burger.blog-1-600x450.jpg", name: "Breakfast Burger", price: 299 },
    { id: 13, img: "https://www.jocooks.com/wp-content/uploads/2016/06/greek-lamb-burgers-1.jpg", name: "Mediterranean Lamb Burger", price: 299 },
    { id: 14, img: "https://culinarybadasskevin.com/wp-content/uploads/2023/01/Asian-Fusion-Umami-Explosion-Burger.jpg", name: "Asian Fusion Burger", price: 299 },
    { id: 15, img: "https://iamhomesteader.com/wp-content/uploads/2024/02/grilled-cheese-burger-6-800x760.jpg", name: "Gourmet Grilled Cheese Burger", price: 299 },
    { id: 16, img: "https://lakegenevacountrymeats.com/wp-content/uploads/Cajun-Shrimp-Burger-1.jpg", name: "Cajun Shrimp Burger", price: 299 },
    { id: 17, img: "https://thesaucemag.com/wp-content/uploads/2023/04/buger-and-lobster-katsu-lobster-roll-review-1.jpg.webp", name: " Lobster Roll Burger", price: 299 },
    { id: 18, img: "https://cdn.loveandlemons.com/wp-content/uploads/2019/06/portabello-mushroom-burger-808x1024.jpg", name: "Portobello Mushroom Burger", price: 299 },
    { id: 19, img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/6/2/0/KC1311H_BBQ-pork-sandwich-with-plantain-chips_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1496430278942.webp", name: "Hawaiian Luau Burger", price: 299 },
    { id: 20, img: "https://assets.surlatable.com/m/410f071541b5a939/72_dpi_webp-MediterraneanVeggieBurger_1_A.jpg", name: "Mediterranean Veggie Burger", price: 299 },


  ];

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="my-4 text-3xl font-bold text-gray-900">Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  ">
            {products.map((product) => (
              <div key={product.id} className="   bg-white rounded-lg overflow-hidden shadow-2xl hover:scale-105 hover:shadow-xl transition-all   duration-100">
                <img src={product.img} alt={product.name} className="w-full  h-52 object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-4">₹{product.price.toFixed(2)}</p>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                    onClick={() => AddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;