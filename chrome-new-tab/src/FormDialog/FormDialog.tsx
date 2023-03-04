import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { createTheme, Fab, ThemeProvider } from '@mui/material';

export default function FormDialog(props: { handleSubmit: (shortcut: { name: string, keys: string, url: string }) => void, className?: string }) {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");
    const [keys, setKeys] = React.useState("");
    const [url, setUrl] = React.useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = () => {
        props.handleSubmit({ name: name, keys: keys, url: url })
        setOpen(false);
    };

    const theme = createTheme({
        palette: {
            primary: {

                main: '#000000',

            },
            secondary: {

                main: '#093170',

            },

        }
    })

    return (
        <div className={`formDIalog ${props.className ?? ""}`} >
            <ThemeProvider theme={theme}>

                <Fab size='small' style={{ justifySelf: "center" }} color={"secondary"} onClick={handleClickOpen}>
                    <AddSharpIcon color={'primary'} />
                </Fab>
                <Dialog open={open} onClose={handleClose} style={{ backgroundColor: "#093170", color: " #093170" }}>
                    <DialogTitle style={{ backgroundColor: "#093170", color: " #093170" }}>Add A Shortcut</DialogTitle>
                    <DialogContent color={"primary"} style={{ backgroundColor: "#093170", color: " #093170" }}>
                        <DialogContentText>
                            Please add a name, key bindings and url to your shortcut.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            onChange={(e) => setName(e.target.value)}
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            onChange={(e) => setKeys(e.target.value)}
                            id="name"
                            label="key bindings"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            onChange={(e) => setUrl(e.target.value)}
                            margin="dense"
                            id="name"
                            label="url"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions style={{ backgroundColor: "#093170", color: " #093170" }}>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </ThemeProvider>
        </div>
    );
}