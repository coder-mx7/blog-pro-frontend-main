import "./admin-table.css";
import AdminSidebar from "./AdminSidebar";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  deletedproduct, getposts } from "../../redux/apicalls/postApiCalls";
import { useNavigate } from "react-router-dom";

const PostsTable = () => {


  let { posts } = useSelector((state) => state.post);
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(getposts());
  }, []); // تمرير مصفوفة فارغة كثاني معلم
  console.log(posts)
  const Nav = useNavigate(); // From Submit Handler

   // Delete Post Handler
   function  deletePostHandler(id)  {
    swal({
      title: "Are you sure?لي نا ",
      text: "Once deleted, you will not be able to recover this post!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
      Dispatch(deletedproduct(id));



        swal("Post has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Something went wrong!");
      }
    });
  };

  return (
    <div className="table-container">
      <AdminSidebar />
      <div className="table-wrapper">
        <h1 className="table-title">Posts</h1>
        <table className="table">
          <thead>
            <tr>
              <th>رقم</th>
              <th>اسم حساب الناشر </th>
              <th>عنوان المنتج</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((item, index) => (
              <tr key={item?._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="table-image">
                    <img
                      src="/images/user-avatar.png"
                      alt=""
                      className="table-user-image"
                    />
                    <span className="table-username">{item?.user?.username}</span>
                  </div>
                </td>
                <td>
                  <b>{item?.title}</b>
                </td>
                <td>
                  <div className="table-button-group">
                    <button>
                      <Link to={`/posts/details/${item?.id}`}>View Post</Link>
                    </button>
                    <button 
                    id="btnDeleted" 
                    onClick={() => deletePostHandler(item._id)}
                    >Delete Post
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostsTable;
