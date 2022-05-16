import { useRouter } from "next/router"
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
import axios from "axios"

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

const JournalsContent = ({ dataJournalsContent, dataJournals })=> {

  const JournalsContent = dataJournalsContent.data

    return (
      <div className="bg-jurnal">
        {/* Navbar Top */}
        <Navlogo class="fixed top-6 left-[10%] z-50" />

        {/* Navbar Bottom */}
        <Navbottom class="fixed bottom-6 right-[10%] z-50 flex flex-col justify-between h-[90px]" />
        {/* Banner */}
        <figure className="relative w-full h-[70vh]">
          <Image src={JournalsContent.thumbnail} alt='' layout="fill" objectFit="cover" />
        </figure>

        {/* Jurnal Content */}
        <main className="w-full flex justify-center text-white">
          <div className="w-4/5 border-b mb-10">
            <div className="w-full mt-12 border-b mb-8">
              <h3 className="font-bold text-6xl mb-6 capitalize">{JournalsContent.title}</h3>
              <p className=" font-semibold text-lg italic mb-4">
                <span className=" font-light not-italic">{'May 15, 2022'}</span> by{" "}
                <span className=" font-light not-italic">{JournalsContent.writer}</span>
              </p>
            </div>
            <div className=" text-2xl">
              <p>
                {JournalsContent.content}
              </p>

              <figure className="relative w-full aspect-[4/2] my-8">
                <Image src={JournalsContent.thumbnail} alt='' layout="fill" />
              </figure>

            </div>
            <div className=" flex mt-8 mb-7 text-lg">
              <div className=" mr-8">
                <p className=" font-semibold italic text-[#515151]">Writer</p>
                <p className=" font-light">{JournalsContent.writer}</p>
              </div>
              <div>
                <p className=" font-semibold italic text-[#515151]">Photo</p>
                <p className=" font-light">{photo}</p>
              </div>
            </div>
          </div>
        </main>

        {/* More Jurnal */}
        <div className=" text-white w-full flex flex-col">
          <h3 className=" text-center font-bold text-2xl mb-6">
            More Journals
          </h3>
          <ScrollContainer className="scroll-container w-full overflow-hidden whitespace-nowrap mb-12">
            {dataJournals.data.reverse().map((journal) => {
                return (
                  <div key={journal.id} className="w-1/4 inline-block mx-10">
                    <Link href={{
                      pathname: '/journals/[slug]',
                      query: {slug: journal.slug}
                    }}>
                      <a>
                        <figure className="relative w-full aspect-video mb-5">
                          <Image
                            src={journal.thumbnail}
                            alt=''
                            layout="fill"
                            objectFit="cover"
                          />
                        </figure>
                        <figcaption className="">
                            <h3 className="font-bold text-xl whitespace-normal mb-3">{journal.title}</h3>
                            <p className=" font-light text-xs">{'May 22, 2022'}</p>
                            <p className=" font-bold text-xs">
                            by <span className="font-light">{journal.writer}</span>
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

export async function getServerSideProps(context) {  
  const BASEURL = process.env.BASEURL
  const slug = context.params

  const getJournalContent = await axios.get(BASEURL+'/journals/'+slug.slug)
  const dataJournalsContent = await getJournalContent.data
  
  const getJournal = await axios.get(BASEURL+'/journals')
  const dataJournals = await getJournal.data
  return {
    props: {
      dataJournalsContent,
      dataJournals,
    }
  }
}

export default JournalsContent