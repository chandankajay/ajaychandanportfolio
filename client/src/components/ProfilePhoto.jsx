import React from 'react';
import profilePhoto from '../assets/ajaychandan.jpg'; 

const ProfilePhoto = () => {
  return (
    <div className="w-full h-80 bg-gray-500 rounded-b-full flex items-center justify-center overflow-hidden">
      <img
        src={profilePhoto}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProfilePhoto;
