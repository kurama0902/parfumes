import Image from 'next/image';

import s from './reviews-info.module.css';

export const ReviewsInfo = () => {
    const SIZE = new Array(3).fill(1);

    return (
        SIZE.map((el, index) => {
            return (
                <div className={s.reviewsWrap} key={index}>
                    <Image className={s.reviewUserImg} src="/reviewUserImg.jpeg" width={63} height={63} alt='user img'></Image>
                    <p className={s.userName}>Іван Іванов</p>
                    <p className={s.review}>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.</p>
                    <p className={s.date}>20.10.21</p>
                </div>
            )
        })
    )
}