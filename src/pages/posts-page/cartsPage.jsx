import { Link } from "react-router-dom";
import "./posts-page.css";
import "./cart.css";

// import { posts } from "../../dummyData";
// import { useEffect } from "react";
// import PostList from "../../components/posts/PostList";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Pagination from "../../components/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../images/home-bg.jpg"
// import { getposts } from "../../redux/apicalls/postApiCalls";
// import { postaction } from "../../redux/slices/postsSlices";
const CartPage = () => {
  const dispatch = useDispatch();

  return  (

    <>
      <section className="cart">
        <h1 className="cart-title">سله التسوق</h1>
        <div className="cart-wrapper">
          <div className="cart-items">
            
              <div key={1} className="cart-item">
                <div className="cart-item-img-wrapper">
                  <img
                    className="cart-item-img"
                    src={logo}
                    alt="dsfsdfs"
                  />
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-title">kjnknknk</div>
                  <div className="cart-item-quantity">
                    الکمیه:
                    <span>3</span>
                  </div>
                  <div className="cart-item-price">
                    السعر:
                    <span> 20</span>
                  </div>
                  <i
                    // onClick={() => dispatch(removeFromCart(item.id))}
                    className="bi bi-trash fill cart-item-delete-icon"
                  ></i>
                </div>
              </div>
          
          </div>
          <div className="cart-summary">
            <div className="cart-summary-text">
              <i className="bi bi-check-circle-fill"></i>
              جزء من طلبك مؤهل للشحن المجاني. قم بتحدید هذا الخیار عند دفع
              التفاصیل
            </div>
          
            <button className="cart-summary-btn">تابع عملیات الشراء</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
