import Image from "next/image";
import Link from 'next/link'

// Component
import Navlogo from "../../component/Navlogo/Navlogo";
import Navbottom from "../../component/Navbottom/Navbottom";
import Footer from "../../component/Footer/Footer";

// Image
import img1 from '../../public/Portofolio_Show All Page/unsplash_9SyOKYrq-rE.png'
import img2 from '../../public/Portofolio_Show All Page/unsplash_oUUBhKsQtFo.png'
import img3 from '../../public/Portofolio_Show All Page/unsplash_443x_HqPtgY.png'
import img4 from '../../public/Portofolio_Show All Page/unsplash_xXmt_9OmANw.png'
import img5 from '../../public/Portofolio_Show All Page/unsplash_3iiyde9Zj8A.png'
import img6 from '../../public/Portofolio_Show All Page/unsplash_XLqE3Xj8axw.png'
import img7 from '../../public/Portofolio_Show All Page/unsplash_gwNAgJqeAUo.png'
import img8 from '../../public/Portofolio_Show All Page/unsplash_csJt89dL9pE.png'
import img9 from '../../public/Portofolio_Show All Page/unsplash_AUuBY_z0Ud0.png'

export default function AllJournals() {
    const thumnail = [
        {id:1, image:img1, link:'#', title:'lorem ipsum', subtitle:'lorem ipsum'},
        {id:2, image:img2, link:'#', title:'lorem ipsum', subtitle:'lorem ipsum'},
        {id:3, image:img3, link:'#', title:'lorem ipsum', subtitle:'lorem ipsum'},
        {id:4, image:img4, link:'#', title:'lorem ipsum', subtitle:'lorem ipsum'},
        {id:5, image:img5, link:'#', title:'lorem ipsum', subtitle:'lorem ipsum'},
        {id:6, image:img6, link:'#', title:'lorem ipsum', subtitle:'lorem ipsum'},
        {id:7, image:img7, link:'#', title:'lorem ipsum', subtitle:'lorem ipsum'},
        {id:8, image:img8, link:'#', title:'lorem ipsum', subtitle:'lorem ipsum'},
        {id:9, image:img9, link:'#', title:'lorem ipsum', subtitle:'lorem ipsum'}
    ]

    return (
      <div>
        {/* Navbar Top */}
        <Navlogo class="fixed top-6 left-[10%] z-50" />

        {/* Navbar Bottom */}
        <Navbottom class="fixed bottom-6 right-[10%] z-50 flex flex-col justify-between h-[90px]" />
        
        {/* Content */}
        {thumnail.map((thumbail) => {
          return (
            <div className=" relative w-full h-[400px]">
              <figure className="absolute w-full h-full overflow-hidden">
                <Image src={thumbail.image} layout="fill" />
              </figure>
              <div className="text-white z-[1] absolute right-[10%] bottom-[20%]">
                <h3 className=" text-5xl font-bold capitalize">
                  {thumbail.title}
                </h3>
                <p className=" text-xl font-light capitalize mb-4">
                  {thumbail.subtitle}
                </p>
                <Link href={thumbail.link} passHref>
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