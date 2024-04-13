import "./posts-page.css";
import { useEffect } from "react";
import PostList from "../../components/posts/PostList";
import Sidebar from "../../components/sidebar/Sidebar";
import Pagination from "../../components/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getposts } from "../../redux/apicalls/postApiCalls";
const PostsPage = () => {
  const Dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {

    Dispatch(getposts());
    window.scrollTo(0, 0);
  }, []); 


  return (
    <>
      <section className="posts-page">
        <PostList posts={posts} />
        <Sidebar />
      </section>
      <Pagination />
    </>
  );
};

export default PostsPage;
