import React from "react";
import { ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="h-14 px-6 flex items-center justify-between">
        {/* LEFT: BRAND */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
            F
          </div>
          <span className="text-lg font-semibold text-gray-900">FlowLLM</span>
        </div>

        {/* CENTER: NAV (FAKE DROPDOWNS) */}
        <nav className="hidden md:flex items-center gap-8">
          <NavItem label="Explore" />
          <NavItem label="Community" />
          <NavItem label="about" />
        </nav>
      </div>
    </header>
  );
}

function NavItem({ label }) {
  return (
    <button className="flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-blue-600 transition">
      {label}
      <ChevronDown size={14} />
    </button>
  );
}
