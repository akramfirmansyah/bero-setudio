import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

// Component
import OurWork from "../component/OurWork/OurWork";
import Footer from "../component/Footer/Footer";
import Navlogo from "../component/Navlogo/Navlogo";

// Icon
import { FaCamera } from "react-icons/fa";
import { BiVector } from "react-icons/bi";
import { MdPhoneIphone } from "react-icons/md";
import { GrPrevious, GrNext } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";

// Carousel
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const carouselProp = {
  showStatus: false,
  showIndicators: false,
  showArrows: true,
  showThumbs: false,
  infiniteLoop: true,
  autoPlay: true,
  interval: 5000,
  renderArrowPrev: (clickHandler, hasPrev, label) => {
    return (
      <span
        className="absolute left-[32px] top-1/2 -translate-y-1/2 flex justify-center items-center h-[50px] aspect-square z-10 rounded-full bg-white"
        onClick={clickHandler}
      >
        <GrPrevious size={28} />
      </span>
    );
  },
  renderArrowNext: (clickHandler, hasNext, label) => {
    return (
      <span
        className="absolute right-[32px] top-1/2 -translate-y-1/2 flex justify-center items-center h-[50px] aspect-square z-10 rounded-full bg-white"
        onClick={clickHandler}
      >
        <GrNext size={28} />
      </span>
    );
  },
};


// Variabel
// Function Scroll to Top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Image
import Supergrafis from "../public/Landing Page/Home/Supergrafis.png";

import TBlank from "../public/Landing Page/Our Work/Blank_Thumbnail.png";
import TPasarSenyum from "../public/Landing Page/Our Work/Pasar Senyum_Thumbnail.png";
import TArktiv from "../public/Landing Page/Our Work/Arktiv_Thumbnail.png";
import TBerokah from "../public/Landing Page/Our Work/Berokah_Thumbnail.png";
import TCifo from "../public/Landing Page/Our Work/CIFO_Thumbnail.png";
import TDaf from "../public/Landing Page/Our Work/DAF_Thumbnail.png";
import TRas from "../public/Landing Page/Our Work/RAS_Thumbnail.png";
import TSenyumInd from "../public/Landing Page/Our Work/Senyum Ind_Thumbnail.png";

// Video YT
var yt = "https://youtu.be/hiTBe0oJotg";
var yt = yt.replace("https://youtu.be/", "https://www.youtube.com/embed/");

// Props Thumnail Our Work
var thumnail = [
  {
    id: 1,
    img: TPasarSenyum,
    title: "Pasar Senyum",
    text: "Branding",
    link: "pasar-senyum",
  },
  { id: 2, img: TArktiv, title: "Arktiv", text: "Branding", link: "" },
  { id: 3, img: TSenyumInd, title: "Senyum Ind", text: "Branding", link: "" },
  { id: 4, img: TBerokah, title: "Berokah", text: "Branding", link: "" },
  { id: 5, img: TCifo, title: "CIFO", text: "Branding", link: "" },
  { id: 6, img: TDaf, title: "DAF", text: "Branding", link: "" },
  { id: 7, img: TRas, title: "RAS", text: "Branding", link: "" },
  { id: 8, img: TBlank, title: "_Blank", text: "Lorem Epsum", link: "" },
  { id: 9, img: TBlank, title: "_Blank", text: "Lorem Epsum", link: "" },
  { id: 10, img: TBlank, title: "_Blank", text: "Lorem Epsum", link: "" },
  { id: 11, img: TBlank, title: "_Blank", text: "Lorem Epsum", link: "" },
  { id: 12, img: TBlank, title: "_Blank", text: "Lorem Epsum", link: "" },
];

export default function Home({ dataTeams }) {
  return (
    <div>
      {/* Head */}
      <Head>
        <title>Bero Setudio</title>
      </Head>

      {/* Hero */}
      <div className="relative flex justify-end w-full h-screen bghero">
        <div className="relative w-full h-full">
          <Image
            src={Supergrafis}
            alt=""
            layout="fill"
            placeholder="blurDataURL"
            priority
          />
        </div>

        <div className="absolute -translate-y-[15%] top-1/2 flex justify-end items-center">
          <h2 className="uppercase text-right text-[66px] leading-[68px] font-black text-white tracking-wider mr-20 cursor-default">
            For all your<br></br>
            <span className="italic">creative needs</span>
          </h2>
        </div>

        {/* Navbar Top */}
        <div className="absolute z-10 w-full bg-gradient-to-tr from-transparent to-[#7900E2] text-white flex justify-center h-[120px]">
          <div className="flex w-4/5 h-full justify-between items-center">
            <Navlogo />
            <div>
              <ul className="flex capitalize text-center">
                <li className="">
                  <Link href="#">
                    <a className="">home</a>
                  </Link>
                </li>
                <li>
                  <Link href="#service">
                    <a className="ml-[25px] ">Service</a>
                  </Link>
                </li>
                <li>
                  <Link href="#team">
                    <a className="ml-[25px] ">our team</a>
                  </Link>
                </li>
                <li>
                  <Link href="#work">
                    <a className="ml-[25px] ">works</a>
                  </Link>
                </li>
                <li>
                  <Link href="/journals">
                    <a className="ml-[25px] ">journals</a>
                  </Link>
                </li>
                <li>
                  <Link href="#footer">
                    <a className="ml-[25px] ">contact us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="ml-[25px] ">about</a>
                  </Link>
                </li>
                <li>
                  <Link href="/test">
                    <a className="ml-[25px] ">test</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navbar Bottom */}
        <div id="NavbarBottom" className="fixed z-10 w-full bottom-10">
          <div className="w-4/5 mx-auto flex justify-between items-center">
            <Link href="https://wa.me/085600963500" passHref>
              <a
                target="_blank"
                className="bg-white p-2 rounded-full shadow-[0_5px_12px_rgba(37,179,68,0.3)]"
              >
                <BsWhatsapp size={28} color="#20B038" />
              </a>
            </Link>

            <div>
              <ul className="flex items-center">
                <li>
                  <Link href="https://www.instagram.com/berosetudio/">
                    <a target="_blank">Instagram</a>
                  </Link>
                </li>
                <li className="ml-5">
                  <Link href="https://www.youtube.com/">
                    <a target="_blank">Youtube</a>
                  </Link>
                </li>
                <li className="ml-5">
                  <Link href="https://www.behance.net/">
                    <a target="_blank">Behance</a>
                  </Link>
                </li>
                <li className="ml-5 flex items-center">
                  <button
                    onClick={scrollToTop}
                    className="relative h-[32px] w-[32px] scrooltotop"
                  >
                    <IoIosArrowUp
                      size={32}
                      color="#e09e00"
                      className="drop-shadow-icon absolute top-0 left-0 transition-all duration-200"
                    />
                    <IoIosArrowUp
                      size={32}
                      color="#e09e00"
                      className="absolute top-0 left-0 drop-shadow-icon transition-all duration-200"
                    />
                    <IoIosArrowUp
                      size={32}
                      color="#e09e00"
                      className="absolute top-0 left-0 drop-shadow-icon transition-all duration-200"
                    />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* About Us */}
      <div className="w-full h-20 text-[#616161] flex justify-center items-center text-center">
        <p>
          We are creative house based on Bandung,
          <br />
          filled with young and unique individuals providing a complete set of
          creative services for your brands
        </p>
      </div>

      {/* Video Reel */}
      <div>
        <iframe
          className="aspect-video w-full"
          src={yt}
          title="Video Showreel Porto"
          frameBorder="0"
          allow="autoplay"
          allowFullScreen
        ></iframe>
      </div>

      {/* Our Service */}
      <div id="service" className="w-full flex justify-center text-primary">
        <div className="w-4/5 mt-[50px]">
          <h2 className="w-full text-4xl uppercase pb-[30px] mb-[40px] border-b-[1px] border-[#4E2C7D]">
            our <span className="font-bold">service</span>
          </h2>
          <div>
            <div className="flex justify-between capitalize">
              <div className="w-4/12 flex justify-end items-center pr-8">
                <p className="text-right font-black text-[32px]">
                  Photo & Videography
                </p>
              </div>
              <div className="w-3/12 text-[#E09E00] flex justify-center items-center aspect-square border-b-[1px] border-[#4E2C7D]">
                <div className="bg-white flex justify-center items-center aspect-square p-8 rounded-full border-[20px] border-second drop-shadow-[0_15px_30px_rgba(224,158,0,0.5)] transition-all hover:scale-[1.1] hover:-rotate-[25deg]">
                  <FaCamera className="text-[4rem]" />
                </div>
              </div>
              <div className="w-4/12  flex flex-col justify-center items-start pl-8 text-[20px]">
                <p className="w-full font-bold">Product Photography</p>
                <ul className="list-disc pl-[40px]">
                  <li>Catalog</li>
                  <li>Still Life</li>
                  <li>Lookbook</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between capitalize">
              <div className="w-4/12 flex justify-end items-center pr-8">
                <p className="text-right font-black text-[32px]">
                  Branding & Graphic Design
                </p>
              </div>
              <div className="w-3/12 text-[#E09E00] flex justify-center items-center aspect-square border-b-[1px] border-[#4E2C7D]">
                <div className="bg-white flex justify-center items-center aspect-square p-8 rounded-full border-[20px] border-second drop-shadow-[0_15px_30px_rgba(224,158,0,0.5)] transition-all hover:scale-[1.1] hover:-rotate-[25deg]">
                  <BiVector className="text-[4rem]" />
                </div>
              </div>
              <div className="w-4/12  flex flex-col justify-center items-start pl-8 text-[20px]">
                <p className="w-full font-bold">Branding</p>
                <p className="w-full font-bold">Social Media Design</p>
                <p className="w-full font-bold">Graphic Design</p>
              </div>
            </div>
            <div className="flex justify-between capitalize">
              <div className="w-4/12 flex justify-end items-center pr-8">
                <p className="w-3/4 text-right font-black text-[32px]">
                  Social Media Management
                </p>
              </div>
              <div className="w-3/12 text-[#E09E00] flex justify-center items-center aspect-square border-b-[1px] border-[#4E2C7D]">
                <div className="bg-white flex justify-center items-center aspect-square p-8 rounded-full border-[20px] border-second drop-shadow-[0_15px_30px_rgba(224,158,0,0.5)] transition-all hover:scale-[1.1] hover:-rotate-[25deg]">
                  <MdPhoneIphone className="text-[4rem]" />
                </div>
              </div>
              <div className="w-4/12  flex flex-col justify-center items-start pl-8 text-[20px]">
                <p className="w-full font-bold">Videography</p>
                <ul className="list-disc pl-[40px]">
                  <li>Company profile</li>
                  <li>ads video</li>
                  <li>campaign video</li>
                  <li>explainer Motion Graphic</li>
                </ul>
                <p className="w-full font-bold">Motion Graphic</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div id="team" className="w-full flex justify-center text-primary">
        <div className="w-4/5 mt-[50px]">
          <h2 className="w-full text-4xl uppercase pb-[30px] mb-[40px] border-b-[1px] border-[#4E2C7D]">
            our <span className="font-bold">team</span>
          </h2>
          <div className="flex justify-center items-center flex-col">
            <Carousel {...carouselProp}>
              {dataTeams.data.map((team) => {
                return (
                  <div key={team.id}>
                    <Image
                      src={team.image}
                      alt=""
                      width={1080}
                      height={440}
                      className="rounded-b-[75px]"
                    />
                  </div>
                );
              })}
            </Carousel>
            <div className="text-center text-5xl">
              <h3 className="font-black my-[10px] mx-auto">Superteam</h3>
              <p className="m-0 text-base">
                There is no superman here,<br></br>but we have Superteam
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Work */}
      <div id="work" className="w-full flex justify-center text-primary">
        <div className="w-4/5 mt-[50px]">
          <h2 className="w-full text-4xl uppercase pb-[30px] mb-[40px] border-b-[1px] border-[#4E2C7D]">
            our <span className="font-bold">work</span>
          </h2>
          <OurWork thumnail={thumnail} />
          <button className="flex justify-center items-center rounded-full capitalize bg-[#7d06d8] text-white px-[30px] py-[5px] my-[70px] mx-auto transition-all hover:bg-primary">
            <Link href="/journals/all">
              <a className="text-xl font-bold">see more</a>
            </Link>
          </button>

          <div className="relative flex justify-center items-center w-full h-[40px] mb-[20px]">
            <div className="absolute bg-[#4e2c7d] w-full h-[1px]"></div>
            <h5 className="inline-block text-center px-[40px] bg-white z-[1]">
              www.<span className="font-bold">berosetudio</span>.com
            </h5>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const BASEURL = process.env.BASEURL;

  const getTeams = await axios.get(BASEURL + "teams");
  const dataTeams = getTeams.data;

  return {
    props: { dataTeams },
  };
}
