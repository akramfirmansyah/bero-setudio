// Module
import Link from 'next/link'

// Icon
import { AiFillHome } from 'react-icons/ai'
import { IoIosArrowUp } from 'react-icons/io'

// Function to Top Page
function topFunc() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
}

export default function Navbottom(props) {
    return (
        <div className={props.class}>
            <button className="bg-white h-[40px] aspect-square rounded-full flex justify-center items-center drop-shadow-icon cursor-pointer" onClick={topFunc} >
                <IoIosArrowUp color='#E09E00' size={32} />
            </button>
            <button className="bg-white h-[40px] aspect-square rounded-full flex justify-center items-center drop-shadow-icon">
                <Link href="/" passHref>
                    <a>
                        <AiFillHome color='#E09E00' size={32} />
                    </a>
                </Link>
            </button>
            
        </div>
    )
}