/* eslint-disable react/prop-types */
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
const Receipt = (props) => {
    // To check if required fields are missing
    const areRequiredFieldsMissing = !props.toAddress || !props.fromAddress || !props.amount;

    // To check if both to & from addresses are different
    const areAddressesSame = props.toAddress === props.fromAddress;

    // validations
    if (areRequiredFieldsMissing) {
        // Error message if required fields are missing
        return (
            <Typography variant="h6" style={{ marginTop: '16px' }} sx={{backgroundColor: "red"}}>
                Please fill in all required transfer fields.
            </Typography>
        );
    } else if (areAddressesSame) {
        // Error message if both addresses are same
        return (
            <Typography variant="h6" style={{ marginTop: '16px' }} sx={{backgroundColor: "red"}}>
                Please select distinct address for the transfer.
            </Typography>
    );
    }

    const data = {
        'Transaction Hash': props.transactionHash,
        'Block Hash': props.blockHash,
        'Block Number': props.blockNumber,
        'From Address': props.fromAddress,
        'To Address': props.toAddress,
        'Amount': props.amount,
        'Gas Used': props.gasUsed
    };

    const transactionHistoryReceiptData = {
        'Receipt Hash': props.receiptHash,
        'Gas Used': props.gasUsed,
        'Created': props.created,
        'Updated': props.updated
    }
    
    return(
    <TableContainer component={Paper} style={{ marginTop: '16px' }}>
        <Table>
            {props.label !== "Transaction History" ?
            <TableBody>
                {Object.entries(data).map(([key, value]) => (
                    <TableRow key={key}>
                        <TableCell style={{backgroundColor: '#e0ac78'}}>{key}</TableCell>
                        <TableCell>{value}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            :
            <TableBody>
                {Object.entries(transactionHistoryReceiptData).map(([key, value]) => (
                    <TableRow key={key}>
                        <TableCell style={{backgroundColor: '#e0ac78'}}>{key}</TableCell>
                        <TableCell>{value}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            }
        </Table>
    </TableContainer>
    );
}

export default Receipt;