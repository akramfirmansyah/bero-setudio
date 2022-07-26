// Module
import { useState } from 'react'
import Image from "next/image";
import Link from "next/link";

// Image
import White from "../../public/Logo Bero White.png";
import Color from "../../public/Bero Logogram.png";

export default function Navlogo(props) {
  const [logo, setLogo] = useState(White);

  return (
    <div className={props.class}>
      <Link href="/">
        <a onMouseEnter={() => setLogo(Color)} onMouseLeave={() => setLogo(White)}>
          <Image src={logo} quality={100} height={65} width={148} id="logo" />
        </a>
      </Link>
    </div>
  );
}