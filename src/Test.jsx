import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import img1 from "./g1.png";
import img2 from "./g2.png";
import img3 from "./g3.png";
import img4 from "./g4.png";
import Button from "@mui/material/Button";

const BootstrapDialog = styled(Dialog)({
  "& .MuiPaper-root": {
    backgroundColor :  "#192A2C",
    borderRadius : 20,
  },
});

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 10,
            top: 10,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const Test = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} className="dilog">
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          ПОДКЛЮЧИТЬ КОШЕЛЕК
        </BootstrapDialogTitle>
          <div className="diolog-item">
            <div>
              <div className="item-item">
                <img src={img2} alt="" />
                <p>WalletConnect</p>
              </div>
              <div className="item-item">
                <img src={img3} alt="" />
                <p>WalletConnect</p>
              </div>
            </div>
            <div>
              <div className="item-item">
                <img src={img1} alt="" />
                <p>Metamask</p>
              </div>
              <div className="item-item">
                <img src={img4} alt="" className="img-item" />
                <p>Другие</p>
              </div>
            </div>
          </div>
        </DialogContent>
        <div className="center">
          <button autoFocus className="button">
            Подключить
          </button>
        </div>
      </BootstrapDialog>
    </div>
  );
};

export default Test;
