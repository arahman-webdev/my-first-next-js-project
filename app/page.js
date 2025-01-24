import Link from "next/link";


export default async function Home() {

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  console.log(posts)
  return (

    <div className="container mx-auto min-h-screen">
    <h1 className="text-5xl font-bold text-center mt-5">Post{posts.length}</h1>
    <ul>
      {posts.slice(0, 10).map((post, index) => (
        <li key={post.id} className="text-lg mt-2 text-blue-900">
          <span>{index +1} </span>
          <Link href={`detail/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </div>
  );
}
