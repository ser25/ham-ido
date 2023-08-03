import {Pie} from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';


const TokenAllocation = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
        labels: ['Public Sale', 'Airdrop', 'Farming Reward', 'Liquidity'],
        datasets: [
            {
                label: '',
                data: [50, 10, 10, 30],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div className={'token-allocation main-boarder'}>
            <div className={'token-allocation__title'}>Token Allocation</div>
            <div className={'d-flex justify-content-center'}>
                <div style={{width: '300px'}}>
                    <Pie data={data} />
                </div>
            </div>
        </div>
    );
};

export default TokenAllocation;