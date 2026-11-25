"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const YELLOW = "#F6E81E";

interface NavLinkItemProps {
    href: string;
    icon: React.ReactNode;
    label: string;
}

const NavLinkItem = ({ href, icon, label }: NavLinkItemProps) => {
    const pathname = usePathname();
    const active = pathname === href;

    return (
        <Link
            href={href}
            className={`relative flex shrink-0 items-center gap-2 px-3 py-3 text-sm sm:text-base font-medium transition-colors ${
                active ? "" : "text-white/85 hover:text-[#F6E81E]"
            }`}
            style={active ? { color: YELLOW } : undefined}
        >
            <span>{icon}</span>
            {label}

            {/* Yellow underline for the current category */}
            {active && (
                <span
                    className="absolute inset-x-3 bottom-0 h-[3px] rounded-t-full"
                    style={{ backgroundColor: YELLOW }}
                ></span>
            )}
        </Link>
    );
};

export default NavLinkItem;