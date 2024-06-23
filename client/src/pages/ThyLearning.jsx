import React, { useState } from 'react';
import courseData from '../mockData/courseData.json'; // Assume the JSON is saved in this path

export default function ThyLearning() {
  const [currentTopicId, setCurrentTopicId] = useState(1);
  const topics = courseData.course.topics;
  const currentTopic = topics.find(topic => topic.id === currentTopicId);

  const handleNext = () => {
    if (currentTopicId < topics.length) {
      setCurrentTopicId(currentTopicId + 1);
    }
  };

  const handlePrev = () => {
    if (currentTopicId > 1) {
      setCurrentTopicId(currentTopicId - 1);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-5 max-w-6xl mx-auto">
      <div className="w-full md:w-2/3 p-6">
        <h1 className="text-3xl font-bold mb-4">{currentTopic.title}</h1>
        {currentTopic.content.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">{section.subheading}</h2>
            <p className="text-gray-700 mb-2">{section.text}</p>
            {section.codeSnippet && (
              <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                <code>{section.codeSnippet}</code>
              </pre>
            )}
          </div>
        ))}
        <div className="flex justify-between mt-6">
          <button 
            onClick={handlePrev} 
            disabled={currentTopicId === 1} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            Previous
          </button>
          <button 
            onClick={handleNext} 
            disabled={currentTopicId === topics.length} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Topics</h2>
        <ul className="list-none">
          {topics.map(topic => (
            <li 
              key={topic.id} 
              className={`p-3 rounded-lg mb-3 cursor-pointer ${currentTopicId === topic.id ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'} hover:bg-blue-300 transition`}
              onClick={() => setCurrentTopicId(topic.id)}
            >
              <h3 className="text-lg font-medium">{topic.title}</h3>
              <p className="text-sm">{topic.description}</p>
              <span className="text-xs text-gray-500">{topic.readTime}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
