// components/MainComponent.js
import { useState } from 'react';
import RegisterBookForm from './RegisterBookForm ';
import Toast from './Toast';

export default function MainComponent() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleFormSubmit = (data) => {
    const { title, author, genre, publishedDate, isbn } = data;
    const message = `Book Registered: ${title} by ${author}, Genre: ${genre}, Published: ${publishedDate}, ISBN: ${isbn}`;
    
    setToastMessage(message);
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <div className="min-h-screen bg-beige flex items-center justify-center py-10 px-4">
      <div className="flex flex-col lg:flex-row items-center bg-white shadow-2xl rounded-lg overflow-hidden border-2 border-brown w-full lg:w-4/5 xl:w-3/4">
        <div className="lg:w-1/2 p-12 bg-beige">
          <RegisterBookForm onSubmit={handleFormSubmit} />
        </div>
        <div className="lg:w-1/2 flex items-center justify-center p-4">
          <img 
            src="https://th.bing.com/th?id=OIP.LbR8mFdgzIRqc9DnRYdefwHaE5&w=307&h=203&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" 
            alt="Library" 
            className="w-full h-auto object-cover rounded-lg border-2 border-brown" 
          />
        </div>
      </div>

      {showToast && <Toast message={toastMessage} closeFun={handleCloseToast} />}
    </div>
  );
}
