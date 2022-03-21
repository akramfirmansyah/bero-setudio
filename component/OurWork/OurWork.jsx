import Image from 'next/image'

import style from './OurWork.module.css'

const OurWork = (props) => {
    return (
        <div className={style.container}>{
            props.thumnail.map((thumnail) => {
              if(thumnail.title !== '_Blank'){
                return (
                  <div className={style.owimage} key={thumnail.id}>
                    <div className={style.zoomin}>
                      <figure>
                        <div className='w-full aspect-square'>
                          <Image src={thumnail.img} layout='fill' />
                        </div>
                        <figcaption className={style.imgtext}>
                          <h4>{thumnail.title}</h4>
                          <p>{thumnail.text}</p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                );
              }
            })
        }
        </div>
    )
}

export default OurWork;