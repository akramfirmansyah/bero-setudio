// Style
import Style from './Carousel.module.css'

// Next Image
import Image from 'next/image';

// Image
import All from '../../public/Landing Page/Our Team/All.png'
import Iqbal from '../../public/Landing Page/Our Team/Iqbal.png'
import Uma from '../../public/Landing Page/Our Team/Uma.png'
import Agun from '../../public/Landing Page/Our Team/Agun.png'
import Rizki from '../../public/Landing Page/Our Team/Rizki.png'
import Alif from '../../public/Landing Page/Our Team/Alif.png'
import Yunus from '../../public/Landing Page/Our Team/Yunus.png'

// Variable
const team = [
  { id: 1, img: All },
  { id: 2, img: Iqbal },
  { id: 3, img: Uma },
  { id: 4, img: Agun },
  { id: 5, img: Rizki },
  { id: 6, img: Alif },
  { id: 7, img: Yunus },
];

export default function CarouselItem() {
    return (
      <div>
          <Image src={All} />
          <Image src={Iqbal} />
          <Image src={Alif} />
          <Image src={Agun} />
      </div>
    );
}