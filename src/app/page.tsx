import Link from "next/link";
import { mock } from "node:test";

const mockUrls = [
"https://xy1ekri9b4.ufs.sh/f/APW1GjNLSNtvbyJdqoE8tJg2hvc3oIXUSmi60uqVsM41aDPe",
"https://xy1ekri9b4.ufs.sh/f/APW1GjNLSNtviwe56kVMdX1HaREpQs7OebgrV5DfB8lT30Sy",
"https://xy1ekri9b4.ufs.sh/f/APW1GjNLSNtvMIH4LLoctMZiXq4rejvAsEa60Y7P3g5OCxSd",
"https://xy1ekri9b4.ufs.sh/f/APW1GjNLSNtvRxmoTYATsgV3P4iaXcKLRxrmd9NIlph7bHEk",
"https://xy1ekri9b4.ufs.sh/f/APW1GjNLSNtvg1s5zbikd3fnO7GRPbvpKmT0CgBtJ4Ixwq8e",
"https://xy1ekri9b4.ufs.sh/f/APW1GjNLSNtvMcPByVoctMZiXq4rejvAsEa60Y7P3g5OCxSd",
"https://xy1ekri9b4.ufs.sh/f/APW1GjNLSNtvXZKzb9Dv2IVNtskLgjoYJGeArwuCDHmF6pXc",
];

const mockImages = mockUrls.map((url,index) => ({
  id: index+1,
  url
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map(image => (
          <div key={image.id} className="w-48 h-48">
          <img src={image.url} alt={`Image ${image.id}`} className="w-full h-full object-cover rounded-lg" />
          {/* <p className="text-white text-sm">{image.id}</p> */}
          </div>
        ))}
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Hello World
        </h1>
      </div>
    </main>
  );
}
