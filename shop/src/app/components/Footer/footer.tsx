import Link from 'next/link'
import Image from 'next/image'

import s from './footer.module.css'

export const Footer = () => {
    return (
        <footer className={s.footerWrap}>
            <div className={s.footer}>
                <div className={s.confidentiality}>
                    <Image src='/logo.svg' width={175} height={47} alt='logo' unoptimized />
                    <p className={s.confText}>© 2021 “Copper Pro” Всі права захищені</p>
                    <Link className={s.confPolitics} href='#'>Політика конфіденційності</Link>
                </div>
                <div className={s.navigationWrap}>
                    <nav className={s.navWrap}>
                        <p className={s.navLabel}>Навігація</p>
                        <Link className={s.navLink} href='#'>Каталог</Link>
                        <Link className={s.navLink} href='#'>Новини</Link>
                        <Link className={s.navLink} href='#'>Доставка</Link>
                        <Link className={s.navLink} href='#'>Про нас</Link>
                        <Link className={s.navLink} href='#'>Контакти</Link>
                    </nav>
                    <nav className={s.catalogWrap}>
                        <p className={s.catLabel}>Каталог</p>
                        <Link className={s.navLink} href='#'>Для ефірних масел</Link>
                        <Link className={s.navLink} href='#'>Для гідролатів</Link>
                        <Link className={s.navLink} href='#'>Мідний посуд</Link>
                        <Link className={s.navLink} href='#'>Аксесуари з міді</Link>
                        <Link className={s.navLink} href='#'>Індивідуальне замовлення</Link>
                        <Link className={s.navLink} href='#'>Знижки та пропозиції</Link>
                    </nav>
                    <address className={s.contacts}>
                        <p className={s.conLabel}>Контакти</p>
                        <p className={s.address}>Бажана 8-Б, Киев, 02132 Украина</p>
                        <p className={s.number}>+38 {'('}096{')'} 990 67 56</p>
                        <p className={s.email}>a.alambik@gmail.com</p>
                    </address>
                </div>
            </div>
            <Link className={s.goUp} href='#anchor'>Уверх</Link>
        </footer>
    )
}