import React from 'react';

type UnlimitedSaleInformationItem = {title: string, data: string}

const UnlimitedSaleInformationItem: React.FC<UnlimitedSaleInformationItem> = ({title, data}) => {
    return (
        <div className={'d-flex justify-content-between align-items-center gap-3'}>
            <div>{title}</div>
            <div>{data}</div>
        </div>
    );
};

export default UnlimitedSaleInformationItem;