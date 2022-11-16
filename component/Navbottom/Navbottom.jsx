// Module
import Link from 'next/link'

// Icon
import { IoIosArrowUp } from 'react-icons/io'
import { MdHome } from 'react-icons/md'

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
        {/* <div> */}
            <button className="bg-white h-12 aspect-square rounded-full flex justify-center items-center drop-shadow-icon cursor-pointer mb-3" onClick={topFunc} >
                <IoIosArrowUp color='#E09E00' size={32} />
            </button>
            <button className="bg-white h-12 aspect-square rounded-full flex justify-center items-center drop-shadow-icon cursor-pointer">
                <Link href="/" passHref>
                    <a>
                        <MdHome color='#E09E00' size={32} />
                    </a>
                </Link>
            </button>
            
        </div>
    )
}