import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import React from 'react';

function BlockDetails(props) {
    const { address, balance, gasUsed } = props;

    return (
        <div>
            <h2><PermDeviceInformationIcon />Block Details</h2>
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