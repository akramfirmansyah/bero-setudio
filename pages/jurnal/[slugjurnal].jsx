import Image from "next/image"
import Link from "next/link"
import ScrollContainer from 'react-indiana-drag-scroll'

// Component
import Navlogo from "../../component/Navlogo/Navlogo"
import Navbottom from "../../component/Navbottom/Navbottom"
import Footer from "../../component/Footer/Footer"

// Image
import Banner from '../../public/Jurnal/Isi Jurnal/unsplash_br2HgQuvq6I.png'
import image01 from '../../public/Jurnal/Isi Jurnal/unsplash_G95AReIh_Ko.png'
import image02 from '../../public/Jurnal/Isi Jurnal/unsplash_f3P6xfrj2P8.png'
import image03 from '../../public/Jurnal/Isi Jurnal/unsplash_xYkVtNlkWOE.png'
import image04 from '../../public/Jurnal/Isi Jurnal/unsplash_F2h_WbKnX4o.png'

import more01 from '../../public/Jurnal/Isi Jurnal/unsplash_ZSPBhokqDMc.png'
import more02 from '../../public/Jurnal/Isi Jurnal/unsplash_BHOcoo6dr0E.png'
import more03 from '../../public/Jurnal/Isi Jurnal/unsplash_Y2oE2uNLSrs.png'
import more04 from '../../public/Jurnal/Isi Jurnal/unsplash_lhltMGdohc8.png'
import more05 from '../../public/Jurnal/Isi Jurnal/unsplash_qC2n6RQU4Vw.png'
import more06 from '../../public/Jurnal/Isi Jurnal/unsplash_qWwpHwip31M.png'

// Variabel
const title = 'Judul Artikelnya Lorem Ipsum'
const titlemore = 'Judul Artikelnya Beneran Lorem Ipsum'
const datepublish = '15 Dec 2021'
const publisher = 'Alif Pratama'
const writer = 'Alif Pratama'
const photo = 'Unsplash'

const moreJurnals = [
    {id: 1, image:more01, title:titlemore, date:datepublish, publisher:publisher},
    {id: 2, image:more02, title:titlemore, date:datepublish, publisher:publisher},
    {id: 3, image:more01, title:titlemore, date:datepublish, publisher:publisher},
    {id: 4, image:more03, title:titlemore, date:datepublish, publisher:publisher},
    {id: 5, image:more04, title:titlemore, date:datepublish, publisher:publisher},
    {id: 6, image:more05, title:titlemore, date:datepublish, publisher:publisher},
    {id: 7, image:more06, title:titlemore, date:datepublish, publisher:publisher},
]

const jurnal1 = ()=> {
    return (
      <div className="bg-jurnal">
        {/* Navbar Top */}
        <Navlogo class="fixed top-6 left-[10%] z-50" />

        {/* Navbar Bottom */}
        <Navbottom class="fixed bottom-6 right-[10%] z-50 flex flex-col justify-between h-[90px]" />
        {/* Banner */}
        <figure className="relative w-full h-[70vh]">
          <Image src={Banner} alt='' layout="fill" objectFit="cover" />
        </figure>

        {/* Jurnal Content */}
        <div className="w-full flex justify-center text-white">
          <div className="w-4/5 border-b mb-10">
            <div className="w-full mt-12 border-b mb-8">
              <h3 className="font-bold text-6xl mb-6 capitalize">{title}</h3>
              <p className=" font-semibold text-lg italic mb-4">
                <span className=" font-light not-italic">{datepublish}</span> by{" "}
                <span className=" font-light not-italic">{publisher}</span>
              </p>
            </div>
            <div className=" text-2xl">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Fames ac turpis egestas maecenas pharetra convallis posuere
                morbi. Vulputate sapien nec sagittis aliquam malesuada bibendum.
                Amet mauris commodo quis imperdiet massa tincidunt. Arcu risus
                quis varius quam quisque id diam vel quam. Quisque id diam vel
                quam. Fermentum iaculis eu non diam phasellus vestibulum lorem
                sed. Turpis tincidunt id aliquet risus. Potenti nullam ac tortor
                vitae. Duis at consectetur lorem donec. Purus faucibus ornare
                suspendisse sed nisi lacus sed viverra tellus. Elementum nibh
                tellus molestie nunc non blandit. Nam aliquam sem et tortor
                consequat id porta.
              </p>

              <figure className="relative w-full my-8">
                <Image src={image01} alt='' layout="responsive" />
              </figure>

              <p>
                Sed augue lacus viverra vitae congue eu. Euismod nisi porta
                lorem mollis aliquam. Pellentesque id nibh tortor id aliquet.
                Placerat orci nulla pellentesque dignissim enim sit amet
                venenatis urna. Nulla porttitor massa id neque. Porttitor lacus
                luctus accumsan tortor posuere ac ut consequat. Odio tempor orci
                dapibus ultrices in. Consequat id porta nibh venenatis cras sed
                felis. Sit amet commodo nulla facilisi nullam vehicula ipsum.
                Neque aliquam vestibulum morbi blandit cursus risus at. Interdum
                varius sit amet mattis vulputate. Tellus in hac habitasse platea
                dictumst vestibulum rhoncus est. Scelerisque mauris pellentesque
                pulvinar pellentesque. Elementum integer enim neque volutpat ac
                tincidunt vitae semper quis. Elit scelerisque mauris
                pellentesque pulvinar pellentesque habitant. Ultricies mi quis
                hendrerit dolor magna eget est lorem. Sapien pellentesque
                habitant morbi tristique senectus.
              </p>

              <figure className="relative w-full my-8">
                <Image src={image02} alt='' layout="responsive" />
              </figure>

              <p>
                Viverra nam libero justo laoreet. Nibh praesent tristique magna
                sit amet purus gravida quis blandit. Id volutpat lacus laoreet
                non curabitur gravida. Tellus molestie nunc non blandit. Feugiat
                nisl pretium fusce id velit. Tortor vitae purus faucibus ornare
                suspendisse sed nisi lacus. Enim facilisis gravida neque
                convallis a cras semper. Lobortis feugiat vivamus at augue eget
                arcu dictum varius duis. Varius duis at consectetur lorem donec.
                Ut sem nulla pharetra diam sit. Purus ut faucibus pulvinar
                elementum integer enim. Volutpat maecenas volutpat blandit
                aliquam etiam. Amet mattis vulputate enim nulla aliquet. Amet
                consectetur adipiscing elit duis tristique sollicitudin nibh.
              </p>

              <figure className="relative w-full my-8">
                <Image src={image03} alt='' layout="responsive" />
              </figure>
              <figure className="relative w-full my-8">
                <Image src={image04} alt='' layout="responsive" />
              </figure>

              <p>
                Etiam erat velit scelerisque in dictum non consectetur a.
                Vestibulum sed arcu non odio euismod lacinia at quis risus.
                Aliquet risus feugiat in ante metus dictum at tempor commodo.
                Viverra aliquet eget sit amet tellus cras. Morbi tristique
                senectus et netus et malesuada fames ac turpis. Massa eget
                egestas purus viverra accumsan in nisl. Fames ac turpis egestas
                sed tempus urna. Est placerat in egestas erat imperdiet sed
                euismod nisi. Aliquam etiam erat velit scelerisque in dictum non
                consectetur a. Facilisis mauris sit amet massa vitae tortor
                condimentum.
              </p>
            </div>
            <div className=" flex mt-8 mb-7 text-lg">
              <div className=" mr-8">
                <p className=" font-semibold italic text-[#515151]">Writer</p>
                <p className=" font-light">{writer}</p>
              </div>
              <div>
                <p className=" font-semibold italic text-[#515151]">Photo</p>
                <p className=" font-light">{photo}</p>
              </div>
            </div>
          </div>
        </div>

        {/* More Jurnal */}
        <div className=" text-white w-full flex flex-col">
          <h3 className=" text-center font-bold text-2xl mb-6">
            More Journals
          </h3>
          <ScrollContainer className="scroll-container w-full overflow-hidden whitespace-nowrap mb-12">
            {moreJurnals.map((more) => {
                return (
                  <div key={more.id} className="w-1/4 inline-block mx-10">
                    <Link href="#">
                      <a>
                        <figure className="relative w-full aspect-video mb-5">
                          <Image
                            src={more.image}
                            alt=''
                            layout="fill"
                            objectFit="cover"
                          />
                        </figure>
                        <figcaption className="">
                            <h3 className="font-bold text-xl whitespace-normal mb-3">{more.title}</h3>
                            <p className=" font-light text-xs">{more.date}</p>
                            <p className=" font-bold text-xs">
                            by <span className="font-light">{more.publisher}</span>
                            </p>
                        </figcaption>
                      </a>
                    </Link>
                  </div>
                );
            })}
          </ScrollContainer>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    );
}

export default jurnal1