import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

function createData(sku, name, wanted, stock) {
    return { sku, name, wanted, stock };
  }
  
const rows = [
    createData(11111, 'Mont Small', 1, 100),
    createData(22222, 'T-Shirt Small', 2, 200),
    createData(33333, 'Pantolon Small',2, 300),
    createData(44444, 'Lokum', 1, 400),
    createData(55555, 'Çikolata', 1, 5),
];

const MaterialTable = () => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>SKU Numarası</TableCell>
                        <TableCell align="right">Ürün İsmi</TableCell>
                        <TableCell align="right">İstenen Adet</TableCell>
                        <TableCell align="right">Stok Adet</TableCell>
                        <TableCell align="right">İşlem</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.sku}>
                            <TableCell component="th" scope="row">
                                {row.sku}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.wanted}</TableCell>
                            <TableCell align="right">{row.stock}</TableCell>
                            <TableCell align="right">
                                <Button variant="contained" color="secondary">
                                    Çıkar
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default MaterialTable;