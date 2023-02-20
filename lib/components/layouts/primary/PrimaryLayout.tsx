import Head from "next/head";

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<"div"> {
  justify?: "items-center" | "items-start";
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main className="bg-white p-4 sm:p-6 md:p-8 h-[2000px]">{children}</main>
    </>
  );
};

export default PrimaryLayout;
