export { default } from "@/components/pages/detail/index.js"

export async function getServerSideProps(context) {
  const id = context.query.detail;
  console.log('id : ', id)
  const responseBlogs = await fetch(`http://localhost:4000/api/article?id=${id}`);
  const blog = await responseBlogs.json();
  return {
    props: {
      blog: blog.article
    }
  }
}