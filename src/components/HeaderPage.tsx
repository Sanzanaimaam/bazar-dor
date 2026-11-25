import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import UserInformation from "./UserInformation";

const HeaderPage = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">

            {/* Top strip: date and tagline */}
            <div className="bg-green-900 text-green-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between text-xs sm:text-sm">
                    <p className="font-medium">{date}</p>
                    <p className="hidden sm:block text-green-200">
                        প্রতিদিনের বাজারদর, এক জায়গায়
                    </p>
                </div>
            </div>

            {/* Main row: logo and user */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4">

                <Link href="/" className="flex items-center gap-3 sm:gap-4">
                    <div className="rounded-xl bg-green-50 ring-1 ring-green-100 p-1.5">
                        <Image
                            height={48}
                            width={48}
                            src="/Stack.png"
                            alt="বাজার দর logo"
                            priority
                        />
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-green-900">
                        বাজার দর
                    </h2>
                </Link>

                <UserInformation />
            </div>

            {/* Navigation row */}
            <div className="border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-1">
                    <NavLinks />
                </div>
            </div>
        </header>
    );
};

export default HeaderPage;