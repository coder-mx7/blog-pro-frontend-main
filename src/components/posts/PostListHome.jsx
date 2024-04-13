import "./posts.css";
import PostItemHome from "./PostItehome";

const PostListHome = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map((item) => (
        <PostItemHome key={item._id} post={item} />
      ))}
    </div>
  );
};

export default PostListHome;
