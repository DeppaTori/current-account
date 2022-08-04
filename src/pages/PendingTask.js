import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { dataPendingTask } from "../constants";

export const PendingTask = () => {
  const [open, setOpen] = useState(false);
  const [openReject, setOpenReject] = useState(false);

  const dummyData = dataPendingTask;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenReject = () => {
    setOpenReject(true);
  };

  const handleCloseReject = () => {
    setOpenReject(false);
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
          <Button onClick={handleClose} autoFocus>
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
          <Button onClick={handleCloseReject} autoFocus>
            Ya
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <>
      <h3>Pending Task Bank User</h3>
      <div>
        Ticket Number : <span>{dummyData.ticketNumber}</span>
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
        <br />
      </div>
      <button onClick={handleClickOpen}>Approve</button>
      <br />
      <button onClick={handleClickOpenReject}>Reject</button>
      <DialogPopup />
      <DialogPopupReject />
    </>
  );
};
