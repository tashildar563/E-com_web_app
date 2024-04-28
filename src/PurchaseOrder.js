
import { useNavigate } from "react-router-dom";
import React from 'react';
import { useTable } from 'react-table';

const PurchaseOrder = () => {
    const navigate = useNavigate();
    const data = React.useMemo(
        () => [
            {
                col1: 'Hello',
                col2: 'World',
                col3: 'Hello',
                col4: 'World',
                col5: 'Hello',
                col6: 'World',
                col7: 'Hello',
                col8: 'World',

            },
            {
                col1: 'Hello',
                col2: 'World',
                col3: 'Hello',
                col4: 'World',
                col5: 'Hello',
                col6: 'World',
                col7: 'Hello',
                col8: 'World',
            },
            // more data...
        ],
        []
    );

    const columns = React.useMemo(
        () => [
            {
                Header: 'Purchased On',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'Purchased By',
                accessor: 'col2',
            },
            {
                Header: 'Purchase Order Number',
                accessor: 'col3',
            },
            {
                Header: 'Item',
                accessor: 'col4',
            },
            {
                Header: 'Units',
                accessor: 'col5',
            },
            {
                Header: 'Price per unit',
                accessor: 'col6',
            },
            {
                Header: 'Total Price',
                accessor: 'col7',
            },
            {
                Header: 'Units in stock',
                accessor: 'col8',
            },
        ],
        []
    );
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });
    return (<>
        <button onClick={() => navigate('/')}>
            Go Back
        </button>
        <table {...getTableProps()}  style={{margin: '20px auto', width: '80%', borderCollapse: 'collapse'}}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()} style={{backgroundColor: '#f2f2f2'}}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()} style={{padding: '12px', borderBottom: '1px solid #ddd'}}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row,i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} style={{backgroundColor: '#ADD8E6'}}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()} style={{padding: '12px', borderBottom: '1px solid #ddd'}}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>)

}
export default PurchaseOrder;