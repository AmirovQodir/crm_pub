import { Pagination, PaginationProps } from "antd";
import { FC } from "react";

import './styles.scss';

interface IPaginationProps {
    onChange: (values: any) => void,
    total?: number,
    pageSize?: number,
    defaultCurrent?: number,
}

export const MainPagination: FC<IPaginationProps> = ({ onChange, total = 18, pageSize = 6, defaultCurrent = 1 }) => {

    const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
        if (type === 'prev') {
            return <a>Prev</a>;
        }
        if (type === 'next') {
            return <a>Next</a>;
        }
        return originalElement;
    };
    return <div className="main-pagination">
        <Pagination
            total={total}
            showTotal={(total, range) => `${range[0]}-${range[1]} из ${total}`}
            pageSize={pageSize}
            defaultCurrent={defaultCurrent}
            onChange={(page) => onChange({total, pageSize, page})}
            itemRender={itemRender}
        />
    </div>
}