import Link from "next/link";
import React from "react";
import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";

function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-white">
          deevstore
        </Link>

        {/* Busca */}
        <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search className="w-5 h-5 text-zinc-500" />
          <input
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>

      <div className="flex items-center gap-4">
        {/* Carrinho */}
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-4 w-4" />
          <span className="text-sm">Cart(0)</span>
        </div>

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
