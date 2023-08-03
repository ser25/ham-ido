
const Vesting = () => {
    return (
        <div className={'vesting d-flex justify-content-between align-items-center gap-5'}>
            <div>
                <div className="vesting__title">Token vesting</div>
                <div className={'vesting__text'}>Claim available tokens from IDO token</div>
            </div>
            <div className={'vesting__image'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
            </div>
        </div>
    );
};

export default Vesting;