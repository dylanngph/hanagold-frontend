import classnames from 'classnames';
import Table from 'components/Table/Table';
import Thead from 'components/Table/Thead';
import { useMemo, Fragment } from 'react';
import { useTable, useSortBy } from 'react-table'
import AssetsCell from 'views/Trade/conponents/TokenizedStocks/TableTokenizedStocks/Cells/AssetsCell';
import ChangePriceCell from 'views/Trade/conponents/TokenizedStocks/TableTokenizedStocks/Cells/ChangePriceCell';
import PriceNowCell from 'views/Trade/conponents/TokenizedStocks/TableTokenizedStocks/Cells/PriceNowCell';
import VolumeDailyCell from 'views/Trade/conponents/TokenizedStocks/TableTokenizedStocks/Cells/VolumeDailyCell';

const TableTokenizedStocks = ({data}) => {
  const columns = useMemo(
      () => [
        {
          id: 'symbol',
          Header: 'Symbol',
          // eslint-disable-next-line react/prop-types
          Cell: ({row}) => {
            return <AssetsCell trade={row.original}/>
          },
          accessor: (row) =>  row.original?.market?.base
        },
        {
          id: 'volume',
          Header: '24h Volume',
          // eslint-disable-next-line react/prop-types
          Cell: ({row}) => {
            return <VolumeDailyCell trade={row.original}/>
          },
          accessor: (row) =>  row.original?.market?.info?.volumeUsd24h
        },
        {
          id: 'price',
          Header: 'Price Now',
          // eslint-disable-next-line react/prop-types
          Cell: ({row}) => {
            return <PriceNowCell trade={row.original}/>
          },
          accessor: (row) =>  row.original?.market?.info?.price
        },
        {
          id: 'change',
          Header: '24h Chg%',
          Cell: ({row}) => {
            return <ChangePriceCell trade={row.original}/>
          },
          accessor: (row) =>  row.original?.market?.info?.changeBod
        },
      ],
      []
  );

  const { getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
      {
        columns,
        data: data,
        autoResetSortBy: false,
      },
      useSortBy
  )

  return (
      <Table className="mt-4">
        <Thead>
        {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => {
                return (
                    <th
                        scope="col"
                        className={classnames(
                            column.id === 'volume' && 'hidden lg:table-cell',
                            column.id === 'change' && 'hidden sm:table-cell',
                        )}
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render('Header')}
                      <span>
                    {column.isSorted
                        ? column.isSortedDesc
                            ? <img src="/images/arrow-down.svg" className="inline-block ml-2 align-middle	"/>
                            : <img src="/images/arrow-up.svg" className="inline-block ml-2 align-middle	"/>
                        : <img src="/images/arrow-sort.png" className="inline-block ml-2 align-middle	"/>}
                  </span>
                    </th>
                )
              })}
            </tr>
        ))}
        </Thead>
        <tbody {...getTableBodyProps()}>
        {rows.length > 0 ? (
            rows.map((row, i) => {
              prepareRow(row)
              return (
                  <Fragment key={i}>
                    <tr className="bg-blue1" {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                            <td
                                className={classnames(
                                    cell.column.id === 'volume' && 'hidden lg:table-cell',
                                    cell.column.id === 'change' && 'hidden sm:table-cell',
                                )}
                                {...cell.getCellProps()}
                            >
                              {cell.render('Cell')}
                            </td>
                        )
                      })}
                    </tr>
                  </Fragment>
              )
            })
        ) : (
            <tr className="text-white text-center">
              <td className="py-2" colSpan={99999}>
                <p className="text-center">No Data</p>
              </td>
            </tr>
        )}
        </tbody>
      </Table>
  );
};

export default TableTokenizedStocks;