import Image from "next/image";
import Link from "next/link";

import style from "./OurWork.module.css";

const OurWork = (props) => {
  return (
    <div className={style.container}>
      {props.work.data.map((work) => {
        if(props.work.data.length <= 9) {
          return (
            <Link href={{
              pathname: '/portofolio/[slugportofolio]',
              query: { slugportofolio: work.slug }
            }} key={work.id} passHref>
                <a className={style.owimage}>
                  <div className={style.zoomin}>
                    <figure>
                      <div className="w-full aspect-square relative">
                        <Image src={work.thumbnail} layout="fill" />
                      </div>
                      <figcaption className={style.imgtext}>
                        <h4>{work.title}</h4>
                        <p>{work.categories}</p>
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
