import { client } from "@/sanity/lib/client";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import Link from "next/link";

// Define the expected data structure
interface BlogPost {
  title: string;
  slug: { current: string };
  publishedAt: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
  tags: string[];
}

async function News() {
  // Fetch Blogs Query
  const query = `*[_type == "blogs" && "news" in tags] {
  title,
  slug,
  publishedAt,
  image{
    asset->{
      _id,
      url
    }
  },
  tags
}`;

  // Fetch Data from Sanity CMS
  const datafetch: BlogPost[] = await client.fetch(query);

  return (
    <div className="w-full h-[420px] px-4 sm:px-6 lg:px-8 bg-[#f2f2f2]">
      {/* Blog Section */}
      <div className="flex flex-col justify-center mt-12 py-5 sm:mt-16">
        <label className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
          News
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Render Blog Cards */}
          {datafetch.map((item, index) => {
            const formattedDate = new Date(item.publishedAt).toLocaleDateString(
              "en-US",
              { year: "numeric", month: "short", day: "numeric" }
            );

            return (
              <Link href={`/blog/${item.slug.current}`} key={index}>
                <div className="bg-card rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500">
                  <Image
                    src={
                      item.image
                        ? urlFor(item.image).url() // Dynamic image
                        : "https://placehold.co/600x400" // Fallback image
                    }
                    alt={item.title || "Blog image"}
                    width={1000}
                    height={500}
                    className="w-full h-[200px] object-cover rounded-t"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold line-clamp-1">
                      {item.title}
                    </h3>

                    <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                      <p>0 👁️ 0 💬 0 ❤️</p>
                      <span className="flex items-center gap-2">
                        <HiOutlineCalendarDateRange />
                        {formattedDate}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default News;
