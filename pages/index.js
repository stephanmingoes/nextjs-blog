import Header from "../sections/header";
import Layout from "../Layout/layout";
import BlogList from "../sections/BlogList.js";
import { getSortedPostsData } from "../lib/posts";
export async function getStaticProps() {
  const allPostData = getSortedPostsData();

  return {
    props: {
      allPostData,
    },
  };
}
export default function Home({ allPostData }) {
  return (
    <>
      <Layout>
        <Header />
        <BlogList allPostData={allPostData} />
      </Layout>
    </>
  );
}
