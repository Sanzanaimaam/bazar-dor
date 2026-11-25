import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import UserInformation from "./UserInformation";

// Same palette as the banner
const GREEN = "#0F6A36";
const YELLOW = "#F6E81E";

// Sawtooth edge hanging down from the top strip
const zigzagDown = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='10' viewBox='0 0 20 10'%3E%3Cpath d='M0 0H20L10 10Z' fill='%230F6A36'/%3E%3C/svg%3E")`,
    backgroundRepeat: "repeat-x",
    backgroundSize: "20px 10px",
};

const HeaderPage = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <header className="relative z-50 w-full bg-[#E1E8E1] shadow-md">

            {/* Top strip: date and tagline */}
            <div className="relative text-white" style={{ backgroundColor: GREEN }}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between text-xs sm:text-sm">
                    <p className="flex items-center gap-2 font-medium">
                        <span
                            className="h-2 w-2 rounded-full"
                            style={{ backgroundColor: YELLOW }}
                        ></span>
                        {date}
                    </p>
                    <p
                        className="hidden sm:block font-semibold"
                        style={{ color: YELLOW }}
                    >
                        প্রতিদিনের বাজারদর, এক জায়গায়
                    </p>
                </div>

                {/* Sawtooth edge */}
                <div
                    className="pointer-events-none absolute inset-x-0 top-full h-[10px]"
                    style={zigzagDown}
                ></div>
            </div>

            {/* Main row: logo and user */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-4 sm:pt-7 sm:pb-5 flex items-center justify-between gap-4">

                <Link href="/" className="flex items-center gap-3 sm:gap-4">
                    <div
                        className="rounded-xl p-1.5 ring-2"
                        style={{
                            backgroundColor: `${YELLOW}33`,
                            ["--tw-ring-color" as string]: YELLOW,
                        }}
                    >
                        <Image
                            height={48}
                            width={48}
                            src="/Stack.png"
                            alt="বাজার দর logo"
                            priority
                        />
                    </div>

                    <div>
                        <h2
                            className="text-xl sm:text-2xl font-extrabold tracking-tight"
                            style={{ color: GREEN }}
                        >
                            বাজার দর
                        </h2>
                        {/* Small yellow accent under the name */}
                        <span
                            className="mt-1 block h-1 w-8 rounded-full"
                            style={{ backgroundColor: YELLOW }}
                        ></span>
                    </div>
                </Link>

                <UserInformation />
            </div>

            {/* Navigation row */}
            <div className="border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2">
                    <NavLinks />
                </div>
            </div>
        </header>
    );
};

export default HeaderPage;