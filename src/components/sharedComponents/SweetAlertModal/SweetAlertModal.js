import React, { useState } from "react";
// import successGif from './../../../assets/images/check.png'
// import warnGif from './../../../assets/images/alert.gif'
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import "./SweetAlertModal.css";
// import Button from '@mui/material/Button';
import Dialog from "@mui/material/Dialog";
// import DialogActions from '@mui/material/DialogActions';
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from '@mui/material/DialogTitle';

function SweetAlertModal(props) {
  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  const handleShow = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>Are you sure?</h1>
            <p>You want to delete this file?</p>
            <button onClick={onClose} className="btn-no-sweetALert btn-common">
              No
            </button>
            <button
              className="btn-yes-sweetALert btn-common"
              onClick={() => {
                // this.handleClickDelete();
                onClose();
              }}
            >
              Yes
            </button>
          </div>
        );
      },
    });
  };
  const successShow = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h2>Your request submitted successfully</h2>
            <p>Please wait our admin will review your request</p>
            <button
              className="btn-yes-sweetALert btn-common"
              onClick={() => {
                // this.handleClickDelete();
                onClose();
              }}
            >
              Ok
            </button>
          </div>
        );
      },
    });
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.close();
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {/* <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle> */}
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <div
            className="d-flex align-items-center"
            style={{
              flexDirection: "column",
              color: "black",
              width: "30rem",
              padding: "25px",
            }}
          >
            <h1>{props.headerText}</h1>
            <p>{props.bodyText}</p>
            <div>
              <button
                className="btn-no-sweetALert btn-common"
                onClick={() => {
                  handleClose();
                }}
              >
                No
              </button>
              <button
                className="btn-yes-sweetALert btn-common"
                onClick={() => {
                  props.onyes();
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default SweetAlertModal;
