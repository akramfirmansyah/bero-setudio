import Image from "next/image";
import Link from "next/link";
import ReactPlayer from "react-player";
import axios from "axios";

// Icon
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

// Component
import Navbottom from "../../component/Navbottom/Navbottom";
import Navlogo from "../../component/Navlogo/Navlogo";
import Footer from "../../component/Footer/Footer";

// Image
import image1 from "../../public/Portofolio_Pasar Senyum/Frame 14.png";
import image2 from "../../public/Portofolio_Pasar Senyum/Frame 16.png";
import image3 from "../../public/Portofolio_Pasar Senyum/Frame 17.png";
import image4 from "../../public/Portofolio_Pasar Senyum/Frame 18.png";
import image5 from "../../public/Portofolio_Pasar Senyum/Frame 19.png";
import image6 from "../../public/Portofolio_Pasar Senyum/Frame 20.png";
import image7 from "../../public/Portofolio_Pasar Senyum/Frame 21.png";
import image8 from "../../public/Portofolio_Pasar Senyum/Frame 22.png";

const video1 = "https://www.youtube.com/watch?v=AwUqgyHGy00";

const frames = [
  { id: 1, frame: image1, type: "image" },
  { id: 2, frame: video1, type: "video" },
  { id: 3, frame: image2, type: "image" },
  { id: 4, frame: image3, type: "image" },
  { id: 5, frame: image4, type: "image" },
  { id: 6, frame: image5, type: "image" },
  { id: 7, frame: image6, type: "image" },
  { id: 8, frame: image7, type: "image" },
  { id: 9, frame: image8, type: "image" },
];

function WorksContent({ dataWorkContent }) {
  const workContent = dataWorkContent.data;
  console.log(workContent)
  return (
    <div key={workContent.id}>
      {/* Navbar Top */}
      <Navlogo class="fixed top-6 left-[10%] z-50" />

      {/* Navbar Bottom */}
      <Navbottom class="fixed bottom-6 right-[10%] z-50 flex flex-col justify-between h-[90px]" />

      {/* Hero */}
      <div className="h-[80vh] w-full bg-hdportofolio flex justify-center items-center text-white">
        <div className=" w-4/5">
          <div className="border-b pb-4 mb-8">
            <figure className="relative aspect-video h-[100px]">
              <Image src={workContent.logo} alt="" layout="fill" />
            </figure>
          </div>
          <h3 className="uppercase font-black text-2xl mb-4">Project Info</h3>
          <div className="flex justify-between">
            {/* Project */}
            <div className="w-1/2">
              <h6 className="uppercase text-lg font-bold">{workContent.project_title}</h6>
              <p className=" text-sm">{workContent.project_description}</p>
            </div>

            <div className="w-1/2 flex">
              {/* Teams */}
              <div className="w-1/2 uppercase">
                {workContent.teams.map((team) => {
                  return(
                    <div className="mb-3 w-full" key={team.id}>
                      <h5 className="text-lg font-bold">{team.role}</h5>
                      <p className="capitalize text-sm">{team.names}</p>
                    </div>
                  )
                })}
              </div>
              {/* Client */}
              <div className="w-1/2 uppercase">
                <div className="mb-3 w-full">
                  <h5 className="text-lg font-bold">Clients</h5>
                  {workContent.clients.map((client) => {
                    return(
                      <li className="capitalize text-sm list-none" key={client.id}>{client.name}</li>
                    )
                  })}
                </div>
                <div className="mb-3 w-full">
                  <h5 className="text-lg font-bold">Sector</h5>
                  <p className="capitalize text-sm">{workContent.sector}</p>
                </div>
                <div className="mb-3 w-full">
                  <h5 className="text-lg font-bold">year</h5>
                  <p className="capitalize text-sm">{workContent.year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content all Image */}
      <div>
        {frames.map((frames) => {
          if (frames.type === "video") {
            return (
              <div className="aspect-video w-full">
                <ReactPlayer
                  url={frames.frame}
                  volume={0.5}
                  loop={true}
                  width="100%"
                  height="100%"
                />
              </div>
            );
          }

          return (
            <div key={frames.id}>
              <Image src={frames.frame} alt="" layout="responsive" />
            </div>
          );
        })}
      </div>

      {/* Next Previous Portfolio */}
      <div className=" bg-[#E09E00] w-full h-[60px] flex justify-center items-center">
          <div className="prevnextport w-4/5 flex justify-between text-white">
            <Link href="#" passHref>
              <a className="flex items-center text-2xl font-medium">
                <GrLinkPrevious size={28} color="#fff" />
                <p className="ml-2">Arktiv</p>
              </a>
            </Link>
            <Link href="#" passHref>
              <a className="flex items-center text-2xl font-medium">
                <p className="mr-2">Arktiv</p>
                <GrLinkNext size={28} color="#fff" />
              </a>
            </Link>
          </div>
        </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const BASEURL = process.env.BASEURL;
  const slug = context.params;

  const getWorkContent = await axios.get(BASEURL + "/works/" + slug.slug);
  const dataWorkContent = getWorkContent.data;
  return {
    props: {
      dataWorkContent,
    },
  };
}

export default WorksContent;
