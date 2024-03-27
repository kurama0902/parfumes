import Link from 'next/link'
import Image from 'next/image'

import s from './mobile-menu.module.css'
import { SetStateAction, useState } from 'react';

type visibilityOptions = {
    setMobMenuVisibility: React.Dispatch<SetStateAction<boolean>>;
}

export const MobileMenu = ({setMobMenuVisibility}: visibilityOptions) => {

    const [isClose, setIsClose] = useState<boolean>(false);

    const closeMobMenu = async () => {
        document.body.style.overflow = "scroll";
        setIsClose(true);
        setTimeout(() => {
            setMobMenuVisibility(false)
        }, 300)
    }

    return (
        <div className={`${s.mobileMenuWrap} ${isClose && s.closeAnimation}`}>
            <div className={s.mobBtns}>
                <button className={s.likedPopupBtn}>
                    <Image
                        src="/heart.svg"
                        width={30}
                        height={26}
                        unoptimized
                        alt="Liked button"
                    />
                </button>
                <button className={s.userPageBtn}>
                    <Image
                        src="/user.svg"
                        width={30}
                        height={26}
                        unoptimized
                        alt="User page button"
                    />
                </button>
                <Link className={s.cartLink} href="/cart">
                    <Image
                        src="/cart.svg"
                        width={30}
                        height={30}
                        unoptimized
                        alt="Cart link"
                    />
                </Link>
            </div>
            <nav className={s.mobileMenu}>
                <Link className={s.menuLink} href='#'>Каталог</Link>
                <Link className={s.menuLink} href='#'>Новини</Link>
                <Link className={s.menuLink} href='#'>Доставка</Link>
                <Link className={s.menuLink} href='#'>Про нас</Link>
                <Link className={s.menuLink} href='#'>Контакти</Link>
            </nav>
            <button onClick={closeMobMenu} className={s.closeModal}>
                <Image src='/cross.svg' unoptimized width={20} height={20} alt='cross'></Image>
            </button>
        </div>
    )
}