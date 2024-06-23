import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const workHistory = [
  {
    startDate: new Date('2023-06-01'),
    endDate: new Date('2023-12-31'), // Add a realistic end date or set to current date
    company: 'Veritas Prime Labs',
    position: 'Senior Prime Lead (MERN Stack)',
    description: 'Leading and developing MERN stack projects...',
  },
  {
    startDate: new Date('2021-01-01'),
    endDate: new Date('2023-05-31'),
    company: 'NextQ',
    position: 'Senior Product Engineer',
    description: 'Developed reusable components using React for SalesForce...',
  },
  {
    startDate: new Date('2019-09-01'),
    endDate: new Date('2020-12-31'),
    company: 'Zenmonics (acquired by FIS)',
    position: 'Senior Software Engineer',
    description: 'Developed reusable components for a banking application...',
  },
  {
    startDate: new Date('2017-10-01'),
    endDate: new Date('2019-08-31'),
    company: 'Aptude Software Solutions',
    position: 'Software Engineer',
    description: 'Developed reusable web components and tiles using Polymer JS...',
  },
  {
    startDate: new Date('2015-07-01'),
    endDate: new Date('2017-09-30'),
    company: 'Resource One IT Solutions',
    position: 'Software Engineer',
    description: 'Worked on a migration project transitioning from AngularJS to React...',
  },
  {
    startDate: new Date('2012-08-01'),
    endDate: new Date('2015-06-30'),
    company: 'Global Logic Pvt Ltd',
    position: 'Content Engineer',
    description: 'Worked as an Analyst...',
  },
];

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date('2023-06-01'));

  const currentWork = workHistory.find(
    (work) =>
      selectedDate >= work.startDate && selectedDate <= work.endDate
  );

  return (
    <div className="flex w-full flex-row gap-6 p-5 mx-auto">
      <div className="flex-shrink-0">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          inline
          calendarClassName="bg-white p-3 rounded-lg shadow-lg"
          className="text-2xl font-semibold"
        />
      </div>
      <div className="flex flex-col gap-6 flex-grow">
        {currentWork ? (
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">{currentWork.company}</h2>
            <h3 className="text-lg font-medium text-gray-700">{currentWork.position}</h3>
            <p className="text-gray-600 mt-2">{currentWork.description}</p>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600">No work history found for the selected date.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DatePickerComponent;
