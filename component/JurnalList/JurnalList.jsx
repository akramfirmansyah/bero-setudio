import Link from "next/link"
import Image from 'next/image'

import Style from './JurnalList.module.css'

export default function JurnalLinkContent(props) {
    return (
      <li key={props.id} className={Style.warpli}>
        <Link
          href={{
            pathname: "/journals/[slugjurnal]",
            query: { slugjurnal: props.slug },
          }}
        >
          <a className={Style.linka}>
            <div className={Style.containerImage}>
              <Image src={props.thumbnail} alt='' layout='fill' />
            </div>
            <h3>{props.title}</h3>
          </a>
        </Link>
            <p className=" font-light text-white">
              {props.datePublish}
              <span className=" font-semibold"> by </span>
              {props.writer}
            </p>
      </li>
    );
}