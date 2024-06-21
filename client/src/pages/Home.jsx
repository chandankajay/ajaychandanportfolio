import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import profilePhoto from '../assets/ajaychandan.jpg'; // Make sure this path is correct

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col gap-6 p-5 px-3 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold lg:text-6xl">Ajay Chandan</h1>
          <h2 className="text-xl font-semibold text-gray-700">Senior Lead Software Engineer</h2>
          <p className="text-gray-500 text-xs sm:text-sm">
            I work and lead MERN stack projects at Veritas Prime Labs. I'm a Scrum Master who plans sprint planning meetings.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-lg mt-6">
        <h2 className="text-2xl font-semibold mb-4">Roles & Responsibilities</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm sm:text-base">
          <code>
            {`
- Leading and developing MERN stack projects
- Planning and conducting sprint planning meetings
- Acting as Scrum Master
- Ensuring timely delivery of projects
- Collaborating with cross-functional teams
            `}
          </code>
        </pre>
      </div>

      <div className='p-3 bg-amber-100 dark:bg-slate-700 mt-6'>
        <CallToAction />
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
