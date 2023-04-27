import { Table } from "antd";
import { FC } from "react";

import './styles.scss';

interface IDataTableProps {
    columns: any[];
    data: any[];
    onSelectRow: (index: any, value: any) => void
}

export const DataTable: FC<IDataTableProps> = ({ columns, data, onSelectRow }) => {
    return <div className="data-table">
        <Table columns={columns} dataSource={data} scroll={{ x: 'max-content'}} 
            pagination={false}
            onRow={(record, rowIndex) => {
                return {
                    onClick: event => onSelectRow(rowIndex, record),
                };
            }} />
    </div>
}