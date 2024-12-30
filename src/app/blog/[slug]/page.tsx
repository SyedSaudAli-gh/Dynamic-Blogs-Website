import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Entertainment from "@/app/components/entertainment";
import News from "@/app/components/news";
import Comments from "@/app/comments/comment";

async function page({ params: { slug } }: { params: { slug: string } }) {
  // Fetch single blog by slug
  const fetchData = `*[_type == "blogs" && slug.current == $slug][0] {
    title,
    image,
    summary,
    content
  }`;

  const data = await client.fetch(fetchData, { slug });

  return (
    <div className="px-4 sm:px-6 lg:px-12">
      <article className="mt-12 mb-24 flex flex-col items-center gap-y-8 max-w-screen-xl mx-auto">
        {/* Blog Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-center text-dark">
          {data.title}
        </h1>

        {/* Featured Image */}
        <div className="w-full max-w-[600px] relative aspect-w-16 aspect-h-9">
          <Image
            src={urlFor(data.image).url()}
            alt={data.title}
            layout="responsive"
            width={1600}
            height={900}
            className="rounded-lg"
          />
        </div>

        {/* Blog Summary Section */}
        <section>
          <h2 className="text-lg sm:text-xl md:text-2xl text-center font-bold uppercase text-dark">
            Summary
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
            {data.summary}
          </p>
        </section>

        {/* Main Body of Blog */}
        <div className="text-lg sm:text-xl leading-relaxed flex flex-col gap-10 justify-center items-center w-full md:w-3/4 lg:w-2/3">
          <PortableText value={data.content} />
        </div>
        <Comments postId={slug} />
      </article>

      <Entertainment />
      <News />
    </div>
  );
}

export default page;
