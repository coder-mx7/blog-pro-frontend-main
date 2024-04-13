import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <Link to="/admin-dashboard" className="admin-sidebar-title">
        <i className="bi bi-columns"></i>
        لوحة التحكم
      </Link>
      <ul className="admin-sidebar-list">
        <Link to="/admin-dashboard/users-table" className="admin-sidebar-link">
          <i className="bi bi-person"></i>
          الحسبات
        </Link>
        <Link to="/admin-dashboard/posts-table" className="admin-sidebar-link">
          <i className="bi bi-file-post"></i>
          المنتجات
        </Link>
        <Link
          to="/admin-dashboard/categories-table"
          className="admin-sidebar-link"
        >
          <i className="bi bi-tag-fill"></i>
          الانواع
        </Link>
        <Link
          to="/admin-dashboard/comments-table"
          className="admin-sidebar-link"
        >
          <i className="bi bi-chat-left-text"></i>
          تقيمات
        </Link>

      </ul>
    </div>
  );
};

export default AdminSidebar;
