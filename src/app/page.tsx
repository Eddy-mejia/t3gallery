import Link from "next/link";

const mockUrls = [
  "https://www.google.com/imgres?q=mountain%20images&imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F417173%2Fpexels-photo-417173.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fmountain%2F&docid=cI5lldiSMEz8xM&tbnid=-iLbGpCKHcetdM&w=500&h=333&hcb=2",
  "https://www.google.com/imgres?q=mountain%20images&imgurl=https%3A%2F%2Fplus.unsplash.com%2Fpremium_photo-1672115680958-54438df0ab82%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW5zfGVufDB8fDB8fHww&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fmountains&docid=m-RtkFK2iNctFM&tbnid=fSMagQieZ84J8M&w=3000&h=1968&hcb=2&itg=1",
  "https://www.google.com/imgres?q=mountain%20images&imgurl=https%3A%2F%2Fwww.nps.gov%2Fglac%2Flearn%2Fnature%2Fimages%2FFolds.jpg%3Fmaxwidth%3D650%26autorotate%3Dfalse&imgrefurl=https%3A%2F%2Fwww.nps.gov%2Fglac%2Flearn%2Fnature%2Fmountains.htm&docid=4AXr1aTHx-Fp9M&tbnid=LUp84HcLJ9UAdM&w=650&h=434&hcb=2",
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
