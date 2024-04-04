import React, { memo, useCallback, useState } from "react";
import {
  Pagination,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Table as TableMUI,
  TableRow,
} from "@mui/material";
import * as S from "./style";

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right" | "center" | "left" | "inherit" | "justify";
  fontWeight?: number;
  format?: (value: number) => string;
}

interface Props {
  boldHead?: boolean;
  borderHead?: boolean;
  columns: Column[];
  rows?: { [x: string]: string | number }[];
}

const Table = ({ boldHead, borderHead, columns, rows }: Props): JSX.Element => {
  const [page, setPage] = useState(0);

  const handleChangePage = useCallback(
    (event: unknown, newPage: number) => setPage(newPage - 1),
    []
  );

  return (
    <S.Table $boldHead={boldHead} $borderHead={borderHead}>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <TableMUI stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={Math.random()}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.slice(page * 10, page * 10 + 10)?.map((row) => (
                <TableRow
                  key={Math.random()}
                  hover
                  role="checkbox"
                  tabIndex={-1}
                >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={Math.random()}
                        align={column?.align}
                        style={{ fontWeight: column?.fontWeight ?? 400 }}
                      >
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </TableMUI>
        </TableContainer>
        <Pagination
          key={Math.random()}
          shape="rounded"
          count={(rows?.length ?? 0) / 10}
          page={page + 1}
          onChange={handleChangePage}
        />
      </Paper>
    </S.Table>
  );
};

export default memo(Table);
