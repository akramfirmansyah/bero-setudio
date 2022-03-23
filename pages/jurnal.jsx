import Image from "next/image";

// Component
import Navlogo from "../component/Navlogo/Navlogo";
import Navbottom from "../component/Navbottom/Navbottom";
import JurnalList from "../component/JurnalList/JurnalList";
import Footer from "../component/Footer/Footer";

// Image
import bgJurnal from "../public/Jurnal/Supergrafis Ungu.png";
import img001 from "../public/Jurnal/unsplash_br2HgQuvq6I.png";
import img002 from "../public/Jurnal/unsplash_IyaNci0CyRk.png";
import img003 from "../public/Jurnal/unsplash_70l1tDAI6rM.png";
import img004 from "../public/Jurnal/unsplash_Y2oE2uNLSrs.png";
import img005 from "../public/Jurnal/unsplash_HONJP8DyiSM.png";
import img006 from "../public/Jurnal/unsplash_6dW3xyQvcYE.png";

export default function Jurnal() {
  // Variabel
  var jurnalCont = [
    {id:1, link:'1', img:img001, title:'Judul artikel ipsum', date:'15 Dec 2021', publish:'Alif pratama'},
    {id:2, link:'2', img:img002, title:'Judul artikel ipsum', date:'15 Dec 2021', publish:'Alif pratama'},
    {id:3, link:'3', img:img003, title:'Judul artikel ipsum', date:'15 Dec 2021', publish:'Alif pratama'},
    {id:4, link:'4', img:img004, title:'Judul artikel ipsum', date:'15 Dec 2021', publish:'Alif pratama'},
    {id:5, link:'5', img:img005, title:'Judul artikel ipsum', date:'15 Dec 2021', publish:'Alif pratama'},
    {id:6, link:'6', img:img006, title:'Judul artikel ipsum', date:'15 Dec 2021', publish:'Alif pratama'}
  ]

  return (
    <div className=" relative bg-jurnal z-[1]">
      
      {/* Navbar Top */}
      <Navlogo class="fixed top-6 left-[10%] z-50" />

      {/* Navbar Bottom */}
      <Navbottom class="fixed bottom-6 right-[10%] z-50 flex flex-col justify-between h-[90px]" />

      {/* Background */}
      <div className=" absolute h-screen w-full overflow-hidden -z-[1]">
        <Image
          src={bgJurnal}
          layout="fill"
          objectFit="cover"
          quality={100}
          placeholder="blur"
        />
      </div>

      {/* List Jurnal */}
      <div className=" w-full flex justify-center">
        <div className=" w-4/5">
          <h2 className="capitalize text-white text-7xl font-light pt-60 z-10 pb-10 border-b mb-12">
            <span className=" font-bold">bero's</span>
            <br />
            journals
          </h2>
          <ul className="w-full flex flex-wrap justify-between">
            {jurnalCont.map((jurnalCont) => (
              <JurnalList
                key={jurnalCont.id}
                link={jurnalCont.link}
                title={jurnalCont.title}
                datePublish={jurnalCont.date}
                img={jurnalCont.img}
                publisher={jurnalCont.publish}
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
