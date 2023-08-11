import { useRouter } from "next/router";

function PostDetail() {
  const router = useRouter();
  console.log(router.query)
  return <div>
    <div>{router.query.detail}</div>
  </div>
}

export default PostDetail;