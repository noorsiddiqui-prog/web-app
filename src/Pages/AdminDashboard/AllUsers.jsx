import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { allUserAction } from "./../../redux/actions/allUserAction";

const AllUsers = () => {
  const users = useSelector((state) => state.allUserReducer.users);
  console.log(users, "user");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allUserAction());
  }, []);
  return <div>
    <Box>


    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontSize: "18px", fontWeight: "600"}}>Username</TableCell>
            <TableCell sx={{fontSize: "18px", fontWeight: "600"}} align="right">Image</TableCell>
   
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell align="right" >
                <img src={row.image} alt="" />
              </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </Box>
  </div>;
};

export default AllUsers;
