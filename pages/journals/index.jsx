import Image from "next/image";
import Head from "next/head";
import axios from "axios";

// Component
import Navlogo from "../../component/Navlogo/Navlogo";
import Navbottom from "../../component/Navbottom/Navbottom";
import JurnalList from "../../component/JurnalList/JurnalList";
import Pagination from "../../component/Pagination/Pagination";
import Footer from "../../component/Footer/Footer";

// Image
import bgJurnal from "../../public/Jurnal/SupergrafisJournal.png";
import { MdNextPlan } from "react-icons/md";

function nextPage() {
  alert('dataJournals')
}

function Jurnal({ dataJournals }) {
  return (
    <div className=" relative bg-jurnal z-[1]">
      <Head>
        <title>Jurnal</title>
      </Head>

      {/* Navbar Top */}
      <Navlogo class="fixed top-6 left-[5%] z-50" />

      {/* Navbar Bottom */}
      <Navbottom class="fixed bottom-[5%] right-[5%] z-50 flex flex-col justify-between" />

      {/* Background */}
      <div className=" absolute h-screen w-full overflow-hidden -z-[1]">
        <Image
          src={bgJurnal}
          alt=""
          layout="fill"
          objectFit="cover"
          quality={100}
          placeholder="blur"
        />
      </div>

      {/* List Jurnal */}
      <div className=" w-full flex justify-center">
        <div className="w-[90%]">
          <h2 className="capitalize text-white text-7xl font-light pt-60 z-10 pb-10 border-b mb-12">
            <span className=" font-bold">bero's</span>
            <br />
            journals
          </h2>
          <ul className="w-full flex flex-wrap justify-between">
            {dataJournals.data.map((journal) => (
              <JurnalList
                key={journal.id}
                slug={journal.slug}
                title={journal.title}
                datePublish={"May 15, 2022"}
                thumbnail={journal.thumbnail}
                writer={journal.writer}
              />
            ))}
          </ul>
        </div>
      </div>      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const BASEURL = process.env.BASEURL;

  const getJournal = await axios.get(BASEURL + "/journals");
  const dataJournals = await getJournal.data;

  return {
    props: {
      dataJournals,
    },
  };
}

export default Jurnal;
