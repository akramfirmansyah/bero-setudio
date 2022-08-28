import Image from "next/image";
import { useRouter } from "next/router";
import ReactPlayer from "react-player";
import axios from "axios";

// Icon
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

// Component
import ReactPaginate from "react-paginate";
import Navbottom from "../../component/Navbottom/Navbottom";
import Navlogo from "../../component/Navlogo/Navlogo";
import Footer from "../../component/Footer/Footer";

function WorksContent({ dataWorkContent }) {
  const workContent = dataWorkContent.data;
  const router = useRouter();

  // Content component
  const Content = ()=> {
    if (Object.keys(workContent.contents).length !== 0) {
      <div>
        {workContent.contents.map((content) => {
          if (content.type === "video") {
            return (
              <div className="aspect-video w-full">
                <ReactPlayer
                  url={content.content}
                  volume={0.5}
                  loop={true}
                  width="100%"
                  height="100%"
                />
              </div>
            );
          }

          return (
            <div key={content.id}>
              <Image src={content.content} alt="" layout="responsive" />
            </div>
          );
        })}
      </div>
    } else {
      return(
        <></>
      )
    }
  }

  // Prev Button Handler
  const prevPageHandler = () => {
    router.push(workContent.prev_work.slug);
  };

  // Next Button Handler
  const nextPageHandler = () => {
    router.push(workContent.next_work.slug);
  };

  // Prev Button
  const Prev = () => {
    if (workContent.prev_work !== null) {
      return (
        <button
          id="btn-prev"
          onClick={prevPageHandler}
          className="flex justify-center items-center border px-3 py-2 rounded-tl-md rounded-tr-xl rounded-br-md rounded-bl-xl hover:bg-second hover:text-white"
        >
          <MdNavigateBefore size={24} />
          {workContent.prev_work.title}
        </button>
      );
    } else {
      return <></>;
    }
  };

  // Next Button
  const Next = () => {
    if (workContent.next_work !== null) {
      return (
        <button
          id="btn-next"
          onClick={nextPageHandler}
          className="flex justify-center items-center border px-3 py-2 rounded-tl-md rounded-tr-xl rounded-br-md rounded-bl-xl hover:bg-second hover:text-white"
        >
          {workContent.next_work.title}
          <MdNavigateNext size={24} />
        </button>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div key={workContent.id}>
      {/* Navbar Top */}
      <Navlogo class="fixed top-6 left-[5%] z-50" />

      {/* Navbar Bottom */}
      <Navbottom class="fixed bottom-6 right-[5%] z-50 flex flex-col justify-between h-[90px]" />

      {/* Hero */}
      <div className="h-[80vh] w-full bg-hdportofolio flex justify-center items-center text-white">
        <div className=" w-4/5">
          <div className="border-b pb-4 mb-8">
            <figure className="relative h-[100px]">
              <Image src={workContent.logo} alt="" layout="fill" />
            </figure>
          </div>
          <h3 className="uppercase font-black text-2xl mb-4">Project Info</h3>
          <div className="flex justify-between">
            {/* Project */}
            <div className="w-1/2">
              <h6 className="uppercase text-lg font-bold">
                {workContent.project_title}
              </h6>
              <p className=" text-sm">{workContent.project_description}</p>
            </div>

            <div className="w-1/2 flex">
              {/* Teams */}
              <div className="w-1/2 uppercase">
                {workContent.teams.map((team) => {
                  if (team !== null) {
                    return (
                      <div className="mb-3 w-full" key={team.id}>
                        <h5 className="text-lg font-bold">{team.role}</h5>
                        <p className="capitalize text-sm">{team.names}</p>
                      </div>
                    );
                  }
                })}
              </div>
              {/* Client */}
              <div className="w-1/2 uppercase">
                {workContent.clients.map((client) => {
                  if (client !== null)
                    return (
                      <div className="mb-3 w-full">
                        <h5 className="text-lg font-bold">Clients</h5>
                        <li
                          className="capitalize text-sm list-none"
                          key={client.id}
                        >
                          {client.name}
                        </li>
                      </div>
                    );
                })}
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

      {/* Content */}
      <Content />

      {/* Next Previous Portfolio */}
      <section className="flex justify-center items-center w-full bg-second text-white">
        <ReactPaginate
          previousLabel={<Prev />}
          nextLabel={<Next />}
          containerClassName="flex justify-between items-center w-[90%] gap-2 my-4"
          pageClassName="max-w-[50%]"
        />
      </section>

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
