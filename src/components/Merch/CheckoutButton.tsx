"use client";
import { useState } from "react";

interface CheckoutButtonProps {
  itemName: string;
  priceInZAR: number;
  selectedSize: string;
  selectedColor: string;
}

export default function CheckoutButton({ itemName, priceInZAR, selectedSize, selectedColor }: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemName, priceInZAR, size: selectedSize, color: selectedColor }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url; 
      } else {
        alert("SYSTEM ERROR: Gateway connection failed.");
      }
    } catch (error) {
      console.error("Network Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button 
      onClick={handleCheckout}
      disabled={isLoading}
      className="w-full mt-4 bg-toxic text-black font-black py-3 text-sm hover:bg-white transition-colors uppercase tracking-widest disabled:opacity-50"
    >
      {isLoading ? "ENCRYPTING..." : "SECURE YOUR SIZE"}
    </button>
  );
}