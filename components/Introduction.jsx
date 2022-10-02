import Image from "next/image";
import ProfileImg from "../public/images/belinda.jpg";

export default function Introduction() {
  return (
    <div className="py-12 mx-4 max-w-5xl flex flex-col sm:mx-auto">
      <div className="w-72 h-72 relative border-8 border-gray-600 rounded-full mx-auto shadow-2xl mb-5">
        <Image
          className="rounded-full"
          src={ProfileImg}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col items-center">
        <h3 className="font-light text-gray-500 mb-2">Frontend Engineer</h3>
        <h1 className="text-5xl font-semibold text-center mb-6">
          Belinda Marion Kobusingye
        </h1>
        <p className="mb-4">
          Ambitious and determined problem solver with experience in application
          design and development. Eager to use the most relevant technologies to
          solve important problems and work on solutions that make people's
          lives better.{" "}
        </p>
        <div className="max-w-xs w-full flex justify-evenly flex-wrap">
          <button className="w-36 h-14 rounded-full bg-black text-yellow-500 mb-2">
            Recent Blogs
          </button>
          <button className="w-36 h-14 rounded-full border-yellow-500 border-2">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
