"use client";

import { useState } from "react";
import { LikedProductsModal } from "../likedProductsModal/";
import { MobileMenu } from "../mobileMenu";

import Link from "next/link";
import Image from "next/image";

import s from "./header.module.css";

export function Header() {
  const [visibility, setVisibility] = useState<boolean>(false);
  const [mobMenuVisibility, setMobMenuVisibility] = useState<boolean>(false);

  const closeModal = () => {
    document.body.style.overflow = "scroll";
    setVisibility(false);
  };

  const handleOpenModal = () => {
    document.body.style.overflow = "hidden";
    setVisibility(true);
  };

  const handleOpenMobMenu = () => {
    document.body.style.overflow = "hidden";
    setMobMenuVisibility(true);
  };

  return (
    <>
      <header className={s.headerWrap}>
        <Link className={s.logoLink} href="/">
          <Image className={s.logoImg}
            src="/logo.svg"
            width={160}
            height={43}
            unoptimized
            alt="Copper Pro"
          />
        </Link>
        <nav className={s.pageLinksWrap}>
          <ul className={s.publicLinks}>
            <Link className="catalog-link" href="/catalog">
              Каталог
            </Link>
            <Link className="news-link" href="/news">
              Новини
            </Link>
            <Link className="delivery-link" href="/delivery">
              Доставка
            </Link>
            <Link className="about-us-link" href="/about-us">
              Про нас
            </Link>
            <Link className="contacts-link" href="/contacts">
              Контакти
            </Link>
          </ul>
          <ul className={s.userLinks}>
            <button onClick={handleOpenModal} className={s.likedPopupBtn}>
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
            <button onClick={handleOpenMobMenu} className={s.mobMenuBtn}>
              <Image src="/burger-menu.svg" width={20} height={20} unoptimized alt="menu button"/>
            </button>
          </ul>
        </nav>
      </header>
      {visibility && (
        <LikedProductsModal visibility={visibility} closeModal={closeModal} />
      )}
      {mobMenuVisibility && <MobileMenu setMobMenuVisibility={setMobMenuVisibility} />}
    </>
  );
}
