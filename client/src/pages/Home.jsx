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
          <h1 className="text-2xl font-bold lg:text-6xl">Ajay Chandan</h1>
          <h2 className="pt-4 text-xl font-semibold text-gray-700">Senior Lead Software Engineer</h2>
          <p className=" text-gray-500 text-xs sm:text-sm">
            Experienced Agile Leader & React JS Specialist | Scrum Master & Project Manager | MERN Stack Lead
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
      <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-full">
          <h2 className="text-2xl font-semibold mb-4">Skill Set</h2>
          <ul className="list-disc pl-5 text-sm sm:text-base">
            <li>JavaScript programming</li>
            <li>React, Angular, LWC</li>
            <li>MERN Stack (MongoDB, Express.js, React, Node.js)</li>
            <li>Sprint Planning, Agile methodologies, Scrum Master</li>
            <li>Version Control (Git)</li>
            <li>JIRA, Confluence</li>
            <li>UI/UX Design</li>
            <li>API Development and Integration</li>
            <li>Team Management and Mentorship</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-full md:w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Domains & Platforms</h2>
          <ul className="list-disc pl-5 text-sm sm:text-base">
            <li>Banking Domain</li>
            <li>HRM</li>
            <li>Successfactors</li>
            <li>Salesforce</li>
            <li>Product-based Development</li>
          </ul>
        </div>
    </div>
  );
}
