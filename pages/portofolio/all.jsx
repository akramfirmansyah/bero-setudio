import Image from "next/image";
import Link from "next/link";
import axios from "axios";

// Component
import Navlogo from "../../component/Navlogo/Navlogo";
import Navbottom from "../../component/Navbottom/Navbottom";
import Footer from "../../component/Footer/Footer";

function AllJournals({ dataAllWorks }) {
  console.log(dataAllWorks.data);
  return (
    <div>
      {/* Navbar Top */}
      <Navlogo class="fixed top-6 left-[10%] z-50" />

      {/* Navbar Bottom */}
      <Navbottom class="fixed bottom-6 right-[10%] z-50 flex flex-col justify-between h-[90px]" />

      {/* Content */}
      {dataAllWorks.data.map((work) => {
        return (
          <div className=" relative w-full h-[400px]" key={work.id}>
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
                  pathname: "/portofolio/[slugportofolio]",
                  query: { slugportofolio: work.slug },
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

export async function getServerSideProps() {
  const BASEURL = process.env.BASEURL;

  const getAllWorks = await axios.get(BASEURL + "/works");
  const dataAllWorks = getAllWorks.data;
  return {
    props: { dataAllWorks },
  };
}

export default AllJournals;
