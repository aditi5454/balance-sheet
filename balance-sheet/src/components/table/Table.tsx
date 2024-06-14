import { Row } from "../../App";
import "./Table.css";

interface TableProps {
  data: Row[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="table">
      {data && data.length > 0 && (
        <>
          {data.map((item: Row, index: number) => {
            if (item.RowType === "Header") {
              return (
                <thead key={index}>
                  <tr className="tr">
                    {item.Cells &&
                      item.Cells.length > 0 &&
                      item.Cells.map((cell, cellIndex) => (
                        <th className="table-heading" key={cellIndex}>
                          {cell.Value}
                        </th>
                      ))}
                  </tr>
                </thead>
              );
            } else {
              return (
                <tbody key={index}>
                  {item.Title && (
                    <tr className="section-header">
                      <td className="table-data" colSpan={3}>
                        {item.Title}
                      </td>
                    </tr>
                  )}
                  {item.Rows?.map((row, rowIndex) => (
                    <tr
                      className={row.RowType === "Row" ? "" : "summary-row"}
                      key={rowIndex}
                    >
                      {row.Cells?.map((cell, cellIndex) => (
                        <td className="table-data" key={cellIndex}>
                          {cell.Value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              );
            }
          })}
        </>
      )}
    </table>
  );
};

export default Table;
