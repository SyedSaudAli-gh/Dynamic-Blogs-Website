import { client } from "@/sanity/lib/client";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import Link from "next/link";

// Define the data structure for fetched blog posts
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

async function Sport() {
  // Fetch Blogs Query
  const query = `*[_type == "blogs" && "sport" in tags] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
    image{
      asset->{
        _id,
        url
      }
    },
    tags,
  }`;

  // Fetch Data from Sanity CMS and enforce type checking
  const datafetch: BlogPost[] = await client.fetch(query);

  return (
    <div className="w-full h-[420px] px-4 sm:px-6 lg:px-8 bg-[#f2f2f2]">
      {/* Blog Section */}
      <div className="flex flex-col justify-center mt-12 sm:mt-16">
        <label className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
          Sports
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
                      <p>0 👁️ 0 💬 21 ❤️</p>
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

export default Sport;
