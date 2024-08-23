import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className="flex h-screen">
      {/* left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] overflow-x-auto px-2">
        <Link href={"/"} className="flex items-center justify-center lg:justify-start gap-2">
          <Image src={"/logo.png"} alt="logo" width={500} height={500} className="w-[30px] h-[30px]" />
          <span className="hidden lg:block font-bold">SchooLama</span>
        </Link>
        <Menu />
      </div>
      {/* right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll overflow-x-hidden">
        <Navbar />
        {children}
      </div>

    </div>

  );
}
