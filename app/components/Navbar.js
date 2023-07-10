import Image from "next/image";
import Logo from "../../public/logo.png"
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="h-12  px-6 py-7 flex items-center border-b border-gray-600 ">
      <Link href="/" className="flex-1 flex items-center gap-x-3">
        <div className="h-10 w-10 text-white">
         <Image src={Logo} height={800} width={800} alt="logo" className="w-full h-full object-contain" />
        </div>
        <h5 className="text-base sm:text-lg  font-bold">React-Query with NextJS 13</h5>
      </Link>
    </div>
  );
};

export default Navbar;