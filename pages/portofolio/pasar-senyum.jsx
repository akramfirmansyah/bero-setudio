import Image from 'next/image'
import Link from 'next/link'

// Icon
import {GrLinkNext, GrLinkPrevious} from 'react-icons/gr'

// Component
import Navbottom from '../../component/Navbottom/Navbottom'
import Navlogo from '../../component/Navlogo/Navlogo'
import Footer from '../../component/Footer/Footer'

// Image
import logo from '../../public/Portofolio_Pasar Senyum/Logo Pasar Senyum.png'
import image1 from '../../public/Portofolio_Pasar Senyum/Frame 14.png'
import image2 from '../../public/Portofolio_Pasar Senyum/Frame 16.png'
import image3 from '../../public/Portofolio_Pasar Senyum/Frame 17.png'
import image4 from '../../public/Portofolio_Pasar Senyum/Frame 18.png'
import image5 from '../../public/Portofolio_Pasar Senyum/Frame 19.png'
import image6 from '../../public/Portofolio_Pasar Senyum/Frame 20.png'
import image7 from '../../public/Portofolio_Pasar Senyum/Frame 21.png'
import image8 from '../../public/Portofolio_Pasar Senyum/Frame 22.png'

export default function PasarSenyum() {
    var video1 = 'https://youtu.be/6jr9lHZArCI'
    video1 = video1.replace('https://youtu.be/', 'https://www.youtube.com/embed/')

    const frames = [
        {id: 1, frame: image1, isVideo: false},
        {id: 2, frame: video1, isVideo: true},
        {id: 3, frame: image2, isVideo: false},
        {id: 4, frame: image3, isVideo: false},
        {id: 5, frame: image4, isVideo: false},
        {id: 6, frame: image5, isVideo: false},
        {id: 7, frame: image6, isVideo: false},
        {id: 8, frame: image7, isVideo: false},
        {id: 9, frame: image8, isVideo: false}
    ]

    return (
      <div>
        {/* Hero */}
        <div className=" h-screen w-full bg-hdportofolio flex justify-center items-center text-white">
          <div className=" w-4/5">
            <div className="border-b pb-4 mb-8">
              <Image src={logo} />
            </div>
            <h3 className="uppercase font-black text-2xl mb-4">Project Info</h3>
            <div className="flex justify-between">
              <div className="w-5/12">
                <h6 className="uppercase text-lg">pasar senyum</h6>
                <p className=" text-sm">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="w-1/4">
                <div className=" mb-4">
                  <h5 className=" text-lg font-bold uppercase">
                    design director
                  </h5>
                  <p className=" text-sm">G. said Yunus</p>
                </div>
                <div className=" mb-4">
                  <h5 className=" text-lg font-bold uppercase">
                    graphic designer
                  </h5>
                  <p className=" text-sm">Alif Pratama</p>
                </div>
                <div className=" mb-4">
                  <h5 className=" text-lg font-bold uppercase">Project Lead</h5>
                  <p className=" text-sm">M. Iqbal Rizqi. S</p>
                </div>
              </div>
              <div className="w-1/4">
                <div className=" mb-4">
                  <h5 className=" text-lg font-bold uppercase">
                    design director
                  </h5>
                  <p className=" text-sm">G. said Yunus</p>
                </div>
                <div className=" mb-4">
                  <h5 className=" text-lg font-bold uppercase">
                    graphic designer
                  </h5>
                  <p className=" text-sm">Alif Pratama</p>
                </div>
                <div className=" mb-4">
                  <h5 className=" text-lg font-bold uppercase">Project Lead</h5>
                  <p className=" text-sm">M. Iqbal Rizqi. S</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar Top */}
        <Navlogo class="fixed top-6 left-[10%] z-50" />

        {/* Navbar Bottom */}
        <Navbottom class='fixed bottom-6 right-[10%] z-50 flex flex-col justify-between h-[90px]' />

        {/* Content all Image */}
        <div>
          {frames.map((frames) => {
            if (frames.isVideo) {
              return (
                <iframe
                  key={frames.id}
                  src={frames.frame}
                  frameBorder="0"
                  className=" w-full aspect-video"
                ></iframe>
              );
            }

            return (
              <div key={frames.id}>
                <Image src={frames.frame} layout="responsive" quality={60} />
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