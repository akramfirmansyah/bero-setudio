// Module
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

// Icon
import { AiFillEye, AiFillRocket } from "react-icons/ai";

// Image
import Supergrafis from "../public/About/Supergrafis Ungu.png";
import Client from "../public/About/client.png";
import AE from "../public/About/AE.png";
import DC from "../public/About/DC.png";

// Variabel
const yt = 'https://www.youtube.com/embed/gpg1Yi3U6Kc?controls=0'

const clients = [
  { id: 1, img: Client },
  { id: 2, img: Client },
  { id: 3, img: Client },
  { id: 4, img: Client },
  { id: 5, img: Client },
  { id: 6, img: Client },
  { id: 7, img: Client },
  { id: 8, img: Client },
  { id: 9, img: Client },
  { id: 10, img: Client },
  { id: 11, img: Client },
  { id: 12, img: Client },
  { id: 13, img: Client },
];

const lifes = [
  { id: 1, img: DC },
  { id: 2, img: AE },
  { id: 3, img: DC },
  { id: 4, img: AE },
  { id: 5, img: AE },
  { id: 6, img: DC },
  { id: 7, img: AE },
  { id: 8, img: DC },
];

// Component
import Navlogo from "../component/Navlogo/Navlogo";
import Navbottom from "../component/Navbottom/Navbottom";
import Footer from "../component/Footer/footer";

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>

      {/* Hero */}
      <div className="relative">
        <div className="relative h-screen w-full bg-gradient-to-t from-[#57209D] to-[#7900E2]">
          <Image src={Supergrafis} layout="fill" objectFit="cover" />
        </div>
        <div className="z-10 absolute top-1/2 left-0 -translate-y-1/3">
          <div className="w-4/5 mx-auto flex justify-between items-center">
            <div className="text-white w-3/5 pr-5">
              <h3 className="font-bold text-4xl mb-6">
                Agensi Kreatif Dengan Lorem Ipsum
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="w-2/5">
              <iframe
                src={yt}
                className="aspect-video w-full"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Navbar Top */}
        <Navlogo class="fixed top-6 left-[10%] z-50" />

        {/* Navbar Bottom */}
        <Navbottom class='fixed bottom-6 right-[10%] z-50 flex flex-col justify-between h-[90px]' />
        
      </div>

      {/* Visi Misi */}
      <div className="bg-[#7900E2] flex justify-center items-center">
        <div className="flex justify-between w-4/5 text-white my-16">
          <div className="w-5/12">
            <h5 className="text-xl">Visi</h5>
            <div className="relative flex justify-end items-center">
              <AiFillEye color="#E09E00" size={160} />
              <p className="text-2xl font-semibold absolute top-0 left-0 z-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="w-5/12">
            <h5 className="text-xl">Misi</h5>
            <div className="relative flex justify-end items-center">
              <AiFillRocket color="#E09E00" size={160} />
              <p className="text-2xl font-semibold absolute top-0 left-0 z-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Client */}
      <div className="flex justify-center items-center">
        <div className="w-4/5 my-16 flex flex-col items-center">
          <h3 className="font-black text-[#7900E2] text-4xl mb-10">
            Our Clients
          </h3>
          <div className=" flex flex-wrap justify-center">
            {clients.map((client) => {
              return (
                <div className="w-1/5" key={client.id}>
                  <Image src={client.img} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Setudio Life */}
      <div className="bg-[#1D1D1D] flex justify-center items-center">
        <div className="my-16 w-4/5 flex flex-col items-center text-white">
          <h3 className="font-black text-4xl mb-10">Setudio Life</h3>
          <div className="w-full flex flex-wrap mb-8">
            {lifes.map((life) => {
              return (
                <figure className="w-[250px] h-[250px]" key={life.id}>
                  <Image src={life.img} />
                </figure>
              );
            })}
          </div>
          <Link href="#">
            <a className="bg-[#7D06D8] px-4 py-1 rounded-full capitalize text-xl font-bold">
              load more
            </a>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
