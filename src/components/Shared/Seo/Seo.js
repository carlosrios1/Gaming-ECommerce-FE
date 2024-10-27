import Head from "next/head";

export function Seo(props) {
  const {
    title = "GAMING STORE - Videojuegos",
    description = "Tus juegos favoritos para PC, PlayStation, Xbox, Switch al mejor precio.",
  } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
    </Head>
  );
}