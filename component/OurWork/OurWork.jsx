import Image from "next/image";
import Link from "next/link";

import style from "./OurWork.module.css";

const OurWork = (props) => {
  return (
    <div className={style.container}>
      {props.thumnail.map((thumnail) => {
        if (thumnail.title !== "_Blank") {
          return (
            <Link href={{
              pathname: '/portofolio/[slugportofolio]',
              query: { slugportofolio: thumnail.link }
            }} key={thumnail.id} passHref>
                <a className={style.owimage}>
                  <div className={style.zoomin}>
                    <figure>
                      <div className="w-full aspect-square relative">
                        <Image src={thumnail.img} layout="fill" priority />
                      </div>
                      <figcaption className={style.imgtext}>
                        <h4>{thumnail.title}</h4>
                        <p>{thumnail.text}</p>
                      </figcaption>
                    </figure>
                  </div>
              </a>
            </Link>
          );
        }
      })}
    </div>
  );
};

export default OurWork;
