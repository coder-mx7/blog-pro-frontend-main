import { Link } from "react-router-dom";

const PostItem = ({post}) => {
  console.log(post?._id);
  return (
    <div dir="rtl" className="post-item">
      <div className="post-item-image-wrapper">
      <Link className="post-item-category " to={`/posts/categories/${post?.category}`}>{post?.category}</Link>

        <img src={post?.image?.url} alt="" className="post-itme-image" />
      </div>
      <div className="post-item-info-wrapper">
        <div className="post-item-details">
          <h5 className="post-item-title">{post?.title}</h5>
        </div>
        <div className="post-item-pric">
          <h5 className="post-item-pricReal">{post?.pricReal}</h5>
          <h5 className="post-item-pricFake">{post?.pricFake}</h5>
        </div>
        <p className="post-item-description">
          {post?.description}
        </p>
        <div className="flex">
        <Link className="post-item-link" to={`/posts/details/${post?._id}`}>
          اطلب الان
        </Link>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
