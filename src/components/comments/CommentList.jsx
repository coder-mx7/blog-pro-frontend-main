import { useState } from "react";
import "./comment-list.css";
import UpdateCommentModal from "./UpdateCommentModal";
import swal from "sweetalert";
import { formatDistanceToNow } from 'date-fns';
import { ar } from 'date-fns/locale'; // إذا كنت تريد استخدام التواريخ باللغة العربية

const CommentList = ({comments}) => {
  const [updateComment, setUpdateComment] = useState(false);

  // Delete Comment Handler
  const deleteCommentHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this comment!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("comment has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Something went wrong!");
      }
    });
  };

  return (

    <div className="comment-list">
      <h4 className="comment-list-count">تقيمات المنتج ({comments?.length}) </h4>
      {comments?.map((comment) => (
        
        <div key={comment?._id} className="comment-item">
          <div className="comment-item-info">
            <div className="comment-item-user-info">
              <img
                src="/images/user-avatar.png"
                alt=""
                className="comment-item-user-photo"
              />
              <span className="comment-item-username"> {comment?.username} </span>
            </div>
            {/* <div className="comment-item-time">{formatDistanceToNow(new Date(comment?.createdAt), { locale: ar })}</div> */}
          </div>
          <p className="comment-item-text">{comment?.text}</p>
          <div className="comment-item-icon-wrapper">
            <i
              onClick={() => setUpdateComment(true)}
              className="bi bi-pencil-square"
            ></i>
            <i onClick={deleteCommentHandler} className="bi bi-trash-fill"></i>
          </div>
        </div>
      ))}
      {updateComment && (
        <UpdateCommentModal setUpdateComment={setUpdateComment} />
      )}
    </div>
  );
};

export default CommentList;
