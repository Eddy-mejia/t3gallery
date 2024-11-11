import Link from "next/link";

const mockUrls = [
  "https://pixabay.com/photos/legs-feet-different-mixed-standing-362182/",
  "https://pixabay.com/photos/air-bubbles-diving-underwater-blow-230014/",
  "https://pixabay.com/photos/wild-horses-rainbow-released-feral-2239420/",
  "https://pixabay.com/photos/chains-crane-industrial-heavy-load-919058/"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))


export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
            </div>
        ))}
        </div>
      </main>
  );
}
