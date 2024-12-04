import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const EditDialog = ({ open, handleClose, rowData }) => {

    const navigate = useNavigate();
    const [station, setStation] = useState(rowData)



    const onChangeHandle = (e) => {
        e.preventDefault();
        setStation((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const onSubmit = () => {

        axios.post("http://localhost:8080/stations/save", station, {
            header: {
                "Content-Type": "application/json",
            },
        }).then(() => {
            navigate('/adminDashboard')
            alert("Data Saved Successfully.")

        });
    }
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">Edit</DialogTitle>

                <DialogContent dividers sx={{ width: "500px", height: "500px" }}>
                    <Box
                        label="Username"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: "column",
                            '& > :not(style)': { m: 1 },
                        }}
                    >
                        <TextField
                            sx={{ width: "400px" }}
                            id="demo-helper-text-aligned"
                            name="stationName"
                            label="Charging Station Name"
                            value={station.stationName}
                            onChange={onChangeHandle}
                        />
                        <TextField
                            name="location"
                            sx={{ width: "400px" }}
                            id="demo-helper-text-aligned-no-helper"
                            label="Location"
                            value={station.location}
                            onChange={onChangeHandle}
                        />
                        <TextField
                            name="pincode"
                            sx={{ width: "400px" }}
                            id="demo-helper-text-aligned-no-helper"
                            label="Pincode"
                            value={station.pincode}
                            onChange={onChangeHandle}
                        />
                        <TextField
                            name="taluka"
                            sx={{ width: "400px" }}
                            id="demo-helper-text-aligned-no-helper"
                            label="Taluka"
                            value={setStation.taluka}
                            onChange={onChangeHandle}
                        />
                        <TextField
                            name="district"
                            sx={{ width: "400px" }}
                            id="demo-helper-text-aligned-no-helper"
                            label="Distrct"
                            value={station.district}
                            onChange={onChangeHandle}
                        />
                        <TextField
                            name="slotsAvailable"
                            sx={{ width: "400px" }}
                            id="demo-helper-text-aligned-no-helper"
                            label="Slots Available"
                            value={station.slotsAvailable}
                            onChange={onChangeHandle}
                        />
                        <Button style={{ padding: '10px', margin: '10px' }} onClick={onSubmit} variant="contained" color="success">
                            Save
                        </Button>

                    </Box>

                </DialogContent>

            </Dialog>
        </div>
    )
}

export default EditDialog;