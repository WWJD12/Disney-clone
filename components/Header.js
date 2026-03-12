import Image from "next/image";
import { HomeIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 flex items-center bg-[#040714] h-[72px] px-10">
      
      <Image
        src="/images/logo.svg"
        alt="Disney+"
        width={80}
        height={80}
        priority
      />

      <div className="ml-6 flex items-center gap-2 text-white">
        <HomeIcon className="w-6 h-6 bg-red-500" />
        <span>Home</span>
      </div>

    </div>
  );
}