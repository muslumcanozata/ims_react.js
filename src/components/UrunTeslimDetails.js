import React, { useContext } from 'react'
import RFIDContext from '../contexts/rfid/rfidContext';

const UrunTeslimDetails = () => {
    const { isno, email, isim, soyisim, tel, rfid, grup, isIdentificate, handleRFOut } = useContext(RFIDContext)
    return (
        <div>
            <p>
                {isno}
            </p>
            <p>
                {rfid}
            </p>
            <button onClick={handleRFOut}>RFOUT</button>
        </div>
    )
}

export default UrunTeslimDetails
