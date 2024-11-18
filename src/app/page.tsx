import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/eHHCY82Rv20c3sBtRuvyz5tx9A7Q28aLSuiJ4GTX60NnkjBP",
  "https://utfs.io/f/eHHCY82Rv20cTho6jEev0y8KrsV5Q6SgadOwDuW2pChMUAPL",
  "https://utfs.io/f/eHHCY82Rv20cNwtLtvstQV2yo6DbY1N7icOjfZpqEhndKvUS",
  "https://utfs.io/f/eHHCY82Rv20cqMjyUqbLn7vW4c1D9CNZakJQUV5oPhHf6GSt",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));


export default async function HomePage() {

const posts = await db.query.posts.findMany();

console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
            </div>
        ))}
        </div>
      </main>
  );
}
