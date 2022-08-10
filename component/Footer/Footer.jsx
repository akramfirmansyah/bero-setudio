import Image from 'next/image'
import Link from 'next/link'
import { RiMailFill, RiPhoneFill } from 'react-icons/ri';

import style from './Footer.module.css'

import bgFooter from '../../public/Footer/Supergrafis Ungu.png'
import footerlogo from "../../public/Footer/Logo Warna.png";

export default function Footer() {
    return (
      <div id='footer' className={style.footer}>
        <figure className={style.figurefooter}>
          <Image src={bgFooter} alt="Supergrafis ungu" layout="fill" priority />
        </figure>
        <div className={style.footerbox}>
          <div className={style.footerhead}>
            <Link href="/">
              <a>
                <Image src={footerlogo} height={84} />
              </a>
            </Link>
            <h6 className={style.PTBSH}>PT. Beroperasi Sepenuh Hati</h6>
          </div>

          <div className={style.footercontent}>
            <div className={style.berosetudio}>
              <h4>Bero setudio</h4>
              <div className={style.beroaddress}>
                <div className={style.office}>
                  <h6>Office</h6>
                  <p>Jl. Progo no. 3 Citarum, Bandung Wetan, Kota Bandung.</p>
                </div>
                <div className={style.office}>
                  <h6>Studio</h6>
                  <p>Jl. Sidomukti no.99G, Cibeunying Kaler Kota Bandung.</p>
                </div>
              </div>
            </div>

            <div className={style.getintouch}>
              <h4>get in touch</h4>
              <div className={style.connect}>
                <div className={style.bgIcon}>
                  <RiMailFill size={18} color="#E09E00" />
                </div>
                <Link href="mailto:hello@berosetudio.com">
                  <a>hello@berosetudio.com</a>
                </Link>
              </div>
              <div className={style.connect}>
                <div className={style.bgIcon}>
                  <RiPhoneFill size={18} color="#E09E00" />
                </div>
                <Link href="https://wa.me/085600963500">
                  <a target='_blank'>0856 0096 3500</a>
                </Link>
              </div>
            </div>

            <div className={style.company}>
              <h4>company</h4>
              <div className={style.connect}>
                <Link href="/about">
                  <a>About Us</a>
                </Link>
              </div>
              <div className={style.connect}>
                <Link href="https://wa.me/085600963500">
                  <a>Contact Us</a>
                </Link>
              </div>
              <div className={style.connect}>
                <Link href="/portofolio">
                  <a>Our Works</a>
                </Link>
              </div>
              <div className={style.connect}>
                <Link href="#">
                  <a>Our Client</a>
                </Link>
              </div>
              <div className={style.connect}>
                <Link href="/journals">
                  <a>Journals</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}