import Link from "next/link";

export default async function Page({ params }) {
  const { id } = params;

  // Fetch post details based on the `id`
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <div className="min-h-screen container mx-auto">
      <div className="mt-8">
        <div className="bg-gray-100 p-7">
          <h2 className="text-center">Post No {post.id}</h2>
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p className="mt-4 text-lg">{post.body}</p>
        </div>
        <Link href="/" className="text-blue-500 mt-4 inline-block">
          Back to Blog Posts
        </Link>
      </div>
    </div>
  );
}

