import BlogPost from "../../components/blog/BlogPost";
import Layout from "../../components/Layout";
import BreadCrumb from "../../components/blog/BreadCrumb";
import Pagination from "../../components/blog/Pagination";

export default function Blog({ allPostsData }) {
  return (
    <Layout pageTitle="Blog | Home">
      <BreadCrumb />
      <div className="container">
        <BlogPost />
      </div>
      <Pagination />
    </Layout>
  );
}
