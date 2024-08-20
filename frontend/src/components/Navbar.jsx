import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
    return (
        <div className="pt-12 flex justify-center">
        <div className="h-24 flex p-16 items-center justify-between bg-white w-11/12 rounded-lg">
            {/* LEFT */}
            <div className="md:hidden md:w-[20%] lg:block 2xl:w-[35%]">
                <Image src="/logo.svg" alt="" width={118} height={64} />
            </div>
            {/* CENTER */}
            <div className="hidden md:flex w-[80%] text-md items-center opacity-70 justify-between" >
                {/* LINKS */}
                <div className="flex gap-20 md:gap-8 text-black font-semibold font-uni">
                    <Link href="/" className="flex items-center gap-2">
                    <span>Nos solutions d&apos;emballages</span>
                    </Link>
                    <Link href="/" className="flex items-center gap-2">
                    <span>Nos services</span>
                    </Link>
                    <Link href="/" className="flex items-center gap-2">
                    <span>Notre société</span>
                    </Link>
                    <Link href="/" className="flex items-center gap-2">
                    <span>Nos engagements</span>
                    </Link>
                    <Link href="/" className="flex items-center gap-2">
                    <span>Nos actualités</span>
                    </Link>
                </div>
            </div>
            {/* RIGHT */}
            <div className="responsive-nav 2xl:w-[20%] md:w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
            <div className="hidden xl:flex md:hidden p-2 border-2 items-center rounded-md" style={{borderColor: "#5CBDEC"}}>
                    <Image src="/search.svg" alt="" className="" width={18} height={18} />
                </div>
                        <button className="p-2 rounded-md pl-10 pr-10 font-primary font-bold hidden md:block" style={{backgroundColor: "#5CBDEC", color: "white"}}>Bouton</button>
            </div>
            <MobileMenu />
            </div>
            </div>
    )
}

export default Navbar;