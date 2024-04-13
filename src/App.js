import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Register from "./pages/forms/Register";
import Login from "./pages/forms/Login";
import PostDetails from "./pages/post-details/PostDetails";
import PostsPage from "./pages/posts-page/PostsPage";
import ForgotPassword from "./pages/forms/ForgotPassword";
import ResetPassword from "./pages/forms/ResetPassword";
import Profile from "./pages/profile/Profile";
import CreatePost from "./pages/create-post/CreatePost";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CartPage from "./pages/posts-page/cartsPage";
import UsersTable from "./pages/admin/UsersTable";
import PostsTable from "./pages/admin/PostsTable";
import CategoriesTable from "./pages/admin/CategoriesTable";
import { ToastContainer } from "react-toastify";
import CommentsTable from "./pages/admin/CommentsTable";
import Category from "./pages/category/Category";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <ToastContainer theme="colored" position="top-center" />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={!user?<Register />:<Navigate to={'/'} />} />
        <Route path="/login" element={!user?<Login />:<Navigate to={"/"} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="posts">
          <Route index element={<PostsPage />} />
          <Route path="create" element={user?<CreatePost />:<Navigate to={"/"} />} />
          <Route path="details/:id" element={<PostDetails />} />
          <Route path="categories/:category" element={<Category />} />
        </Route>
        <Route path="admin-dashboard">
          <Route index element={user?.isAdmin ?<AdminDashboard />:<Navigate to={"/"} />} />
          <Route path="users-table" element={user?.isAdmin ?<UsersTable />:<Navigate to={"/"} />} />
          <Route path="posts-table" element={user?.isAdmin ?<PostsTable />:<Navigate to={"/"} />} />
          <Route path="categories-table" element={user?.isAdmin ?<CategoriesTable />:<Navigate to={"/"} />} />
          <Route path="comments-table" element={user?.isAdmin ?<CommentsTable />:<Navigate to={"/"} />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
