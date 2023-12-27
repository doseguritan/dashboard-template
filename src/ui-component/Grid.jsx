import { TablePagination, Typography } from "@mui/material";
import { useEffect } from "react";
import DataGrid from 'react-data-grid';

const Grid = ({
    gridSetting, 
    paginationSetting,
    title = "List",
    columns = []
}) => {
    useEffect(() => {
        columns.push(...[
            {
                
            }
        ])
    }, [])
    return <>
        <Typography>{title}</Typography>
        <DataGrid
            {...gridSetting}
        />
        <TablePagination 
            {...paginationSetting}
        />
    </>
}

export default Grid;