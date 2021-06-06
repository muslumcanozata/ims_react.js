import React, { useContext } from 'react';
import Link from '@material-ui/core/Link';
import clsx from 'clsx';
import Title from '../Title';
import ProductsContext from '../../contexts/availableProducts/productsContext';
import AlertContext from '../../contexts/alert/alertContext';
//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Alert1 from '../Alert';

import {BasketItem} from '../../models/basketItem'

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
}

// const rows = [
//     createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
//     createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
//     createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
//     createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
//     createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
// ];



function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
    root: {
		display: 'flex',
	},
    root1: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto',
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
	},
	fixedHeight: {
		height: 240,
	},
}));

const AvailableProductsTable = (props) => {
    
    const { availableProducts } = useContext(ProductsContext)
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const { setAlert } = useContext(AlertContext);
    
    const addBasketItem = (urunid, name, istenilen, amount) => {
        var basketItem = new BasketItem(name, amount, istenilen, 1111, 22222, urunid);
        console.log(basketItem)
        //DATAYI TEMP DEĞİŞKENE AL VE SETBASKETDATA İLE PARENTA (URUNTESLIME) YOLLA
        let tempDataSource = Array.isArray(props.dataSource) ? props.dataSource : []
        tempDataSource.push(basketItem);
        props.setBasketData(tempDataSource)
    }
    

    var adet;

    const handleAdetChange = (e, adet) => {

    }

    return (
        <React.Fragment>
            
            <Title>Alınabilecek Ürünler</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Ürün</TableCell>
                            <TableCell>Alınabilecek Adet</TableCell>
                            <TableCell>İstenilen Adet</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {availableProducts.map((row) => (
                            <TableRow key={row[0]}>
                                <TableCell>{row[0]}</TableCell>
                                <TableCell>{row[1]}</TableCell>
                                <TableCell>{row[2]}</TableCell>
                                <TableCell>
                                    <TextField
                                    onChange={(e) => {
                                        if(e.target.value > row[2] || e.target.value < 0){
                                            console.log(e.target.value)
                                            setAlert('HATA','error')
                                        }
                                    }}
                                    value={adet}
                                    variant="outlined"
                                    required
                                    id="adet"
                                    label="İstenilen Adet"
                                    name="adet"
                                    defaultValue={row[2]}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" onClick={addBasketItem(row[0], row[1], row[2], 2)} >
                                        Ekle
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className={classes.seeMore}>
                    <Link color="primary" href="#" onClick={preventDefault}>
                        See more orders
                    </Link>
                </div>
                
        </React.Fragment>
    );
}

export default AvailableProductsTable;
