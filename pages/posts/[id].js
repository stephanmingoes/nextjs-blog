import React from "react";
import styles from "../../css/blog.module.css";
import Link from "next/link";
import Head from "next/head";
import { getPostIds, getPostData } from "../../lib/posts";

export async function getStaticPaths() {
  // Return a list of possible items for id
  const paths = getPostIds();

  return {
    paths: paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  // Fetch necessary data for post using params.id
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
function Post({ postData }) {
  return (
    <div className={styles.posts}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className={styles.postContainer}>
        <h2>{postData.title}</h2> <Link href="/">Back Home</Link>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </div>
  );
}

export default Post;
