import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import React from 'react';
import Header from './header/Header';

function BlockDetails(props) {
    const { address, balance, gasUsed } = props;

    return (
        <div>
            <Header title="Block Details" />
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableBody>
                            <TableRow>
                                <TableCell align="left" sx={{ backgroundColor: '#D4CD44' }}>Address</TableCell>
                                <TableCell>{address}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left" sx={{ backgroundColor: '#D4CD44' }}>Balance</TableCell>
                                <TableCell>{balance}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left" sx={{ backgroundColor: '#D4CD44' }}>Gas Used</TableCell>
                                <TableCell>{gasUsed}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default BlockDetails;