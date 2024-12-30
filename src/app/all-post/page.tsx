import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

// Define the expected data structure
interface BlogPost {
  title: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
  summary: string;
  slug: string;
}

export default async function Home() {
  const fetchData = `*[_type == "blogs"] | order(publishedAt desc) {
  title,
  image{
    asset->{
      _id,
      url
    }
  },
  summary,
  "slug": slug.current
}
`;

  // Fetch data with correct typing
  const data: BlogPost[] = await client.fetch(fetchData);

  return (
    <div className="p-7 flex min-h-screen flex-col">
      <h1 className="text-2xl font-bold underline uppercase my-12 text-center sm:text-3xl lg:text-5xl">
        Most Recent Blogs
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => {
          return (
            <Link key={item.slug} href={`/blog/${item.slug}`}>
              <div className="flex flex-col justify-between h-[480px] rounded bg-light/90 dark:bg-dark/40 shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-700">
                <div className="relative max-h-76 flex-1">
                  <Image
                    src={urlFor(item.image).url()} // Dynamic image
                    alt={item.title}
                    fill
                    className="object-cover rounded-t"
                  />
                </div>
                <div className="text-center px-5 my-4">
                  <h1 className="text-lg font-semibold leading-tight mb-2">{item.title}</h1>
                  <p className="line-clamp-3">{item.summary}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
