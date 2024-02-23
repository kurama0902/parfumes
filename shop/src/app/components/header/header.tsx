"use client";

import { useState } from "react";
import { LikedProductsModal } from "../likedProductsModal/";

import Link from "next/link";
import Image from "next/image";

import s from "./header.module.css";

export function Header() {
  const [visibility, setVisibility] = useState<boolean>(false);

  const closeModal = () => {
    document.body.style.overflow = "scroll";
    setVisibility(false);
  };

  const handleOpenModal = () => {
    document.body.style.overflow = "hidden";
    setVisibility(true);
  };

  return (
    <>
      <header className={s["header-wrap"]}>
        <Link className={s["logo-link"]} href="/">
          <Image
            src="/logo.svg"
            width={160}
            height={43}
            unoptimized
            alt="Copper Pro"
          />
        </Link>
        <nav className={s["page-links-wrap"]}>
          <ul className={s["public-links"]}>
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
          <ul className={s["users-links"]}>
            <button onClick={handleOpenModal} className={s["liked-popup-btn"]}>
              <Image
                src="/heart.svg"
                width={30}
                height={26}
                unoptimized
                alt="Liked button"
              />
            </button>
            <button className={s["user-page-btn"]}>
              <Image
                src="/user.svg"
                width={30}
                height={26}
                unoptimized
                alt="User page button"
              />
            </button>
            <Link className={s["cart-link"]} href="/cart">
              <Image
                src="/cart.svg"
                width={30}
                height={30}
                unoptimized
                alt="Cart link"
              />
            </Link>
          </ul>
        </nav>
      </header>
      {visibility && (
        <LikedProductsModal visibility={visibility} closeModal={closeModal} />
      )}
    </>
  );
}
