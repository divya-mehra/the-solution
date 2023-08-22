import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, Dialog, DialogActions } from "@mui/material";
import styles from "./utilities.module.css";

const ProtoDialog = ({ open, handleClose, setOpen }) => {
  return (
    <Dialog open={open} onClose={handleClose} className={styles.dialogWrapper}>
      <DialogContent>
        <DialogTitle>Path to Nowhere (For Now)</DialogTitle>
        <DialogContentText>
          This part of the site is still being built. Stay tuned!
        </DialogContentText>
      </DialogContent>
      <DialogActions className={styles.dialogButtons}>
        <Button onClick={handleClose} >OK</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProtoDialog;
