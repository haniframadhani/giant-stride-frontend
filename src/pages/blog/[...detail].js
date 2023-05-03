export { default } from "@/components/pages/detail/index.js"

export async function getServerSideProps(context) {
  const id = context.query.detail;
  console.log('id : ', id)
  const responseBlogs = await fetch(`${process.env.NEXT_PUBLIC_REACT_APP_BASE_URL}api/article?id=${id}`);
  const blog = await responseBlogs.json();
  return {
    props: {
      blog: blog.article
    }
  }
}