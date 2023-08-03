import React from 'react';

type TabsItemProps = {
    text: string
}

const TabsItem: React.FC<TabsItemProps> = ({text}) => {
    return (
        <li className={'d-flex align-items-center gap-2'}>
            <div className={'circle'}></div>
            <div>{text}</div>
        </li>
    );
};

export default TabsItem;