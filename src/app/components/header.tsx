import Link from "next/link";
import React from "react";
import Image from "next/image";
import CartWidget from "./cart-widget";
import { SearchForm } from "./search-form";
import { Suspense } from "react";

function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-white">
          deevstore
        </Link>
        {/* Busca */}
        <Suspense fallback={null}>
          <SearchForm />
        </Suspense>
      </div>

      <div className="flex items-center gap-4">
        {/* Carrinho */}
        <CartWidget />

        <div className="w-px h-4 bg-zinc-700" />

        {/* Account */}
        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/RichardLirio.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
