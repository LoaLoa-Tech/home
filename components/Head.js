import { Head as NextHead } from "next/document";

const Head = ({}) => {
  return (
    <NextHead>
      {/* <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:image" content={image} /> */}
      <meta charSet="utf-8" />

      <meta property="og:type" content="website" />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/img/favicon-16x16.png?h=cf681ecd5bbf6d03e3056673d0122646"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/img/favicon-32x32.png?h=dada6ed6c75053e6f84520a87241cd23"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="180x180"
        href="/assets/img/apple-icon-180x180.png?h=b5b7d59e89a4d05d1aca1c00dfe1b70f"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/assets/img/android-icon-192x192.png?h=033de9a23d4cfa21fd3383f727564736"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="310x310"
        href="/assets/img/ms-icon-310x310.png?h=f9285fe98206007e11710305c82d9ea2"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.5.3/united/bootstrap.min.css"
      />
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      /> */}
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
      /> */}
      <link
        rel="stylesheet"
        href="/assets/css/styles.min.css?h=69c29b29303563e0ebbd0e0e69162409"
      />
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism.min.css"
        integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
        crossorigin="anonymous"
      /> */}
    </NextHead>
  );
};
export default Head;