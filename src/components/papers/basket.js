import React, { useContext } from 'react';
import Link from '@material-ui/core/Link';
//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Title from '../Title';
import ProductsContext from '../../contexts/availableProducts/productsContext';
import BasketItem from '../../models/basketItem'


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

const Basket = () => {

    const { basket, postBasket } = useContext(ProductsContext)
    const classes = useStyles();
    var item = {};
    
    const dropBasketItem = () => {

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
                        {basket.map((row) => (
                            <TableRow key={row[0]}>
                                <TableCell>{row[0]}</TableCell>
                                <TableCell>{row[1]}</TableCell>
                                <TableCell>{row[2]}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" >
                                        Çıkar
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Button onClick={postBasket}>Post</Button>
                <div className={classes.seeMore}>
                    <Link color="primary" href="#" onClick={preventDefault}>
                        See more orders
                    </Link>
                </div>
        </React.Fragment>
  );
}

export default Basket;
