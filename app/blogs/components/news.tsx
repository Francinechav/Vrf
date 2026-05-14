"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Calendar,
  X,
} from "lucide-react";

type Post = {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
  fullStory: string;
};

const featuredPost: Post = {
  id: 0,
  category: "Partnerships",
  date: "June 2025",

  title:
    "Litigating Reproductive Justice in Africa (LIRA) Program",

  description:
    "VRF announces a partnership with LIRA project partners in Malawi to strengthen legal empowerment and expand access to justice in SRHR matters.",

  image: "/vh.jpg",

  fullStory: `
The Vital Rights Foundation is excited to announce the establishment
of a partnership with LIRA project partners in Malawi.

This initiative will empower indigenous Malawians to access legal
representation and seek justice in matters related to their sexual
and reproductive health and rights (SRHR).

We believe that legal empowerment is crucial for advancing SRHR
and ensuring that everyone can exercise their fundamental rights.

Partners involved include:
• Nyale Institute
• Centre for Human Rights and Rehabilitation (CHRR)
• Malawi Legal Aid Bureau
`,
};

const posts: Post[]  = [
  {
    id: 1,
    category: "Legal Advocacy",
    date: "May 2025",

    title:
      "Vital Rights Foundation Hosts Legal Clinic on Reproductive Health Rights",

    description:
      "A collaborative legal clinic educating healthcare professionals and communities on reproductive health rights.",

    image: "/vc.jpg",

    fullStory: `
Vital Rights Foundation, with support from Afya na Haki through the
LIRA program, hosted a legal clinic to educate healthcare
professionals and the public on reproductive health rights.

The initiative aimed to bridge the gap between legal and medical
sectors for better access to justice and healthcare support.
`,
  },

  {
    id: 2,
    category: "Public Awareness",
    date: "May 2025",

    title:
      "VRF Executive Director Joins National Panel Discussion",

    description:
      "A national discussion exploring SRHR laws, healthcare rights, and policy reform in Malawi.",

    image: "/vb.jpg",

    fullStory: `
VRF Executive Director Molly Nkosi recently joined a national
discussion exploring the laws and policies surrounding Sexual
Reproductive Health Rights in Malawi.

The discussion emphasized the urgent need for reforms that
prioritize dignity, healthcare access, and women's rights.
`,
  },

  {
    id: 3,
    category: "Community Impact",
    date: "April 2025",

    title:
      "Strengthening Community Access to Justice Through Legal Empowerment",

    description:
      "Supporting vulnerable communities with legal knowledge and healthcare advocacy.",

    image: "/va.jpg",

    fullStory: `
VRF continues empowering communities through legal awareness,
community engagement, and advocacy programs focused on justice
and healthcare access.

The organization believes sustainable change begins at the
community level.
`,
  },

  {
    id: 4,
    category: "SRHR",
    date: "April 2025",

    title:
      "Advancing Sexual and Reproductive Health Rights in Malawi",

    description:
      "VRF continues advocating for dignity, healthcare access, and equitable legal protection.",

    image: "/vd.jpg",

    fullStory: `
Through advocacy campaigns, legal support initiatives, and
partnerships, VRF continues working toward equitable access
to healthcare and justice across Malawi.

The organization remains committed to advancing SRHR and
protecting vulnerable communities.
`,
  },
];

const filters = [
  "All",
  "Partnerships",
  "Legal Advocacy",
  "Community Impact",
  "SRHR",
  "Public Awareness",
];

export default function News() {
  const [activeFilter, setActiveFilter] = useState("All");

 const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const filteredPosts = useMemo(() => {
    if (activeFilter === "All") return posts;

    return posts.filter(
      (post) => post.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <>
      <section className="bg-[#F5F7F8] py-10 md:py-14 px-4 md:px-6 overflow-hidden">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <span className="text-[#5FAFC2] uppercase tracking-[0.18em] text-[10px] font-semibold">
                Latest Updates
              </span>

              <h2 className="text-4xl md:text-6xl font-semibold text-[#0B3A4A] leading-none mt-3">
                News & Articles
              </h2>

            </div>

            {/* FILTERS */}
          <div className="flex gap-1 overflow-x-auto no-scrollbar overflow-hidden">

              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`text-sm px-4 py-2 rounded-full transition ${
                    activeFilter === filter
                      ? "bg-[#0B3A4A] text-white"
                      : "bg-white border border-[#DDE5EA] text-[#0B3A4A] hover:bg-[#EEF3F5]"
                  }`}
                >
                  {filter}
                </button>
              ))}

            </div>
          </div>

          {/* MAIN EDITORIAL LAYOUT */}
          <div className="grid xl:grid-cols-[1.1fr_0.7fr] gap-10 mt-10 md:mt-12">

            {/* FEATURED LEFT */}
            <div>

              {/* IMAGE */}
              <button
                onClick={() => setSelectedPost(featuredPost)}
                className="block w-full text-left group"
              >

                <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden">

                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 1280px) 100vw, 60vw"
                    className="object-cover group-hover:scale-[1.02] transition duration-700"
                  />

                </div>

              </button>

              {/* CONTENT */}
              <div className="mt-6">

                <div className="flex items-center gap-3 flex-wrap">

                  <span className="text-[#5FAFC2] text-[10px] uppercase tracking-[0.16em] font-semibold">
                    {featuredPost.category}
                  </span>

                  <div className="flex items-center gap-2 text-[#7A8B94] text-xs">
                    <Calendar size={12} />
                    {featuredPost.date}
                  </div>

                </div>

                <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#0B3A4A] leading-[1.04] mt-4 max-w-[850px]">

                  {featuredPost.title}

                </h2>

                <p className="text-[#5C6F79] text-sm md:text-[15px] leading-relaxed mt-5 max-w-[700px]">

                  {featuredPost.description}

                </p>

                <button
                  onClick={() => setSelectedPost(featuredPost)}
                  className="inline-flex items-center gap-2 text-[#0B3A4A] text-sm font-semibold mt-7 hover:gap-3 transition-all duration-300"
                >

                  Read Full Story

                  <ArrowUpRight size={16} />

                </button>

              </div>
            </div>

            {/* RIGHT STORIES */}
            <div className="space-y-5 xl:max-h-[920px] xl:overflow-y-auto xl:pr-2 custom-scrollbar">

              {filteredPosts.map((post) => (
                <button
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="w-full text-left group"
                >

                  <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] gap-4 items-start">

                    {/* IMAGE */}
                    <div className="relative aspect-[1/1] rounded-[14px] overflow-hidden shrink-0">

                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="200px"
                        className="object-cover group-hover:scale-[1.03] transition duration-500"
                      />

                    </div>

                    {/* CONTENT */}
                    <div className="pt-1">

                      <div className="flex items-center gap-2 flex-wrap">

                        <span className="text-[#5FAFC2] text-[10px] uppercase tracking-[0.14em] font-semibold">
                          {post.category}
                        </span>

                        <span className="text-[#7A8B94] text-[11px]">
                          {post.date}
                        </span>

                      </div>

                      <h3 className="text-[#0B3A4A] text-base md:text-lg font-semibold leading-snug mt-3 group-hover:text-[#5FAFC2] transition">

                        {post.title}

                      </h3>

                      <p className="text-[#5C6F79] text-[13px] leading-relaxed mt-3 line-clamp-3">

                        {post.description}

                      </p>

                      <div className="inline-flex items-center gap-2 text-[#0B3A4A] text-[13px] font-semibold mt-4">

                        Read Story

                        <ArrowUpRight size={14} />

                      </div>

                    </div>
                  </div>

                </button>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* MODAL */}
{selectedPost && (
  <div className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm">

    {/* SCROLL AREA */}
    <div className="h-full overflow-y-auto">

      <div className="min-h-full flex justify-center p-4 md:p-8">

        <div className="bg-white w-full max-w-3xl rounded-[16px] overflow-hidden shadow-2xl relative">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setSelectedPost(null)}
            className="fixed md:absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white text-[#0B3A4A] shadow-lg flex items-center justify-center hover:scale-105 transition"
          >
            <X size={18} />
          </button>

          {/* IMAGE */}
          <div className="relative aspect-[16/8]">

            <Image
              src={selectedPost.image}
              alt={selectedPost.title}
              fill
              sizes="100vw"
              className="object-cover"
            />

          </div>

          {/* ARTICLE */}
          <div className="px-5 md:px-10 py-8 md:py-10">

            {/* META */}
            <div className="flex items-center gap-3 flex-wrap">

              <span className="bg-[#EEF3F5] px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.14em] font-semibold text-[#0B3A4A]">
                {selectedPost.category}
              </span>

              <div className="flex items-center gap-2 text-[#7A8B94] text-xs">
                <Calendar size={12} />
                {selectedPost.date}
              </div>

            </div>

            {/* TITLE */}
            <h2 className="text-2xl md:text-4xl font-semibold text-[#0B3A4A] leading-[1.08] mt-5 max-w-[700px]">

              {selectedPost.title}

            </h2>

            {/* STORY */}
            <div className="max-w-2xl text-[#4F6470] text-[15px] leading-[2] mt-8 whitespace-pre-line">

              {selectedPost.fullStory}

            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
)}
    </>
  );
}