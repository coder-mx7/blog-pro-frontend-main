import { toast } from "react-toastify";
import { useState } from "react";

const AddCategoryForm = () => {
  const [title, setTitle] = useState("");

  // From Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "") return toast.error("Category Title is required");

    console.log({ title });
  };

  return (
    <div className="add-category">
      <h6 className="add-category-title">اضافة نوع جديد</h6>
      <form onSubmit={formSubmitHandler} className="add-category-form">
        <div className="add-category-form-group">
          <label htmlFor="title">اسم النوع</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="title"
            placeholder="اكتب اسم النوع الجديد "
          />
        </div>
        <button type="submit" className="add-category-btn">
          اضافة الان
        </button>
      </form>
    </div>
  );
};

export default AddCategoryForm;
