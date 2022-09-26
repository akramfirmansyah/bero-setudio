import Image from "next/image";
import Link from "next/link";
import Head from 'next/head'
import axios from "axios";

// Component
import Navlogo from "../../component/Navlogo/Navlogo";
import Navbottom from "../../component/Navbottom/Navbottom";
import Footer from "../../component/Footer/Footer";

function AllJournals({ dataAllWorks, slug }) {
  return (
    <div>
      <Head>
        <title>Work - Bero Setudio</title>
      </Head>

      {/* Navbar Top */}
      <Navlogo />

      {/* Navbar Bottom */}
      <Navbottom />

      {/* Content */}
      {dataAllWorks.data.map((work) => {
        return (
          <div className="relative w-full h-[400px]" key={work.id}>
            <figure className="absolute w-full h-full overflow-hidden">
              <Image src={work.banner} alt="" layout="fill" />
            </figure>
            <div className="text-white z-[1] absolute top-1/2 left-1/2 -translate-y-1/2 w-2/5">
              <h3 className=" text-5xl font-bold capitalize">{work.title}</h3>
              <p className=" text-xl font-light capitalize mb-4">
                {work.categories}
              </p>
              <Link
                href={{
                  pathname: "/works/[slugworks]",
                  query: { slugworks: work.slug },
                }}
                passHref
              >
                <a>
                  <p className="bg-second capitalize px-4 py-2 rounded-full inline-block ease-out hover:bg-[#FF8300]">
                    see project
                  </p>
                </a>
              </Link>
            </div>
          </div>
        );
      })}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const BASEURL = process.env.BASEURL;
  let slug = context.query;
  slug = (slug.page === undefined) ? '1': slug.page
  const getAllWorks = await axios.get(BASEURL + "/works?page=" + slug );
  const dataAllWorks = getAllWorks.data;
  return {
    props: { dataAllWorks, slug },
  };
}

export default AllJournals;
