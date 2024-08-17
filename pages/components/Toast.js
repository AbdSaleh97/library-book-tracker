// components/Toast.js
export default function Toast({ message, closeFun }) {
    return (
      <div className="fixed bottom-4 right-4 bg-brown text-beige px-6 py-4 rounded-lg shadow-lg flex items-center space-x-4 z-50">
        <span className="flex-1">{message}</span>
        <button onClick={closeFun} className="text-beige font-bold text-xl">
          ×
        </button>
      </div>
    );
  }
  