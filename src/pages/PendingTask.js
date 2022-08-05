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
        <table border={1}>
          <thead>
            <th>Ticket Number</th>
            <th>Created Date</th>
            <th>Area</th>
            <th>Email</th>
            <th>Application</th>
            <th>Status</th>
            <th>Action</th>
          </thead>
          <tbody>
            {tasks.map((task, i) => (
              <tr key={i}>
                <td>{task.ticketNumber}</td>
                <td>{task.createdDate}</td>
                <td>{task.area}</td>
                <td>{task.email}</td>
                <td>{task.application}</td>
                <td>{task.status}</td>
                <td>
                  <button onClick={() => handleClickOpen(i)}>Approve</button>|
                  <button onClick={() => handleClickOpenReject(i)}>
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Ticket Number : <span>{dummyData.ticketNumber}</span>
        <br />
        Created Date : <span>{dummyData.createdDate}</span>
        <br />
        Area : <span>{dummyData.area}</span>
        <br />
        Email : <span>{dummyData.email}</span>
        <br />
        Application : <span>{dummyData.application}</span>
        <br />
        Status : <span>{dummyData.status}</span>
        <br /> */}
      </div>
      {/* <button onClick={handleClickOpen}>Approve</button>
      <br />
      <button onClick={handleClickOpenReject}>Reject</button> */}
      <DialogPopup />
      <DialogPopupReject />
    </>
  );
};
