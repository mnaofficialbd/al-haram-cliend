import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
];

export default function RoomSharing() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Room Type</StyledTableCell>
                        <StyledTableCell align="right">Price</StyledTableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <>
                            <StyledTableRow key={row.name}>
                                <StyledTableCell align="right">Single Sharing</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell align="right">Twin Sharing</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell align="right">Triple Sharing</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell align="right">Quad Sharing</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell align="right">Quint Sharing</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell align="right">Hexa Sharing</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell align="right">Child With Bed</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell align="right">Child Without Bed</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell align="right">RS 5,000/-</StyledTableCell>
                            </StyledTableRow>
                            
                        </>

                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}