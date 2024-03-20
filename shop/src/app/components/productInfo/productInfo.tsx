import s from './productInfo.module.css'



export const ProductInfo = ({sale}: {sale?: Boolean}) => {
    const SIZE = new Array(3).fill(1);

    return (
        SIZE.map((el, index) => {
            return (
                <div className={s.productSectionInfo} key={index}>
                    <img
                        className={s.productImg}
                        src={`https://picsum.photos/600/350?v=1`}
                        alt="Your alt text"
                    />
                    <div className={s.productDescWrap}>
                        <p className={s.productName}>Hui</p>
                        {
                            sale ? 
                            <div className={s.saleWrap}>
                                <div className={s.oldPriceWrap}>
                                    <p className={s.oldPrice}>1920$</p>
                                    <div className={s.crossLine}></div>
                                </div>
                                <p className={`${s.productPrice} ${s.redPrice}`}>1920$</p>
                            </div>
                                : 
                            <p className={s.productPrice}>1920$</p>
                        }
                    </div>
                    {sale && <p className={s.saleLabel}>Скидка</p>}
                    <button className={s.likeButton}>
                        <svg width="30.012085" height="26.370117" viewBox="0 0 30.0121 26.3701" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Vector" d="M21.8811 0C20.4735 0.0219727 19.0967 0.414795 17.8895 1.13916C16.6824 1.86328 15.6877 2.89331 15.0061 4.125C14.3243 2.89331 13.3297 1.86328 12.1226 1.13916C10.9155 0.414795 9.53857 0.0219727 8.1311 0C5.88721 0.0974121 3.77319 1.0791 2.25073 2.73022C0.728394 4.38159 -0.0786133 6.56812 0.00610352 8.8125C0.00610352 14.4963 5.98853 20.7039 11.0061 24.9126C12.1263 25.854 13.5427 26.3701 15.0061 26.3701C16.4694 26.3701 17.8857 25.854 19.0061 24.9126C24.0236 20.7039 30.0061 14.4963 30.0061 8.8125C30.0907 6.56812 29.2837 4.38159 27.7614 2.73022C26.2389 1.0791 24.1249 0.0974121 21.8811 0ZM17.3998 23C16.7297 23.5642 15.882 23.8735 15.0061 23.8735C14.1301 23.8735 13.2823 23.5642 12.6123 23C6.18982 17.6113 2.5061 12.4412 2.5061 8.8125C2.42065 7.23096 2.96399 5.67969 4.0177 4.49707C5.07153 3.3147 6.55005 2.59668 8.1311 2.5C9.71204 2.59668 11.1906 3.3147 12.2444 4.49707C13.2981 5.67969 13.8416 7.23096 13.7561 8.8125C13.7561 9.14404 13.8877 9.46191 14.1222 9.69629C14.3566 9.93091 14.6746 10.0625 15.0061 10.0625C15.3375 10.0625 15.6555 9.93091 15.8899 9.69629C16.1244 9.46191 16.2561 9.14404 16.2561 8.8125C16.1707 7.23096 16.714 5.67969 17.7677 4.49707C18.8215 3.3147 20.3 2.59668 21.8811 2.5C23.462 2.59668 24.9406 3.3147 25.9944 4.49707C27.0481 5.67969 27.5916 7.23096 27.5061 8.8125C27.5061 12.4412 23.8223 17.6113 17.3998 22.9951L17.3998 23Z" fill="#031412" fillOpacity="1.000000" fillRule="nonzero" />
                        </svg>
                    </button>
                </div>
            )
        })
    )
}