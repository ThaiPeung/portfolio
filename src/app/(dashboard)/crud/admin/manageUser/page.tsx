"use client";

import React, {
  Ref,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import axios from "axios";

//-| Mui
import {
  Badge,
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Popover,
  Rating,
  RatingProps,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  ColumnsPanelTrigger,
  DataGrid,
  FilterPanelTrigger,
  GridActionsCellItem,
  GridColDef,
  GridFilterModel,
  GridPaginationModel,
  GridSortModel,
  ToolbarButton,
  Toolbar,
  GridFilterOperator,
  GridFilterInputValueProps,
  QuickFilterClear,
  QuickFilterControl,
  QuickFilterTrigger,
  QuickFilter,
  GridLogicOperator,
} from "@mui/x-data-grid";

//-| Mui icon(s)
import LockIcon from "@mui/icons-material/Lock";
import DeleteIcon from "@mui/icons-material/Delete";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import SearchIcon from "@mui/icons-material/Search";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import FilterListIcon from "@mui/icons-material/FilterList";
import CancelIcon from "@mui/icons-material/Cancel";

//-| Project
import CustomCard from "@/components/customComponents/customCard";
import SectionHeader from "@/components/customComponents/sectionHeader";
import customAxios from "@/services/customAxios";
import useResDialog from "@/stores/zustand/useResDialog";
import useConfirmDialog from "@/stores/zustand/useConfirmDialog";
import { paginationType, userType } from "@/components/crud/types/userTypes";
import CustomOutlinedInput from "@/components/customComponents/customOutlinedInput";
import { title } from "process";
import { GridToolbarProps } from "@mui/x-data-grid/internals";

type CustomToolbarProps = GridToolbarProps & {
  getUsers: (username?: string, email?: string) => void;
};

function CustomToolbar({ getUsers }: CustomToolbarProps) {
  //-| search states
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  //-| handles
  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleClearUsername = () => {
    setUsername("");
  };

  const handleClearEmail = () => {
    setEmail("");
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Toolbar>
      <Typography fontWeight="medium" sx={{ flex: 1, mx: 0.5 }}>
        Toolbar
      </Typography>

      <Tooltip title="Columns">
        <ColumnsPanelTrigger render={<ToolbarButton />}>
          <ViewColumnIcon fontSize="small" />
        </ColumnsPanelTrigger>
      </Tooltip>

      <Tooltip title="Filters">
        <ToolbarButton color="default" onClick={handleClick}>
          <FilterListIcon fontSize="small" />
        </ToolbarButton>
      </Tooltip>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{}}
      >
        <Grid
          container
          direction="row"
          spacing={3}
          sx={{
            justifyContent: "space-around",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <Grid size="auto">
            <CustomOutlinedInput
              title="Username"
              value={username}
              handleChangeValue={handleChangeUsername}
              handleClearValue={handleClearUsername}
              icon={<CleaningServicesIcon />}
            />
          </Grid>
          <Grid size="auto">
            <CustomOutlinedInput
              title="Email"
              value={email}
              handleChangeValue={handleChangeEmail}
              handleClearValue={handleClearEmail}
              icon={<CleaningServicesIcon />}
            />
          </Grid>

          <Grid size="auto">
            <IconButton
              size="large"
              sx={{
                border: "1px solid #fff",
                boxShadow:
                  "0 0 2px #fff, 0 0 2px #fff, 0 0 5px #2196f3, 0 0 8px #2196f3,0 0 10px #2196f3,inset 0 0 7px #2196f3",
              }}
              onClick={() => {
                getUsers(username, email);
              }}
            >
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Popover>
    </Toolbar>
  );
}

const ManageUser = () => {
  //-| zustand
  const resDialogZus = useResDialog((state) => {
    return state;
  });
  const confirmDialogZus = useConfirmDialog((state) => {
    return state;
  });

  //-| useStates
  const [users, setUsers] = useState<paginationType>();
  const [targetUser, setTargetUsers] = useState("");
  const [task, setTask] = useState<"unlock" | "delete" | "">("");

  //-| Pagination states
  const [loading, setLoading] = useState(false);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: 20,
    page: 0,
  });
  const [sortModel, setSortModel] = useState<GridSortModel>([]);

  const currentQuery = useMemo(() => {
    const page = paginationModel.page; // zero-based
    const pageSize = paginationModel.pageSize;
    const firstSort = sortModel[0]; // (if you allow multi-sort, iterate)
    const sort = firstSort ? `${firstSort.field}:${firstSort.sort}` : undefined;

    return { page, pageSize, sort };
  }, [paginationModel, sortModel]);

  //-| Get users data
  const getUsers = async (username: string = "", email: string = "") => {
    setLoading(true);
    try {
      let newURL = `/users?page=${paginationModel.page}&size=${
        paginationModel.pageSize
      }
                      ${username !== "" ? `&username=${username}` : ""}
                      ${email !== "" ? `&email=${email}` : ""}`;

      const response = await customAxios.get(newURL);

      let data: paginationType = response.data;
      if (response.status === 200) {
        setUsers(data);
      } else {
        resDialogZus.setType("error");
        resDialogZus.setTitle("Error!");
        resDialogZus.setMsg("Fail to load users.");
        resDialogZus.setOpenDialog(true);
      }
      setLoading(false);
    } catch (error) {
      resDialogZus.setType("error");
      resDialogZus.setTitle("Error!");
      if (axios.isAxiosError(error)) {
        resDialogZus.setMsg(`Error: ${error.response?.data || error.message}`);
      } else {
        resDialogZus.setMsg("An unexpected error occurred.");
      }
      resDialogZus.setOpenDialog(true);
      setLoading(false);
    }
  };

  //-| Unlock users account
  const unlockUser = async (id: string = "") => {
    setLoading(true);
    setTargetUsers("");
    setTask("");
    try {
      const response = await customAxios.post(`/unlockUser?id=${id}`);

      let data: string = response.data;
      if (response.status === 200) {
        resDialogZus.setType("success");
        resDialogZus.setTitle("Success");
        resDialogZus.setMsg(data);
        resDialogZus.setOpenDialog(true);
        confirmDialogZus.setOpenDialog(false);
        getUsers();
      } else {
        resDialogZus.setType("error");
        resDialogZus.setTitle("Error!");
        resDialogZus.setMsg(data);
        resDialogZus.setOpenDialog(true);
      }
      setLoading(false);
    } catch (error) {
      resDialogZus.setType("error");
      resDialogZus.setTitle("Error!");
      if (axios.isAxiosError(error)) {
        resDialogZus.setMsg(`Error: ${error.response?.data || error.message}`);
      } else {
        resDialogZus.setMsg("An unexpected error occurred.");
      }
      resDialogZus.setOpenDialog(true);
      setLoading(false);
    }
  };

  //-| Delete users account
  const deleteUser = async (id: string = "") => {
    setLoading(true);
    setTargetUsers("");
    setTask("");
    try {
      const response = await customAxios.delete(`/user?id=${id}`);

      let data: string = response.data;
      if (response.status === 200) {
        resDialogZus.setType("success");
        resDialogZus.setTitle("Success");
        resDialogZus.setMsg(data);
        resDialogZus.setOpenDialog(true);
        getUsers();
      } else {
        resDialogZus.setType("error");
        resDialogZus.setTitle("Error!");
        resDialogZus.setMsg(data);
        resDialogZus.setOpenDialog(true);
      }
      setLoading(false);
      confirmDialogZus.setOpenDialog(false);
    } catch (error) {
      resDialogZus.setType("error");
      resDialogZus.setTitle("Error!");
      if (axios.isAxiosError(error)) {
        resDialogZus.setMsg(`Error: ${error.response?.data || error.message}`);
      } else {
        resDialogZus.setMsg("An unexpected error occurred.");
      }
      resDialogZus.setOpenDialog(true);
      setLoading(false);
      confirmDialogZus.setOpenDialog(false);
    }
  };

  //-| useEffect
  useEffect(() => {
    getUsers();
  }, []);

  //-| Get list of books
  useEffect(() => {
    getUsers();
  }, [paginationModel.page, paginationModel.pageSize]);

  //-| Track user press confirm in confirm dialog(for delete book)
  useEffect(() => {
    if (confirmDialogZus.pressConfirm) {
      if (task === "delete") deleteUser(targetUser);
      else if (task === "unlock") unlockUser(targetUser);
    }
  }, [confirmDialogZus.pressConfirm]);

  //-| Some API clients return undefined while loading
  //-| Following lines are here to prevent `rowCount` from being undefined during the loading
  const rowCountRef = useRef(users?.totalElements || 0);

  const rowCount = useMemo(() => {
    if (users?.totalElements !== undefined) {
      rowCountRef.current = users.totalElements;
    }
    return rowCountRef.current;
  }, [users?.totalElements]);

  const handleDelete = (id: number, userName: string) => () => {
    setTask("delete");
    setTargetUsers(id.toString());
    confirmDialogZus.setTitle("Delete User");
    confirmDialogZus.setMsg("Do you want to delete user: " + userName);
    confirmDialogZus.setOpenDialog(true);
  };

  const handleUnlock = (id: number, userName: string) => () => {
    setTask("unlock");
    setTargetUsers(id.toString());
    confirmDialogZus.setTitle("Unlock User");
    confirmDialogZus.setMsg("Do you want to unlock user: " + userName);
    confirmDialogZus.setOpenDialog(true);
  };

  //-| header columns
  const columns: GridColDef[] = [
    {
      field: "username",
      headerName: "Username",
      width: 400,
      filterable: false,
    },
    {
      field: "email",
      headerName: "E-mail",
      width: 400,
      filterable: false,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 200,
      cellClassName: "actions",
      getActions: (params) => {
        const userId = params.id as number;
        // console.log(params)
        const userName = params.row.username;
        return [
          <GridActionsCellItem
            icon={<LockIcon />}
            label="Unlock"
            className="textPrimary"
            onClick={handleUnlock(userId, userName)}
            color="inherit"
            style={{ display: params.row.accountNonLocked ? "none" : "" }}
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDelete(userId, userName)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  //-| Wrapper that satisfies the slot’s expected prop type
  const Toolbar: React.FC<GridToolbarProps> = (p) => (
    <CustomToolbar {...p} getUsers={getUsers} />
  );

  return (
    <>
      <SectionHeader title="Manage User" sectionVariant="neon" />

      <CustomCard
        height="max-content"
        width="max-content"
        margin="30px 0px 0px 0px"
      >
        <Box
          sx={{
            width: "75vw",
            overflow: "auto",
          }}
        >
          <DataGrid
            getRowId={(row: userType) => row.id}
            rows={users?.content}
            columns={columns}
            rowCount={rowCount}
            loading={loading}
            pageSizeOptions={[20, 40, 100]}
            paginationModel={paginationModel}
            sortModel={sortModel}
            paginationMode="server"
            sortingMode="server"
            filterMode="server"
            onPaginationModelChange={setPaginationModel}
            onSortModelChange={setSortModel}
            showToolbar
            disableRowSelectionOnClick
            slots={{ toolbar: Toolbar }}
            slotProps={{
              toolbar: {
                printOptions: { disableToolbarButton: true },
                csvOptions: { disableToolbarButton: true },
              },
            }}
          />
        </Box>
      </CustomCard>
    </>
  );
};

export default ManageUser;
