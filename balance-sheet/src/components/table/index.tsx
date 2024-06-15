import { Row, TableProps } from "../../common/constants/types";
import "./Table.css";
import TableHeader from "./table-header";
import TableSection from "./table-section";

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="table">
      {data?.length > 0 && (
        <>
          {data.map((item: Row, index: number) => {
            if (item.RowType === "Header") {
              return <TableHeader key={index} item={item} />;
            } else {
              return <TableSection key={index} item={item} />;
            }
          })}
        </>
      )}
    </table>
  );
};

export default Table;
