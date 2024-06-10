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
import ChevronDown from "../../assets/icons/ChevronDown";
import ChevronUp from "../../assets/icons/ChevronUp";
import Select from "../Inputs/select";
import * as S from "./style";

export interface Column {
  id: string;
  label?: string;
  minWidth?: number;
  align?: "right" | "center" | "left" | "inherit" | "justify";
  fontWeight?: number;
  format?: (value: number) => string;
  orderBy?: boolean;
  type?: "action" | "select" | "number" | "text";
  values?: { label: string; value: string }[];
  onChange?: (value: string, index: number) => void;
}

interface Props {
  boldHead?: boolean;
  borderHead?: boolean;
  columns: Column[];
  rows?: { [x: string]: string | number }[];
  actions?: {
    type: string;
    text: string;
    icon?: JSX.Element;
    onClick: (item: { [x: string]: string | number }) => void;
  }[];
}

const Table = ({
  boldHead,
  borderHead,
  columns,
  rows,
  actions,
}: Props): JSX.Element => {
  const [page, setPage] = useState(0);
  const [orderBy, setOrderBy] = useState<string>();
  const [asc, setAsc] = useState(true);

  const onSort = useCallback((id: string) => {
    setAsc((prev) => !prev);
    setOrderBy(id);
  }, []);

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
                    align={column?.align}
                    style={{ minWidth: column?.minWidth }}
                  >
                    <S.HeadCel>
                      {column?.label ?? ""}
                      {column?.orderBy && (
                        <button onClick={() => onSort(column?.id)}>
                          {orderBy === column.id && !asc ? (
                            <ChevronUp />
                          ) : (
                            <ChevronDown />
                          )}
                        </button>
                      )}
                    </S.HeadCel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows && rows?.length > 0 ? (
                rows?.slice(page * 10, page * 10 + 10)?.map((row, index) => (
                  <TableRow
                    key={Math.random()}
                    hover
                    role="checkbox"
                    tabIndex={-1}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];

                      if (
                        column?.type === "action" &&
                        actions &&
                        actions?.length
                      )
                        return (
                          <TableCell key={Math.random()} className="action">
                            {actions?.map((action) => (
                              <S.Action
                                onClick={() => action.onClick(row)}
                                $type={action?.type}
                              >
                                <div>
                                  {action.text}
                                  {action?.icon}
                                </div>
                              </S.Action>
                            ))}
                          </TableCell>
                        );

                      if (column?.type === "select" && column?.values)
                        return (
                          <TableCell key={Math.random()}>
                            <Select
                              variant="outlined"
                              label="Biker"
                              options={column?.values}
                              value={value}
                              onChange={(e) => {
                                if (column?.onChange)
                                  column?.onChange(
                                    e.target.value as string,
                                    index
                                  );
                              }}
                              classname="width-auto"
                            />
                          </TableCell>
                        );

                      return (
                        <TableCell
                          key={Math.random()}
                          align={column?.align}
                          style={{ fontWeight: column?.fontWeight ?? 400 }}
                        >
                          {column?.format && typeof value === "number"
                            ? column?.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))
              ) : (
                <S.Empty>Não há dados</S.Empty>
              )}
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
