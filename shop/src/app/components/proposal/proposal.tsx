import s from './proposal.module.css';

export const Proposal = () => {
    return (
        <div className={s.proposalWrap}>
            <div className={s.proposal}>
                <h1 className={s.proposalLabel}>1 + 1 = 3</h1>
                <p className={s.proposalDescription}>Закажите два товара и получите третий бесплатно</p>
                <button className={s.catalogBtn}>Go to catalog</button>
            </div>
        </div>
    )
}