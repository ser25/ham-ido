import Vesting from "./Vesting.tsx";
import Sale from "./Sale.tsx";
import TokenAllocation from "./TokenAllocation.tsx";

const MainLeft = () => {
    return (
        <div className={'main-left'}>
            <div className={'main-left__body main-boarder'}>
                <Vesting/>
                <Sale/>
            </div>
            <TokenAllocation/>

        </div>
    );
};

export default MainLeft;