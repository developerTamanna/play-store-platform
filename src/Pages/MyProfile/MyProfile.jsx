import React, {  useContext, useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase.config';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { valueContext } from '../../RootLayout/RootLayout';

const MyProfile = () => {


  const {setUser} = useContext(valueContext);

  useEffect(()=>{
    document.title = "My Profile | Apps"
  },[])
  const user = auth.currentUser;

  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.displayName || '');
      setPhotoURL(user.photoURL || '');

      setEmail(user.email || '');
    }
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
        
      });
 
      setUser({...user,displayName: name,photoURL: photoURL,})
      toast.success('Profile updated successfully.!');
    } catch (error) {
      console.error(error);
      toast.error('There was a problem updating the profile.!');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">My Profile</h2>

      <div className="text-center mb-4">
        <img
          src={photoURL || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto object-cover"
        />
        <p className="mt-2 text-gray-600">{email}</p>
      </div>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">নাম</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-violet-600 text-white py-2 rounded hover:bg-violet-700 transition"
        >
          Update 
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
