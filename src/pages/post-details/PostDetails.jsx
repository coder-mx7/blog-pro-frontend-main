import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AddComment from "../../components/comments/AddComment";
import CommentList from "../../components/comments/CommentList";
import "./post-details.css";
import UpdatePostModal from "./UpdatePostModal";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { deletedproduct, getpostbyid } from "../../redux/apicalls/postApiCalls";
import { useDispatch, useSelector } from "react-redux";

const PostDetails = () => {
  const { id } = useParams();
  
  const [updatePost, setUpdatePost] = useState(false);
  const [file, setFile] = useState(null);
  
  const { post } = useSelector((state) => state.post);
  const Dispatch = useDispatch();
  
  useEffect(() => {
    Dispatch(getpostbyid(id));
    window.scrollTo(0, 0);
  },[])

  // Update Image Submit Handler
  const updateImageSubmitHandler = (e) => {
    e.preventDefault();
    !file ? toast.success("يتم الان رفع الصورة في الموقع ") : toast.warning("لم تقدم باختيار أي صورة")

    console.log("image uploaded successfully")
  }

  // Delete Post Handler
  const deletePostHandlerpost = () => {
    swal({
      title: "Are you sure? نكمها لقحبة ",
      text: "Once deleted, you will not be able to recover this post!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        Dispatch(deletedproduct(id));
        swal("post has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Something went wrong!");
      }
    });
  };
  return (
    <div className="post-details">
      <div className="contenardetails">
        
      <div className="post-details-image-wrapper">
        <img src={file ? URL.createObjectURL(file) : post?.image?.url} alt="" className="post-details-image" />
        <form onSubmit={updateImageSubmitHandler} className="update-post-image-form">
          <label className="update-post-image" htmlFor="file">
            <i className="bi bi-image-fill"></i> select new image
          </label>
          <input
            style={{ display: "none" }}
            type="file"
            name="file"
            id="file"
            onChange={e => setFile(e.target.files[0])}
          />
          <button type="submit">upload</button>
        </form>
      </div>
      <h1 className="post-details-title">{post?.title}</h1>
      <div className="post-details-user-info">
        <img src={post?.user?.image} alt="" className="post-details-user-image" />
        <div className="post-details-user">
          <strong>
            <Link to="/profile/1">{post?.user?.username}</Link>
          </strong>
          <span>{post?.createdAt}</span>
          <div className="post-itme-date">
            {new Date(post?.createdAt).toDateString()}
          </div>
        </div>
      </div>
      <p className="post-details-description">
        {post?.description} 
      </p>
      <div className="post-details-icon-wrapper">
        <div>
        <i class="bi bi-suit-heart-fill"></i>
          <small>{post?.likes?.length} اعجابات</small>
        </div>
        <div>
          <i
            onClick={() => setUpdatePost(true)}
            className="bi bi-pencil-square"
          ></i>
          <i onClick={deletePostHandlerpost} className="bi bi-trash-fill"></i>
        </div>
      </div>
      <AddComment />
      
      </div>
      <CommentList comments={post?.comments} />
      {updatePost && (
        <UpdatePostModal post={post} setUpdatePost={setUpdatePost} />
      )}
    </div>
  );
};

export default PostDetails;
