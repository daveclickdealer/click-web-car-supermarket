import FooterBlock from "@/components/blocks/footer/FooterBlock";
import HeaderBlock from "@/components/blocks/header/HeaderBlock";
import PrimaryLayout from "@/components/layouts/primary/PrimaryLayout";
import { NextPageWithLayout } from "./page";

const Home: NextPageWithLayout = () => {
  return (
    <section className="">
      <h1 className="text-click-blue">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <CatCard {...mockCatCardProps.base} />
        <CatCard {...mockCatCardProps.base} />
        <CatCard {...mockCatCardProps.base} />
        <CatCard {...mockCatCardProps.base} />
        <CatCard {...mockCatCardProps.base} />
        <CatCard {...mockCatCardProps.base} />
        <CatCard {...mockCatCardProps.base} />
        <CatCard {...mockCatCardProps.base} />
      </div> */}
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <>
      <HeaderBlock />
      <PrimaryLayout>{page}</PrimaryLayout>
      <FooterBlock />
    </>
  );
};
