"use client";

import { ShoppingBag } from "lucide-react";
import React from "react";
import { useCart } from "../context/cart-context";

function CartWidget() {
  const { items } = useCart();
  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="h-4 w-4" />
      <span className="text-sm">Cart({items.length})</span>
    </div>
  );
}

export default CartWidget;
