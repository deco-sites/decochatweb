/**
 * @title Blog Posts Loader
 * @description Loads and filters blog posts
 */
import type { BlogPost } from "apps/blog/types.ts";

export interface Props {
  /**
   * @title Category
   * @description Filter posts by category slug
   */
  category?: string;
  /**
   * @title Search term
   * @description Filter posts by search term
   */
  search?: string;
  /**
   * @title Count
   * @description Maximum number of posts to return
   */
  count?: number;
  /**
   * @title Post slugs
   * @description List of specific post slugs to load
   */
  postSlugs?: string[];
  /**
   * @title Sort by
   * @description Field and direction to sort posts by
   */
  sortBy?: "date_desc" | "date_asc" | "title_asc" | "title_desc";
}

// Mock database of blog posts for demonstration
const BLOG_POSTS: BlogPost[] = [
  {
    title: "Why we web",
    slug: "why-we-web",
    excerpt:
      "We believe in a web that is simple, scalable, and collaborative. A web where anyone can test ideas and build without fear. Let's make that vision a reality.",
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9",
    date: "2024-04-10",
    authors: [{
      name: "Deco Team",
      email: "author@deco.cx",
      avatar:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
    }],
    categories: [{ name: "Culture", slug: "culture" }],
    content: "<p>Lorem ipsum dolor sit amet</p>",
  },
  {
    title: "Building the future of commerce",
    slug: "building-future-commerce",
    excerpt:
      "Exploring how modern web technologies are reshaping e-commerce experiences.",
    image: "https://placehold.co/640x427",
    date: "2024-03-15",
    authors: [{
      name: "Jane Smith",
      email: "jane@deco.cx",
      avatar:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
    }],
    categories: [{ name: "Technology", slug: "technology" }, {
      name: "E-commerce",
      slug: "ecommerce",
    }],
    content: "<p>Lorem ipsum dolor sit amet</p>",
  },
  {
    title: "Performance optimizations for your site",
    slug: "performance-optimizations",
    excerpt:
      "Learn how to make your site blazing fast with these optimizations.",
    image: "https://placehold.co/640x427",
    date: "2024-02-20",
    authors: [{
      name: "John Developer",
      email: "john@deco.cx",
      avatar:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
    }],
    categories: [{ name: "Technology", slug: "technology" }, {
      name: "Performance",
      slug: "performance",
    }],
    content: "<p>Lorem ipsum dolor sit amet</p>",
  },
  {
    title: "Design principles for modern websites",
    slug: "design-principles",
    excerpt:
      "Exploring the key design principles that make websites both beautiful and functional.",
    image: "https://placehold.co/640x427",
    date: "2024-01-25",
    authors: [{
      name: "Alice Designer",
      email: "alice@deco.cx",
      avatar:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
    }],
    categories: [{ name: "Design", slug: "design" }],
    content: "<p>Lorem ipsum dolor sit amet</p>",
  },
  {
    title: "Introduction to server-side rendering",
    slug: "server-side-rendering",
    excerpt:
      "Understanding the benefits and implementation of server-side rendering for web applications.",
    image: "https://placehold.co/640x427",
    date: "2023-12-10",
    authors: [
      {
        name: "Tech Team",
        email: "tech@deco.cx",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
      },
      {
        name: "Sam Developer",
        email: "sam@deco.cx",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
      },
    ],
    categories: [{ name: "Technology", slug: "technology" }, {
      name: "Web Development",
      slug: "web-development",
    }],
    content: "<p>Lorem ipsum dolor sit amet</p>",
  },
  {
    title: "The future of AI in e-commerce",
    slug: "ai-ecommerce",
    excerpt:
      "How artificial intelligence is transforming the e-commerce landscape.",
    image: "https://placehold.co/640x427",
    date: "2023-11-05",
    authors: [
      {
        name: "Mark Analyst",
        email: "mark@deco.cx",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
      },
      {
        name: "AI Team",
        email: "ai@deco.cx",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
      },
      {
        name: "E-commerce Team",
        email: "ecomm@deco.cx",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
      },
    ],
    categories: [{ name: "E-commerce", slug: "ecommerce" }, {
      name: "AI",
      slug: "ai",
    }],
    content: "<p>Lorem ipsum dolor sit amet</p>",
  },
];

export default async function Blogposts(
  props: Props,
): Promise<{ posts: BlogPost[] }> {
  const { category, search, count = 50, postSlugs = [], sortBy = "date_desc" } =
    props;

  // In a real implementation, this would fetch from a database or API
  // For demo purposes, we're using the mock data
  let posts = [...BLOG_POSTS];

  // Filter by specific slugs if provided
  if (postSlugs.length > 0) {
    posts = posts.filter((post) => postSlugs.includes(post.slug));
  }

  // Filter by category if provided
  if (category) {
    posts = posts.filter((post) =>
      post.categories?.some((cat) => cat.slug === category)
    );
  }

  // Filter by search term if provided
  if (search) {
    const searchLower = search.toLowerCase();
    posts = posts.filter((post) =>
      post.title?.toLowerCase().includes(searchLower) ||
      post.excerpt?.toLowerCase().includes(searchLower) ||
      post.content?.toLowerCase().includes(searchLower) ||
      post.authors?.some((author) =>
        author.name.toLowerCase().includes(searchLower)
      ) ||
      post.categories?.some((category) =>
        category.name.toLowerCase().includes(searchLower)
      )
    );
  }

  // Sort posts by the specified field and direction
  if (sortBy) {
    posts.sort((a, b) => {
      switch (sortBy) {
        case "date_desc":
          return new Date(b.date || "").getTime() -
            new Date(a.date || "").getTime();
        case "date_asc":
          return new Date(a.date || "").getTime() -
            new Date(b.date || "").getTime();
        case "title_asc":
          return (a.title || "").localeCompare(b.title || "");
        case "title_desc":
          return (b.title || "").localeCompare(a.title || "");
        default:
          return 0;
      }
    });
  }

  // Limit the number of posts returned
  posts = posts.slice(0, count);

  return { posts };
}
