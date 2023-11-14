import React from "react"
import { Button, Typography } from "@mui/material"

const Hello = () => {
    // return React.createElement('div', 
    // {id: 'root', className: 'sample'}, 
    // React.createElement('h1', null, 'Hi Ramya kutty'))
    return (
        <div>
          <Typography variant="h4">Hello React</Typography>
          <Button variant="contained" color="primary">
            Click
          </Button>
        </div>
    );
}

export default Hello