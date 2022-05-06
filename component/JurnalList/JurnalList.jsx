import Link from "next/link"
import Image from 'next/image'

import Style from './JurnalList.module.css'

export default function JurnalLinkContent(props) {
    return (
      <li key={props.id} className={Style.warpli}>
        <Link
          href={{
            pathname: "/jurnal/[slugjurnal]",
            query: { slugjurnal: props.link },
          }}
        >
          <a className={Style.linka}>
            <div className={Style.containerImage}>
              <Image src={props.img} layout='fill' />
            </div>
            <h3>{props.title}</h3>
            <p>
              {props.datePublish}
              <span> by </span>
              {props.publisher}
            </p>
          </a>
        </Link>
      </li>
    );
}