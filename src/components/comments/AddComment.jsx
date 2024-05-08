import { useState } from "react";
import { toast } from "react-toastify";
import "./add-comment.css";

const AddComment = () => {

 const [text, setText] = useState("");

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if(text.trim() === "") return toast.error("Please write something")

    console.log({ text });
    setText("");
  }

  return (
    <form onSubmit={formSubmitHandler} className="add-comment">
      <input
        type="text"
        placeholder="رقم الهاتف "
        className="add-comment-input"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="الرقم الثاني  اختياري "
        className="add-comment-input"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="الاسم واللقب"
        className="add-comment-input"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="العنوان"
        className="add-comment-input"
        value={text}
        onChange={e => setText(e.target.value)}
      />
            <input
        type="text"
        placeholder="ملاحظات او توصيات"
        className="add-comment-input"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit" className="add-comment-btn">
        Comment
      </button>
    </form>
  );
};

export default AddComment;
