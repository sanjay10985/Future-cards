import { Search, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex relative items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-8 ">
        <Image
          src="/images/logo.svg"
          alt="Colgate Logo"
          width={100}
          height={40}
          className="w-24 absolute top-0"
        />
        <nav className="hidden md:flex space-x-6 ml-8">
          <a href="#" className="text-red-600 font-semibold">
            Home
          </a>
          <a href="#" className="text-gray-600">
            Products
          </a>
          <a href="#" className="text-gray-600">
            Oral Health
          </a>
          <a href="#" className="text-gray-600">
            Mission
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Search className="text-gray-400" />
        <div className="flex items-center space-x-2">
          <Image
            src="/images/smile1.jpg"
            alt="User"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-600">Sasha</span>
          <ChevronDown className="text-gray-400" />
        </div>
      </div>
    </header>
  );
}
