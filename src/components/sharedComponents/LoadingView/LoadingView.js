import React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import loadingGif from './../../../assets/images/loading.gif'

function LoadingView(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason && reason == "backdropClick")
            return;
        props.close();
    }

    return (
        <div >
            <Dialog
                open={props.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className='loading-div'
                PaperProps={{
                    style: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                    },
                }}
            >
                <DialogContent >
                    <DialogContentText id="alert-dialog-description">
                        <img src={loadingGif} alt="" />

                    </DialogContentText>
                </DialogContent>

            </Dialog>
        </div>

    );
}

export default LoadingView;