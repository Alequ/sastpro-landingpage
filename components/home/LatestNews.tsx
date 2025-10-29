import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LatestNews() {
  return (
    <section className="py-12 px-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link href="/latest-news" className="block">
          <div className="relative h-[420px] overflow-hidden cursor-pointer group">
      {/* Background Image */}
      <Image
        src="/home/LatestNews.png"
        alt="Latest News"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300" />

      {/* Content */}
      <div className="relative h-full flex items-start justify-between px-8 pt-8">
        {/* Left: Latest News Text */}
        <h2 className="text-white text-3xl font-bold">
          Latest News
        </h2>

        {/* Right: Chevron Icon */}
        <ChevronRight
          className="text-yellow-500 group-hover:translate-x-2 transition-transform duration-300"
          size={48}
          strokeWidth={3}
        />
      </div>
        </div>
        </Link>
      </div>
    </section>
  );
}
