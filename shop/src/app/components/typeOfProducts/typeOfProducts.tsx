import Link from "next/link";

import s from './type-of-products.module.css'

export function TypeOfProducts() {
    return (
        <div className={s['type-of-products-wrap']}>
            <h1 className={s['label']}>НАША ПРОДУКЦІЯ</h1>
            <div className={s['type-of-products']}>
                <Link href='/' className={`${s['type']} ${s['type-1']}`}>
                    <div className={`${s['gradient']} ${s['gradient-1']}`}></div>
                    <p className={s['type-description']}>Для ефірних масел</p>
                </Link>
                <Link href='/' className={`${s['type']} ${s['type-2']}`}>
                    <div className={`${s['gradient']} ${s['gradient-2']}`}></div>
                    <p className={s['type-description']}>Для гідролатів</p>
                </Link>
                <Link href='/' className={`${s['type']} ${s['type-3']}`}>
                    <div className={`${s['gradient']} ${s['gradient-3']}`}></div>
                    <p className={s['type-description']}>Мідний посуд</p>
                </Link>
                <Link href='/' className={`${s['type']} ${s['type-4']}`}>
                    <div className={`${s['gradient']} ${s['gradient-4']}`}></div>
                    <p className={s['type-description']}>Аксесуари з міді</p>
                </Link>
                <Link href='/' className={`${s['type']} ${s['type-5']}`}>
                    <div className={`${s['gradient']} ${s['gradient-5']}`}></div>
                    <p className={s['type-description']}>Індивідумальне замовлення</p>
                </Link>
                <Link href='/' className={`${s['type']} ${s['type-6']}`}>
                    <div className={`${s['gradient']} ${s['gradient-6']}`}></div>
                    <p className={s['type-description']}>Товари зі знижками</p>
                </Link>
            </div>
        </div>
    )
}