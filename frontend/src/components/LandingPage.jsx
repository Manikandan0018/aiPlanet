import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage({ onStart }) {
   const navigate = useNavigate();

    return (
      <div className="min-h-screen bg-black text-white flex flex-col">
        {/* NAVBAR */}
        <header className="flex items-center justify-between px-10 py-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-yellow-400 rounded-full" />
            <span className="font-semibold text-lg">FlowLLM</span>
          </div>

          <nav className="hidden md:flex gap-6 text-gray-300 text-sm">
            <button className="hover:text-white">Web</button>
            <button className="hover:text-white">Flows</button>
            <button className="hover:text-white">LLM</button>
            <button className="hover:text-white">Docs</button>
          </nav>

          <div className="flex gap-4">
           
            <button
              onClick={() => navigate("/builder")}
              className="bg-yellow-400 text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-green-300 transition"
            >
              Try it Free
            </button>
          </div>
        </header>

        {/* HERO */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
          {/* SOCIAL PROOF */}
          <div className="flex items-center gap-2 mb-6 text-gray-400 text-sm">
            <div className="flex -space-x-2">
              <img
                className="w-6 h-6 rounded-full"
                src="https://i.pravatar.cc/30?1"
              />
              <img
                className="w-6 h-6 rounded-full"
                src="https://i.pravatar.cc/30?2"
              />
              <img
                className="w-6 h-6 rounded-full"
                src="https://i.pravatar.cc/30?3"
              />
            </div>
            <span>Trusted by 10,000+ builders & AI teams</span>
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
            Build AI Workflows <br />
            <span className="text-yellow-400">Chat With Your Own LLM</span>
          </h1>

          {/* SUBTITLE */}
          <p className="text-gray-400 max-w-2xl mt-6 text-lg">
            Design intelligent flowcharts, connect knowledge sources, and
            interact with your custom LLM pipelines in real-time.
          </p>

          {/* CTA */}
          <div className="flex gap-4 mt-10">
            <button
              onClick={() => navigate("/builder")}
              className="bg-yellow-400 text-black px-6 py-3 rounded-md font-medium hover:bg-green-300 transition"
            >
              Build Your First Flow
            </button>
          </div>

          {/* LOGO WALL */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 mt-16">
            {[
              {
                name: "OpenAI",
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/512px-OpenAI_Logo.svg.png",
              },
              {
                name: "Google",
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png",
              },
              {
                name: "Meta",
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/512px-Meta-Logo.png",
              },
              {
                name: "Microsoft",
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
              },
              {
                name: "AWS",
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png",
              },
              {
                name: "HuggingFace",
                src: "https://huggingface.co/front/assets/huggingface_logo.svg",
              },
              {
                name: "NVIDIA",
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/512px-Nvidia_logo.svg.png",
              },
              {
                name: "Vercel",
                src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg",
              },
            ].map((logo) => (
              <div
                key={logo.name}
                className="w-20 h-20 bg-amber-50 rounded-xl flex items-center justify-center p-3 hover:scale-110 transition"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    );
}
