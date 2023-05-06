export { default } from "@/components/pages/detail/index.js"

export async function getServerSideProps(context) {
  const id = context.query.detail;
  const responseBlogs = await fetch(`${process.env.REACT_APP_BASE_URL}api/article?id=${id}`);
  const blog = await responseBlogs.json();
  return {
    props: {
      blog: blog.article
    }
  }
}