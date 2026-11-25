import Image from "next/image";
import Link from "next/link";

const quickLinks = [
    { label: "হোম", href: "/" },
    { label: "আমার প্রোফাইল", href: "/profile" },
    { label: "সাইন ইন", href: "/sign_in" },
    { label: "সাইন আপ", href: "/sign_up" },
];

const supportLinks = [
    { label: "আমাদের সম্পর্কে", href: "/about" },
    { label: "যোগাযোগ", href: "/contact" },
    { label: "সচরাচর জিজ্ঞাসা", href: "/faq" },
    { label: "গোপনীয়তা নীতি", href: "/privacy" },
    { label: "ব্যবহারের শর্তাবলি", href: "/terms" },
];

const contact = {
    email: "info@bazardor.com",
    phone: "+৮৮০ ১৭০০-xxxxxxx",
    address: "ঢাকা, বাংলাদেশ",
};

const Footer = () => {
    const year = new Date().getFullYear();
    const bnYear = year.toLocaleString("bn-BD", { useGrouping: false });

    return (
        <footer className="mt-16 bg-[#0F6A36] text-white">
            {/* হলুদ অ্যাকসেন্ট রেখা */}
            <div className="h-1.5 w-full bg-[#F6E81E]" />

            <div className="mx-auto max-w-6xl px-4 py-12">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* ব্র্যান্ড */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link href="/" className="inline-flex items-center gap-3">
                            <div className="rounded-xl bg-white/15 p-1.5 ring-1 ring-white/20">
                                <Image
                                    src="/Stack.png"
                                    alt="বাজার দর লোগো"
                                    width={36}
                                    height={36}
                                />
                            </div>
                            <span className="text-xl font-extrabold">বাজার দর</span>
                        </Link>

                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-green-50/80">
                            প্রতিদিনের বাজারদর, দাম কমা-বাড়ার খবর আর বাজারভিত্তিক
                            তুলনা এক জায়গায় দেখুন।
                        </p>

                        {/* সোশ্যাল আইকন */}
                        <div className="mt-5 flex items-center gap-3">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="ফেসবুক"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors duration-200 hover:bg-[#F6E81E] hover:text-[#0B5429] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F6E81E]"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                >
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>

                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="ইউটিউব"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors duration-200 hover:bg-[#F6E81E] hover:text-[#0B5429] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F6E81E]"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                >
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* প্রয়োজনীয় লিংক */}
                    <nav aria-label="প্রয়োজনীয় লিংক">
                        <h3 className="text-base font-bold text-[#F6E81E]">
                            প্রয়োজনীয় লিংক
                        </h3>
                        <ul className="mt-4 space-y-2.5">
                            {quickLinks.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-green-50/80 transition-colors hover:text-white hover:underline"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* সহায়তা */}
                    <nav aria-label="সহায়তা">
                        <h3 className="text-base font-bold text-[#F6E81E]">সহায়তা</h3>
                        <ul className="mt-4 space-y-2.5">
                            {supportLinks.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-green-50/80 transition-colors hover:text-white hover:underline"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* যোগাযোগ */}
                    <div>
                        <h3 className="text-base font-bold text-[#F6E81E]">যোগাযোগ</h3>
                        <ul className="mt-4 space-y-3 text-sm text-green-50/80">
                            <li className="flex items-start gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.8}
                                    stroke="currentColor"
                                    className="mt-0.5 h-5 w-5 shrink-0 text-[#F6E81E]"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                    />
                                </svg>
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="break-all hover:text-white hover:underline"
                                >
                                    {contact.email}
                                </a>
                            </li>

                            <li className="flex items-start gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.8}
                                    stroke="currentColor"
                                    className="mt-0.5 h-5 w-5 shrink-0 text-[#F6E81E]"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                    />
                                </svg>
                                <a
                                    href={`tel:${contact.phone.replace(/\s|-/g, "")}`}
                                    className="hover:text-white hover:underline"
                                >
                                    {contact.phone}
                                </a>
                            </li>

                            <li className="flex items-start gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.8}
                                    stroke="currentColor"
                                    className="mt-0.5 h-5 w-5 shrink-0 text-[#F6E81E]"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                    />
                                </svg>
                                <span>{contact.address}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* নিচের কপিরাইট বার */}
            <div className="bg-[#0B5429]">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-center text-xs text-green-50/80 sm:flex-row sm:text-left">
                    <p>© {bnYear} বাজার দর। সর্বস্বত্ব সংরক্ষিত।</p>
                    <p>প্রতিদিনের বাজারদর, এক জায়গায়।</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;