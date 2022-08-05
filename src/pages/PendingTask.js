import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { dataPendingTask } from "../constants";
import { useSelector, useDispatch } from "react-redux";
import { updateStatus } from "../accountSlice";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const PendingTask = () => {
  const [open, setOpen] = useState(false);
  const [openReject, setOpenReject] = useState(false);
  const tasks = useSelector((state) => state.account.tasks);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const dispatch = useDispatch();
  const dummyData = dataPendingTask;

  const handleClickOpen = (index) => {
    setOpen(true);
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseReject = () => {
    setOpenReject(false);
  };

  const approve = () => {
    setOpen(false);
    dispatch(
      updateStatus({
        index: selectedIndex,
        status: "APPROVED",
      })
    );
  };

  const reject = () => {
    setOpenReject(false);
    dispatch(
      updateStatus({
        index: selectedIndex,
        status: "REJECTED",
      })
    );
  };

  const handleClickOpenReject = (index) => {
    setOpenReject(true);
    setSelectedIndex(index);
  };

  const DialogPopup = () => {
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Anda yakin menyetujui task ini?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Batal</Button>
          <Button onClick={approve} autoFocus>
            Ya
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  const DialogPopupReject = () => {
    return (
      <Dialog
        open={openReject}
        onClose={handleCloseReject}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Anda yakin menolak task ini?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseReject}>Batal</Button>
          <Button onClick={reject} autoFocus>
            Ya
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <>
      <h3>Pending Task Bank User</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {tasks.length === 0 && <p>No task to process.</p>}
        {tasks.length > 0 && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Ticket Number</TableCell>
                  <TableCell>Created Date</TableCell>
                  <TableCell>Area</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Application</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tasks.map((task, i) => (
                  <TableRow key={i}>
                    <TableCell>{task.ticketNumber}</TableCell>
                    <TableCell>{task.createdDate}</TableCell>
                    <TableCell>{task.area}</TableCell>
                    <TableCell>{task.email}</TableCell>
                    <TableCell>{task.application}</TableCell>
                    <TableCell>
                      <span
                        style={{
                          color:
                            task.status.toLowerCase() === "approved"
                              ? "green"
                              : task.status.toLowerCase() === "rejected"
                              ? "red"
                              : "blue",
                        }}
                      >
                        {task.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      {task.status.toLowerCase() === "created" && (
                        <>
                          <Button
                            color="success"
                            variant="outlined"
                            onClick={() => handleClickOpen(i)}
                          >
                            Approve
                          </Button>
                          |
                          <Button
                            color="error"
                            variant="outlined"
                            onClick={() => handleClickOpenReject(i)}
                          >
                            Reject
                          </Button>
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>

      <DialogPopup />
      <DialogPopupReject />
    </>
  );
};
