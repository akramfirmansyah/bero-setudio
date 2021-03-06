// Module
import Image from "next/image";
import Link from "next/link";

// Image
import White from "../../public/Logo Bero White.png";
import Color from "../../public/Bero Logogram.png";

export default function Navlogo(props) {
  return (
    <div className={props.class}>
      <Link href="/">
        <a>
          <Image src={White} quality={100} height={65} width={148} id="logo" />
        </a>
      </Link>
    </div>
  );
}