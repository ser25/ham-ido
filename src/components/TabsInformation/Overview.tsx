import TabsItem from "./TabsItem.tsx";


const Overview = () => {
    const tokenomics: {text: string}[] = [
        {
            text: 'Name: AlphaSui'
        },
        {
            text: 'Ticker: ALPHA'
        },
        {
            text: 'Blockchain: Sui'
        },
        {
            text: 'Total Supply (Max): 1,000,000,000 ALPHA'
        }
    ]
    const vestingSchedule: {text: string}[] = [
        {
            text: 'Public Sale: 100% unlocked at TGE'
        },
        {
            text: 'Liquidity: 50% unlocked at TGE, linear unlock by month for the first year.'
        },
        {
            text: 'Farming Reward: 0% unlocked at TGE, 100% vested block-by-block over 1 year'
        },
        {
            text: 'Airdrop: 2 months vesting, 3 months cliff, linear unlock starting from the 3th month'
        },
    ]
    const holderBenefit: {text: string}[] = [
        {
            text: 'Free mint for all future Alpha projects'
        },
        {
            text: 'Use ALPHA in Yield Farms to earn more ALPHA'
        },
        {
            text: 'Receive Airdrop: but what exactly is it? Let\'s look forward ' +
                'to discovering its benefits. But that\'s not all -- there\'s much more on the horizon for ALPHA!'
        },
    ]
    return (
        <div>
            <div className={'fw-bolder my-1'}>What is AlphaSui?</div>
            <div>
                AlphaSui is a unique representative token that combines the
                strengths of two of the fastest growing collections on Aptos - Alpha
                Sheep and Sui - Alpha Goat. With its unique features, AlphaSui has the potential to become a
                game-changer in the world of NFT. The Alpha Sheep collection has seen a massive increase in value,
                with its price increasing 80 times its original mint price. On the other hand,
                Sui's Alpha Goat collection has seen a significant increase in demand, with its floor price
                surpassing 800 Sui. AlphaSui brings these two collections together,
                creating a valuable token that combines the strengths of both.
            </div>
            <div className={'fw-bolder my-1'}>Tokenomics</div>
            <div>
                <ul>
                    {tokenomics.map(({text}) => <TabsItem key={text} text={text}/>)}
                </ul>
            </div>
            <div className={'fw-bolder my-1'}>Vesting Schedule</div>
            <div>
                <ul>
                    {vestingSchedule.map(({text}) => <TabsItem key={text} text={text} />)}
                </ul>
            </div>
            <div className={'fw-bolder my-1'}>Holder Benefit</div>
            <div>
                <ul>
                    {holderBenefit.map(({text}) => <TabsItem key={text} text={text} />)}
                </ul>
            </div>
        </div>
    );
};

export default Overview;