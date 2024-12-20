import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id)
  });
  
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} />
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {



  return (
    <main className="">
      
      <SignedOut>
        <div className="h-full w-full flex justify-center items-center"> You are not signed in. </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>


      
      </main>
  );
}
