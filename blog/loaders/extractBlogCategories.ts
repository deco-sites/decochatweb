/**
 * @title Extract Blog Categories
 * @description Extracts unique categories from blog posts
 */

import type { Category } from "apps/blog/types.ts";

export interface Props {
  /**
   * @title Posts
   * @description Posts from which to extract categories
   */
  posts: {
    categories?: Category[];
  }[];
}

export default function extractBlogCategories(
  { posts = [] }: Props,
): { categories: Category[] } {
  console.log(`Extracting categories from ${posts.length} posts...`);

  // Map to store unique categories by slug
  const uniqueCategories = new Map<string, Category>();

  // Iterate through posts to collect categories
  posts.forEach((post) => {
    if (post.categories && Array.isArray(post.categories)) {
      post.categories.forEach((category) => {
        if (category && category.slug && !uniqueCategories.has(category.slug)) {
          uniqueCategories.set(category.slug, category);
        }
      });
    }
  });

  // Convert map values to array
  const categories = Array.from(uniqueCategories.values());

  console.log(
    `Extracted ${categories.length} unique categories: `,
    categories.map((c) => c.name).join(", "),
  );

  // Sort categories by name
  categories.sort((a, b) => a.name.localeCompare(b.name));

  return { categories };
}
