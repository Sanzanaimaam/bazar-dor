import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex min-h-[70vh] items-center justify-center px-4 py-16">
            <div className="w-full max-w-lg overflow-hidden rounded-3xl border border-gray-100 bg-white text-center shadow-xl">
                {/* উপরের গ্রিন অংশ */}
                <div className="relative bg-[#0F6A36] px-6 pb-10 pt-10">
                    <div className="absolute inset-x-0 bottom-0 h-1.5 bg-[#F6E81E]" />
                    <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-white/10" />
                    <div className="absolute -bottom-6 right-6 h-20 w-20 rounded-full bg-white/10" />

                    <p
                        className="relative text-7xl font-extrabold leading-none text-[#F6E81E] sm:text-8xl"
                        aria-hidden="true"
                    >
                        ৪০৪
                    </p>
                </div>

                {/* বার্তা */}
                <div className="px-6 pb-10 pt-8 sm:px-10">
                    <h1 className="text-2xl font-bold text-[#0B5429] sm:text-3xl">
                        পেজটি খুঁজে পাওয়া যায়নি
                    </h1>
                    <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-[#F6E81E]" />

                    <p className="mt-4 text-sm leading-relaxed text-gray-600">
                        আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরানো হয়েছে, নাম বদলেছে
                        অথবা ঠিকানাটি ভুল লেখা হয়েছে।
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center rounded-full bg-[#0F6A36] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#0B5429] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F6E81E]"
                        >
                            হোম পেজে ফিরে যান
                        </Link>

                        <Link
                            href="/profile"
                            className="inline-flex items-center justify-center rounded-full border border-[#0F6A36] px-6 py-3 text-sm font-semibold text-[#0F6A36] transition-colors duration-200 hover:bg-[#0F6A36] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F6A36]"
                        >
                            আমার প্রোফাইল
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;