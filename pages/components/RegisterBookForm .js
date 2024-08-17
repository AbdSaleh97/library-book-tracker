// components/RegisterBookForm.js
export default function RegisterBookForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: e.target.title.value,
      author: e.target.author.value,
      genre: e.target.genre.value,
      publishedDate: e.target.publishedDate.value,
      isbn: e.target.isbn.value,
    };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto p-8 bg-beige shadow-xl rounded-lg max-w-lg border-2 border-brown">
      <h2 className="text-3xl font-bold text-brown mb-8 text-center">Register a New Book</h2>
      <div className="mb-6">
        <label htmlFor="title" className="block text-brown font-medium">Book Title</label>
        <input type="text" id="title" name="title" className="mt-2 block w-full border border-brown rounded-lg p-3 focus:ring-brown focus:border-brown" required />
      </div>
      <div className="mb-6">
        <label htmlFor="author" className="block text-brown font-medium">Author</label>
        <input type="text" id="author" name="author" className="mt-2 block w-full border border-brown rounded-lg p-3 focus:ring-brown focus:border-brown" required />
      </div>
      <div className="mb-6">
        <label htmlFor="genre" className="block text-brown font-medium">Genre</label>
        <input type="text" id="genre" name="genre" className="mt-2 block w-full border border-brown rounded-lg p-3 focus:ring-brown focus:border-brown" required />
      </div>
      <div className="mb-6">
        <label htmlFor="publishedDate" className="block text-brown font-medium">Published Date</label>
        <input type="date" id="publishedDate" name="publishedDate" className="mt-2 block w-full border border-brown rounded-lg p-3 focus:ring-brown focus:border-brown" required />
      </div>
      <div className="mb-6">
        <label htmlFor="isbn" className="block text-brown font-medium">ISBN</label>
        <input type="text" id="isbn" name="isbn" className="mt-2 block w-full border border-brown rounded-lg p-3 focus:ring-brown focus:border-brown" required />
      </div>
      <button type="submit" className="w-full bg-brown text-beige font-semibold py-3 rounded-lg hover:bg-dark-brown transition duration-200">Register Book</button>
    </form>
  );
}
