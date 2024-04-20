import React from 'react';

const BlogDetails = ({ blog }) => {
  return (
    <div className="bg-white p-4">
      <h2 className="text-xl font-bold mb-4">{blog.title}</h2>
      <p className="text-gray-700">{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
