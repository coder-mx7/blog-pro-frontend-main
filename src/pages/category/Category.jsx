import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PostList from "../../components/posts/PostList";
import "./category.css";
import { useDispatch, useSelector } from "react-redux";
import { getpostcategorts } from "../../redux/apicalls/postApiCalls";
const Category = () => {
    const { category } = useParams();
    const Dispatch = useDispatch();
    
    const { postcate } = useSelector((state) => state.post);
    useEffect(() => {
      Dispatch(getpostcategorts(category));
      window.scrollTo(0, 0);
    }, []);
    return ( 
    <div className="category">
        <h1 className="category-title">Product based on {category}</h1>
        <PostList posts={postcate?.data} />
    </div> );
}
 
export default Category;