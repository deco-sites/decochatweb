import blog from "apps/blog/mod.ts";
import website, { Props } from "apps/website/mod.ts";
import manifest, { Manifest } from "../manifest.gen.ts";
import { type App as App, type AppContext as AC } from "@deco/deco";
type WebsiteApp = ReturnType<typeof website>;
type BlogApp = ReturnType<typeof blog>;
/**
 * @title Site
 * @description Start your site from a template or from scratch.
 * @category Tool
 * @logo https://decoims.com/decochatweb/b039c0f1-ca83-4de5-bfbf-b4c3b286c653/0ac02239-61e6-4289-8a36-e78c0975bcc8.png
 */
export default function Site(state: Props): App<Manifest, Props, [
  WebsiteApp,
  BlogApp,
]> {
  return {
    state,
    manifest,
    dependencies: [
      website(state),
      blog(state),
    ],
  };
}
export type SiteApp = ReturnType<typeof Site>;
export type AppContext = AC<SiteApp>;
export { onBeforeResolveProps, Preview } from "apps/website/mod.ts";
