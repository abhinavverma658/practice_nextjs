"use client";
import "@/app/ui/global.css";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Welcome to the Dashboard</h1>
        <button onClick={() => alert("Button clicked!")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
          Click Me To get Started
        </button>
      </main>
    </div>
  );
}
