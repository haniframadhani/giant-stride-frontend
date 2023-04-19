export { default } from "@/components/pages/home/index.js"

export async function getServerSideProps() {
  const responseBlogs = await fetch('http://localhost:4000/api/article');
  const blogs = await responseBlogs.json();
  return {
    props: {
      blogs: blogs.articles
    }
  }
}