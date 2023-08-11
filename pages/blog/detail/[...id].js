import { useRouter } from "next/router";

function BlogDetailId() {
  const router = useRouter();
  console.log(router.query)
  return <div>
    <div>{router.query.id}</div>
  </div>
}

export default BlogDetailId;