import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Typography, InputBase, Box, Toolbar } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return(
        <AppBar position="static">
            <Toolbar >
                <Typography variant="h5" >
                    Travel Advisor 
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" >
                        Search new places!
                    </Typography>
                    {/* <Autocomplete>
                        <div >
                            <div >
                                <SearchIcon /> 
                            </div>
                            <InputBase placeholder="Search..." />
                        </div>
                    </Autocomplete>  */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;