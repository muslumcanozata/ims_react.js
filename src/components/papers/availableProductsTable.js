import React, { useContext, useEffect, useState } from 'react';
import Link from '@material-ui/core/Link';
import clsx from 'clsx';
import Title from '../Title';
import ProductsContext from '../../contexts/availableProducts/productsContext';
import AlertContext from '../../contexts/alert/alertContext';
import {BasketItem} from '../../models/basketItem'

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
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { render } from '@testing-library/react';

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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
}));

const AvailableProductsTable = (props) => {
    
    const { availableProducts } = useContext(ProductsContext)
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const { setAlert } = useContext(AlertContext);

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const addBasketItem = (urunid, name, istenilen, amount ) => {
        var basketItem = new BasketItem(name, amount, istenilen, 1111, 22222, urunid);
        console.log(basketItem)
        //DATAYI TEMP DEĞİŞKENE AL VE SETBASKETDATA İLE PARENTA (URUNTESLIME) YOLLA
        let tempDataSource = props.basketData
        console.log(tempDataSource)
        console.log(props.basketData)
        tempDataSource.push(basketItem);
        props.setBasketData(tempDataSource)
    }

    var adet;

    const handleAdetChange = (e, adet) => {

    }

    const menuItems = (row) => {
        for(var i=0; i<=row; i++){
            return(<MenuItem value={i}>{i}</MenuItem>)
        }     
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
                                    <FormControl className={classes.formControl} >
                                        <InputLabel id="demo-simple-select-label"></InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={row[2]}
                                        onChange={handleChange}
                                        >
                                            <MenuItem value={10}>10</MenuItem>
                                        </Select>
                                    </FormControl>
                                    {/* <TextField
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
                                    /> */}
                                </TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" onClick={() => addBasketItem(row[0], row[1], row[2], 2)} >
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
