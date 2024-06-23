import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import DatePickerComponent from '../components/DatePicker';
export default function Home() {
  const experiences = [
    { number: '12', text: 'Years of experience' },
    { number: '05', text: 'Total companies' },
    { number: '10', text: 'Total clients' },
    { number: '20', text: 'Total projects' },
  ];

  const technicalSkills = [
    { skill: 'JavaScript', rating: 4 },
    { skill: 'React JS', rating: 5 },
    { skill: 'Unit Testing', rating: 5 },
    { skill: 'Angular', rating: 4 },
    { skill: 'TypeScript', rating: 4 },
    { skill: 'Node JS', rating: 3 },
    { skill: 'Express', rating: 3 },
    { skill: 'MongoDB', rating: 3 },
    { skill: 'API', rating: 4 },
  ];

  const managementSkills = [
    { skill: 'Git', rating: 5 },
    { skill: 'Jira', rating: 4 },
    { skill: 'Scrum', rating: 5 },
    { skill: 'Resource Allocation', rating: 4 },
    { skill: 'Budgeting', rating: 2.5 },
    { skill: 'Client Management', rating: 4 },
    { skill: 'Code Version Maintenance', rating: 5 },
  ];

  return (
    <div className="flex flex-col gap-6 p-5 px-3 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold lg:text-4xl">Ajay Chandan Kandadai</h1>
          <h2 className="pt-4 text-xl font-semibold text-gray-700">Senior Lead Software Engineer</h2>
          <p className="text-gray-500 text-xs sm:text-sm">
            Experienced Agile Leader & React JS Specialist | Scrum Master & Project Manager | MERN Stack Lead
          </p>
        </div>
        {/* <Button gradientDuoTone="purpleToBlue">Contact</Button> */}
      </div>
      <div className="flex flex-row gap-6 mt-6">
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Roles & Responsibilities</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Leading and developing MERN stack projects</li>
            <li>Planning and conducting sprint planning meetings</li>
            <li>Acting as Scrum Master</li>
            <li>Ensuring timely delivery of projects</li>
            <li>Collaborating with cross-functional teams</li>
          </ul>
        </div>
        <div className="flex-1 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Domains & Platforms</h2>
          <ul className="list-disc pl-5">
            <li>Banking Domain</li>
            <li>HRM</li>
            <li>Successfactors</li>
            <li>Salesforce</li>
            <li>Product-based</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white flex flex-row p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 items-center">
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
              {({ isVisible }) => (
                <span className="text-7xl font-bold flex-1 text-purple-800">
                  {isVisible ? <CountUp start={0} end={parseInt(exp.number)} duration={2.5} /> : '0'}
                </span>
              )}
            </VisibilitySensor>
            <span className="text-l text-gray-800 text-center pl-2">{exp.text}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <ul className="space-y-4">
            {technicalSkills.map((skill, index) => (
              <li key={index} className="flex items-center">
                <span className="flex-1">{skill.skill}</span>
                <div className="w-2/3 bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-purple-600 h-full rounded-full"
                    style={{ width: `${skill.rating * 20}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Management Skills</h2>
          <ul className="space-y-4">
            {managementSkills.map((skill, index) => (
              <li key={index} className="flex items-center">
                <span className="flex-1">{skill.skill}</span>
                <div className="w-2/3 bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-purple-600 h-full rounded-full"
                    style={{ width: `${skill.rating * 20}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <DatePickerComponent />


    </div>
  );
}
