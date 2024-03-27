import Image from 'next/image';
import Link from 'next/link';

import s from './why-us.module.css';

export const WhyUs = () => {
    return (
        <div className={s.whyUsWrap}>
            <h1 className={s.whyUsLabel}>Чому вибирають нас</h1>
            <div className={s.descriptionWrap}>
                <div className={s.description}>
                    <div className={s.imgWrap}>
                        <Image src='/whyUsImgs/star.svg' width={40} height={40} unoptimized alt='Зірка' />
                    </div>
                    <p className={s.characteristic}>Аутентичность</p>
                    <p className={s.text}>Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.</p>
                    <Link className={s.link} href=''>
                        Читать больше
                        <Image src='/downArrow.svg' width={8} height={8} alt='arrow' />
                    </Link>
                </div>
                <div className={s.description}>
                    <div className={s.imgWrap}>
                        <Image src='/whyUsImgs/eye.svg' width={40} height={40} unoptimized alt='Зірка' />
                    </div>
                    <p className={s.characteristic}>Изысканность</p>
                    <p className={s.text}>Наши изделия из меди являются очень практичными. В то же время они наполнят особой магией ваш дом или рабочее....</p>
                    <Link className={s.link} href=''>
                        Читать больше
                        <Image src='/downArrow.svg' width={8} height={8} alt='arrow' />
                    </Link>
                </div>
                <div className={s.description}>
                    <div className={s.imgWrap}>
                        <Image src='/whyUsImgs/raiseMoney.svg' width={40} height={40} unoptimized alt='Зірка' />
                    </div>
                    <p className={s.characteristic}>Честная оплата</p>
                    <p className={s.text}>Мы стремимся предоставить лучший товар по лучшей цене с сервисом высокого уровня. Но все начинается c....</p>
                    <Link className={s.link} href=''>
                        Читать больше
                        <Image src='/downArrow.svg' width={8} height={8} alt='arrow' />
                    </Link>
                </div>
                <div className={s.description}>
                    <div className={s.imgWrap}>
                        <Image src='/whyUsImgs/flask.svg' width={40} height={40} unoptimized alt='Зірка' />
                    </div>
                    <p className={s.characteristic}>Большой ассортимент</p>
                    <p className={s.text}>У нас есть все от миниатюрных настольных паровых дистилляторов эфирных масел до крупногабаритного оборудования...</p>
                    <Link className={s.link} href=''>
                        Читать больше
                        <Image src='/downArrow.svg' width={8} height={8} alt='arrow' />
                    </Link>
                </div>
                <div className={s.description}>
                    <div className={s.imgWrap}>
                        <Image src='/whyUsImgs/hands.svg' width={40} height={40} unoptimized alt='Зірка' />
                    </div>
                    <p className={s.characteristic}>Доставка по всему миру</p>
                    <p className={s.text}>Вы можете получить нашу продукцию в кратчайшие сроки в любую точку земного шара.</p>
                    <Link className={s.link} href=''>
                        Читать больше
                        <Image src='/downArrow.svg' width={8} height={8} alt='arrow' />
                    </Link>
                </div>
                <div className={s.description}>
                    <div className={s.imgWrap}>
                        <Image src='/whyUsImgs/shields.svg' width={40} height={40} unoptimized alt='Зірка' />
                    </div>
                    <p className={s.characteristic}>Гарантия качества</p>
                    <p className={s.text}>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции.</p>
                    <Link className={s.link} href=''>
                        Читать больше
                        <Image src='/downArrow.svg' width={8} height={8} alt='arrow' />
                    </Link>
                </div>
                <div className={s.description}>
                    <div className={s.imgWrap}>
                        <Image src='/whyUsImgs/potion.svg' width={40} height={40} unoptimized alt='Зірка' />
                    </div>
                    <p className={s.characteristic}>Удобство в использовании</p>
                    <p className={s.text}>Наши изделия из меди имеют уникальный дизайн, который разрабатывался нами с целью получения максимальной...</p>
                    <Link className={s.link} href=''>
                        Читать больше
                        <Image src='/downArrow.svg' width={8} height={8} alt='arrow' />
                    </Link>
                </div>
                <div className={s.description}>
                    <div className={s.imgWrap}>
                        <Image src='/whyUsImgs/landscape.svg' width={40} height={40} unoptimized alt='Зірка' />
                    </div>
                    <p className={s.characteristic}>Забота об окружающей среде</p>
                    <p className={s.text}>От 2 до 5% от стоимости каждого приобретенного товара в нашем магазине мы направляем на защиту....</p>
                    <Link className={s.link} href=''>
                        Читать больше
                        <Image src='/downArrow.svg' width={8} height={8} alt='arrow' />
                    </Link>
                </div>
            </div>
        </div>
    )
}