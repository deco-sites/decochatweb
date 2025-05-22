/**
 * @title Blog Posts List Loader
 * @description Loads a list of blog posts with filtering and sorting
 */

import type { BlogPost } from "apps/blog/types.ts";
import Blogposts from "./Blogposts.ts";

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

export default async function BlogpostList(
  props: Props,
): Promise<{ posts: BlogPost[] }> {
  // Simply forward the request to our Blogposts loader
  return await Blogposts(props);
}
