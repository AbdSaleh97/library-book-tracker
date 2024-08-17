// components/Header.js
export default function Header() {
    return (
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Library Book Tracker</h1>
          <nav className="flex space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/" className="hover:underline">Books</a>
            <a href="/" className="hover:underline">Add Book</a>
            <a href="/" className="hover:underline">Profile</a>
          </nav>
        </div>
      </header>
    );
  }
  