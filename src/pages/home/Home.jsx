import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";
import "./home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getposts } from "../../redux/apicalls/postApiCalls";
import PostListHome from "../../components/posts/PostListHome";
const Home = () => {
  const { posts } = useSelector((state) => state.post);
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(getposts());
  }, []); // تمرير مصفوفة فارغة كثاني معلم
  
  return (

    <section className="home">
      <div className="home-hearo-header">
        <div className="home-hero-header-layout">
        </div>
      </div>
      <div className="home-container">
        {/* <Sidebar /> */}
      <div className="home-latest-post">اخر منتجاتنا</div>
        <PostListHome posts={posts} />
      </div>
      <div className="home-see-posts-link">
        <Link className="home-link" to="/posts">
          See All Posts
        </Link>
      </div>
    </section>
  );
};

export default Home;
