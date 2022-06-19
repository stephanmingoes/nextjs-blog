import Link from "next/link";
import React from "react";
import Date from "../components/Date";

const BlogList = ({ allPostData }) => {
  return (
    <div>
      <h2>Blog</h2>
      {allPostData.map(({ title, id, date }) => (
        <div>
          <Link href={`posts/${id}`}>{title}</Link>
          <br />
          <Date dateString={date} />
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
