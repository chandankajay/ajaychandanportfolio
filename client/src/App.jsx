import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import PostPage from './pages/PostPage';
import ScrollToTop from './components/ScrollToTop';
import Search from './pages/Search';
import ProfilePhoto from './components/ProfilePhoto';
import Menu from './components/Menu';
import ThyLearning from './pages/ThyLearning';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-1/5 bg-gray-800 text-white flex flex-col justify-between">
          <div className="p-4">
            <ProfilePhoto />
            <Menu />
          </div>
        </aside>

        {/* Main Content */}
        <div className="w-4/5 flex flex-col">
          {/* <Header /> */}
          <main className="flex-grow p-4 overflow-y-auto">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/thylearning' element={<ThyLearning />} />
              <Route path='/about' element={<About />} />
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='/sign-up' element={<SignUp />} />
              <Route path='/search' element={<Search />} />
              <Route element={<PrivateRoute />}>
                <Route path='/dashboard' element={<Dashboard />} />
              </Route>
              <Route element={<OnlyAdminPrivateRoute />}>
                <Route path='/create-post' element={<CreatePost />} />
                <Route path='/update-post/:postId' element={<UpdatePost />} />
              </Route>
              <Route path='/projects' element={<Projects />} />
              <Route path='/post/:postSlug' element={<PostPage />} />
            </Routes>
          </main>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
