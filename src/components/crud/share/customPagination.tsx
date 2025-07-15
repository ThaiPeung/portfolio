"use client";

import React, { useState } from "react";

// -| Mui
import Pagination from "@mui/material/Pagination";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";

// -| Mui icon(s)

// -| Project

type FCType = {
  count: number;
  page: number;
  totalPages: number;
  setPage: (val: number) => void;
  pageSize: number;
  setPageSize: (val: number) => void;
};

const CustomPagination: React.FC<FCType> = ({
  count,
  page,
  totalPages,
  setPage,
  pageSize,
  setPageSize,
}) => {
  const [inputPage, setInputPage] = useState<string>("1");

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangePagePagination = (event: unknown, newPage: number) => {
    setPage(newPage - 1);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPageSize(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handlePageInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputPage(event.target.value);
  };

  const handleGoToPage = () => {
    const pageNumber = parseInt(inputPage, 10) - 1;
    if (pageNumber >= 0 && pageNumber < Math.ceil(count / pageSize)) {
      setPage(pageNumber);
    } else {
      alert("Invalid page number");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        placeItems: "center",
        gap: "20px",
        margin: "30px 0px 20px 0px",
        height: "70px",
        border: "0.1rem solid #fff",
        borderRadius: "1rem",
        padding: "1rem",
        boxShadow:
          "0 0 .1rem #fff, 0 0 .1rem #fff, 0 0 1rem #00b8d4, 0 0 0.4rem #00b8d4,0 0 .5rem #00b8d4,inset 0 0 .7rem #00b8d4",
        boxSizing: "border-box",
      }}
    >
        <TablePagination
          component="div"
          rowsPerPageOptions={[9, 15, 21]}
          count={count}
          rowsPerPage={pageSize}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            border: "none",
            padding: "0",
          }}
        />
      <Pagination
        count={totalPages}
        page={page + 1}
        boundaryCount={2}
        variant="outlined"
        color="primary"
        onChange={handleChangePagePagination}
      />
      <TextField
        label="Go to page"
        variant="outlined"
        size="small"
        value={inputPage}
        onChange={handlePageInputChange}
        style={{ margin: "0px 10px 0px 10px", width: "100px" }}
      />
      <Button variant="contained" onClick={handleGoToPage}>
        Go
      </Button>
    </Box>
  );
};

export default CustomPagination;
