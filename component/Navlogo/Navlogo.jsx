// Module
import { useState } from 'react'
import Image from "next/image";
import Link from "next/link";

// Image
import White from "../../public/Logo Bero White.png";
import Color from "../../public/Logo Warna.png";

export default function Navlogo() {
  const [logo, setLogo] = useState(White);

  return (
    <div className="fixed top-6 left-[5%] z-50">
      <Link href="/">
        <a onMouseEnter={() => setLogo(Color)} onMouseLeave={() => setLogo(White)}>
          <Image src={logo} quality={100} height={65} width={148} id="logo" />
        </a>
      </Link>
    </div>
  );
}