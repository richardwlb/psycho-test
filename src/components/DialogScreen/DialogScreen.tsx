import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface DialogScreenProps {
  open: boolean;
  title: string;
  message: string;
  cancelAction: Function;
  confirmAction: Function;
}

export default function DialogScreen({
  confirmAction,
  open,
  cancelAction,
  title,
  message,
}: DialogScreenProps) {
  return (
    <div>
      <Dialog open={open} onClose={() => cancelAction()}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          {cancelAction && (
            <Button onClick={() => cancelAction()}>Cancel</Button>
          )}
          <Button onClick={() => confirmAction()} autoFocus>
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
