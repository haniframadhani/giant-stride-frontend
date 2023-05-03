export { default } from "@/components/pages/home/index.js"

export async function getServerSideProps() {
  const responseBlogs = await fetch(`${process.env.NEXT_PUBLIC_REACT_APP_BASE_URL}api/article`);
  const blogs = await responseBlogs.json();
  return {
    props: {
      blogs: blogs.articles
    }
  }
}