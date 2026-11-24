import Link from 'next/link';
// import React from 'react';
interface NavLinksType{
    id: string;
    slug: string;
    icon: React.ReactNode;
    nameBn: string;
}
const NavLinks = async() => {

    const res=await fetch("https://openapi.programming-hero.com/api/bazardor/categories")
    const data=await res.json()
    const nav:NavLinksType[]=data

    return (
        <div className='max-w-6xl mx-auto flex pl-8 gap-5'>
            {
                nav.map((links, id)=><Link key={id} href={`/category/${links.id}`}>{links.icon}{links.nameBn}</Link>)
            }
        </div>
    );
};

export default NavLinks;