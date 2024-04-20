import React from 'react';

const BlogList = ({ blogs, onSelectBlog }) => {
  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-xl font-bold mb-4">List of Notifications</h2>
      <ul>
        {blogs.map((blog) => (
          <li
            key={blog.id}
            className="cursor-pointer hover:bg-gray-300 p-2 rounded"
            onClick={() => onSelectBlog(blog)}
          >
            {blog.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
