import React from "react";
// MaterialUI
import { DataGrid } from '@material-ui/data-grid';

const StokTakipDataGrid = () => {
	const columns = [
		{ field: 'id', headerName: 'ID', flex: 0.2 },
		{ field: 'SKU', headerName: 'SKU', flex: 1 },
		{ field: 'stokAdet', headerName: 'Stok Adedi', flex: 1 },
		{
			field: 'urunAdi',
			headerName: 'Ürün Adı',
			description: 'This column has a value getter and is not sortable.',
			flex: 1,
		},
	];

	const rows = [
		{ id: 1, SKU: 11111, stokAdet: 10, urunAdi: 'Mont Small' },
		{ id: 2, SKU: 22222, stokAdet: 20, urunAdi: 'Mont Medium' },
		{ id: 3, SKU: 22223, stokAdet: 30, urunAdi: 'Mont Large' },
		{ id: 4, SKU: 22224, stokAdet: 40, urunAdi: 'Mont XL' },
		{ id: 5, SKU: 22225, stokAdet: 50, urunAdi: 'Mont XXL' },
		{ id: 6, SKU: 22226, stokAdet: 60, urunAdi: 'Mont XXXL' },
		{ id: 7, SKU: 22227, stokAdet: 70, urunAdi: 'T-Shirt Small' },
		{ id: 8, SKU: 22228, stokAdet: 80, urunAdi: 'T-Shirt Medium' },
		{ id: 9, SKU: 22229, stokAdet: 90, urunAdi: 'T-Shirt Large' },
	];

    return (					
        <React.Fragment>
            <div style={{marginTop: '20px'}}>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            checkboxSelection
                            disableSelectionOnClick
							autoHeight={true}
                        />
                    </div>
            </div>
        </React.Fragment>
	);
}

export default StokTakipDataGrid;