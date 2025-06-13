import { ComponentChildren } from "preact";
import { asset as asset, Head as Head } from "@deco/deco/htmx";
export const Layout = ({ children, revision, hmrUniqueId }: {
  children: ComponentChildren;
  revision: string;
  hmrUniqueId: string;
}) => {
  return (
    <>
      {/* Include Icons and manifest */}
      {/** @ts-ignore: ignore error */}
      <Head>
        {/* Enable View Transitions API */}
        <style
          dangerouslySetInnerHTML={{
            __html: `@view-transition { navigation: auto; }`,
          }}
        />

        {/* Tailwind v3 CSS file */}
        <link
          href={`/styles.css?revision=${revision}${hmrUniqueId}`}
          rel="stylesheet"
        />

        {/* Custom Fonts CSS */}
        <link href="/fonts.css" rel="stylesheet" />

        {/* Material Design Icons - Filled Version */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,1,0"
        />

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")} />
      </Head>

      {/* Rest of Preact tree */}
      {children}
    </>
  );
};
