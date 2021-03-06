import { AddCircle } from "@mui/icons-material";
import { Box, Button, Container, IconButton, Stack, styled, TextField, Typography } from "@mui/material";
import { useState } from "react";
import BasicDatePicker from "./BasicDatePicker";
import ChipsArray from "./ChipsArray";

const CreatePollContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(10),
    height: '100%',
    overflow: 'auto',
}));

const CreatePollPage = () => {
    const [description, setDescription] = useState('');
    const [keyVal, setKeyVal] = useState(0);
    const [title, setTitle] = useState('');
    const [position, setPosition] = useState('');
    const [chipData, setChipData] = useState([]);

    const handleTitleInput = (e) => {
        setTitle(e.target.value);
    };

    const handlePositionInput = (e) => {
        setPosition(e.target.value);
    };

    const handleAddPosition = () => {
        if (position) {
            const obj = { 'key': keyVal, 'label': position };
            chipData.push(obj);
            setKeyVal(keyVal + 1);
            setPosition('');
        }
        console.log(chipData);
    };

    return (
        <CreatePollContainer>
            <Typography variant="h4">Create a Poll</Typography>
            <br />
            <Typography variant="body2">
                No poll is currently going on. Fill up the form to create a new poll.
            </Typography>
            <form autoComplete="off">
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                        marginTop: 6,
                        marginBottom: 2
                    }}>
                    <TextField value={title}
                        onChange={handleTitleInput}
                        fullWidth
                        label="Poll Title"
                    />
                </Box>

                <Stack
                    direction={'row'}
                    spacing={1}
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                        //display: 'flex',
                        marginBottom: 2
                    }}
                >

                    <TextField value={position}
                        onChange={handlePositionInput}
                        fullWidth
                        label="Add a position"
                        id="fullWidth"
                        sx={{ marginRight: 1 }} />

                    <IconButton color="primary" size="large"
                        onClick={handleAddPosition}>
                        <AddCircle />
                    </IconButton>
                </Stack>

                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                        marginBottom: 2
                    }}>
                    {/* <Typography>Added positions: </Typography> */}
                    <ChipsArray chipData={chipData} setChipData={setChipData} />
                </Box>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                        marginBottom: 2
                    }}>
                    <TextField value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                        fullWidth
                        multiline
                        rows={4}
                        label="Description"
                    />
                </Box>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                        marginBottom: 2
                    }}>
                    <BasicDatePicker />
                </Box>
                <Button variant="contained" style={{marginBottom: 10}}> Create poll </Button>
            </form>


        </CreatePollContainer>
    );
};

export default CreatePollPage;