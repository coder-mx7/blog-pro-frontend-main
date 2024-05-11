import "./create-post.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createposte } from "../../redux/apicalls/postApiCalls";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [pricReal, setpricReal] = useState("");
  const [priceFake, setpriceFake] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const Dispatch = useDispatch();
  const { loanding, isPostCreatedd } = useSelector((state) => state.post);
  const Nav = useNavigate(); // From Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "")
      return toast.error("عنوان منتج لازم وين شفتي منتج بلا عنوان ");
    if (category.trim() === "") return toast.error("ياتل نوع المنتج ");
    if (description.trim() === "") return toast.error("ياتل الوصف ");
    if (!file) return toast.error("واقيل يميز من عندوا تصويرة ");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("pricReal", pricReal);
    formData.append("pricFake", priceFake);

    Dispatch(createposte(formData));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (isPostCreatedd) {
      Nav("/");
    }
  });
  return (
    <section className="create-post">
      <h1 className="create-post-title">انشاء منتج جديد </h1>
      <form onSubmit={formSubmitHandler} className="create-post-form">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="عنوان المنتج"
          className="create-post-input"
        />
        <input
          onChange={(e) => setpricReal(e.target.value)}
          value={pricReal}
          type="number"
          placeholder="سعر حقيقي"
          className="create-post-input"
        />
        <input
          onChange={(e) => setpriceFake(e.target.value)}
          value={priceFake}
          type="text"
          placeholder="سعر بدون تخفيض"
          className="create-post-input"
        />
        <select
          className="create-post-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option disabled value="">
            اختيار نوعية المنتج
          </option>
          <option value="music">music</option>
          <option value="travelling">travelling</option>
        </select>
        <textarea
          className="create-post-textarea"
          placeholder="وصف المنتج"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="5"
        ></textarea>
        <input
          className="create-post-upload"
          type="file"
          name="file"
          id="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit" className="create-post-btn">
          {loanding ? "...جاري تحميل المنتج في السرفر" : "انشاء الان"}
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
