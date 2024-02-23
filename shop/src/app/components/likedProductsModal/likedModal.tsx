import s from './liked-modal.module.css'

export function LikedProductsModal({visibility, setVisibility} : {
    visibility: boolean,
    setVisibility: Function
}) {
    return (
        <div className={s['liked-modal-wrap']}>
            <div onClick={() => {
                document.body.style.overflow = 'scroll';
                setVisibility(false);
            }} className={s['close-modal']}></div>
            <div className={s['modal']}></div>
        </div>
    )
}