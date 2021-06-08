import React, { useContext } from 'react';
import Link from '@material-ui/core/Link';
import { BasketItem } from '../../models/basketItem'
import RFIDContext from '../../contexts/rfid/rfidContext';
import Title from '../Title';
//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';


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

const Basket = (props) => {
    const { basket, postBasket, setBasket, handleOut } = useContext(RFIDContext)
    const classes = useStyles();
    
    const dropBasketItem = (urunid) => {
        let garbageData = props.basketData.filter((obj) => obj.urun_id !== urunid);
        let garbageData2 = basket.filter((obj) => obj.urun_id !== urunid);
        props.setBasketData(garbageData)
        setBasket(garbageData2);
    }

    
    const postBasketData = () => {
        postBasket();
        setBasket([]);
        handleOut();
    }


    return (
        <React.Fragment>
            <Title>Sepet</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Ürün</TableCell>
                            <TableCell>Alınabilecek Adet</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/*props.basketData && kısmını null check gibi düşünebilirsin. Eğer props.basketData dolu ise rendera başlar*/}
                        {props.basketData && props.basketData.map((row) => (
                            <TableRow key={row.urun_id}>
                                <TableCell>{row.urun_id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.istenilenadet}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" onClick={() => dropBasketItem(/*row.urun_id, row.name, row.istenilenadet, 2*/row.urun_id)} >
                                        Çıkar
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Button onClick={postBasketData}>Post</Button>
                <div className={classes.seeMore}>
                    <Link color="primary" href="#" onClick={preventDefault}>
                        See more orders
                    </Link>
                </div>
        </React.Fragment>
);
}

export default Basket;
