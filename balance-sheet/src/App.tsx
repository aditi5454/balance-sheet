import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/table/Table";

type Cell = {
  Value: string;
  Attributes: unknown;
};

export interface Row {
  Cells: Cell[] | null;
  RowType: string | null;
  Rows: Row[] | null;
  Title: string | null;
}

export interface SheetData {
  Fields?: unknown[];
  ReportDate: "string";
  ReportID?: "string";
  ReportName?: "string";
  ReportTitles: string[];
  ReportType?: "string";
  Rows: Row[];
  UpdatedDateUTC?: "string";
}

function App() {
  const [data, setData] = useState<SheetData>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/96e42f82-e75c-4a2f-96f0-3705392209bc"
        );
        const data = await response.json();
        setData(data.Reports[0]);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="heading">{data?.ReportID}</h1>
      <h2 className="heading">{data?.ReportTitles[1]}</h2>
      <h3 className="heading">{data?.ReportDate}</h3>
      <Table data={data?.Rows ?? []} />
    </div>
  );
}

export default App;
