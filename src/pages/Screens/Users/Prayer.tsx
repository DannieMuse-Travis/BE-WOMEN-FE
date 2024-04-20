import  { useState } from 'react';
import BlogList from './BlogList';
import BlogDetails from './Notifications';

const App = () => {
  // Sample blog data (replace with your own data)
  const initialBlogs = [
    { id: 1, title: 'Notifications 1', content: 'Content of Notifications 1...' },
    { id: 2, title: 'Notifications 2', content: 'Content of Notifications 2...' },
    { id: 3, title: 'Notifications 3', content: 'Content of Notifications 3...' },
  ];

  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleSelectBlog = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <div className="flex justify-center items-start h-screen bg-gray-100">
      <div className="flex-1 max-w-3xl p-4">
        <BlogList blogs={initialBlogs} onSelectBlog={handleSelectBlog} />
      </div>
      <div className="flex-1 max-w-3xl p-4">
        {selectedBlog ? <BlogDetails blog={selectedBlog} /> : <p>Select a Notifications to view</p>}
      </div>
    </div>
  );
};

export default App;
