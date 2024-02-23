import s from "./liked-modal.module.css";

export function LikedProductsModal({
  visibility,
  closeModal,
}: Readonly<{
  visibility: boolean;
  closeModal: () => void;
}>) {
  return (
    <div className={s["liked-modal-wrap"]}>
      <div onClick={closeModal} className={s["close-modal"]}></div>
      <div className={s["modal"]}></div>
    </div>
  );
}
