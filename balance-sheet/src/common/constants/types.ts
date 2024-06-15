type Cell = {
  Value: string;
  Attributes: unknown;
};

export type Row = {
  Cells: Cell[] | null;
  RowType: string | null;
  Rows: Row[] | null;
  Title: string | null;
};

export type SheetData = {
  Fields?: unknown[];
  ReportDate: "string";
  ReportID?: "string";
  ReportName?: "string";
  ReportTitles: string[];
  ReportType?: "string";
  Rows: Row[];
  UpdatedDateUTC?: "string";
};

export type TableProps = {
  data: Row[];
};
