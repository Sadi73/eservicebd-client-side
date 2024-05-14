import React from 'react'
import EmptyScreen from '../../assets/EmptyScreen.svg';



const EmptyScreenView = (props) => {
    return (
        <div style={{ height: '60vh' }} className='flex flex-col justify-center'>
            <div style={{ margin: '2vh 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={EmptyScreen} alt='No Item Here' style={{ height: '100px' }} />
            </div>
            <p style={{ color: '#172739', fontWeight: 600, fontSize: '16px', textAlign: 'center', marginBottom: '0px' }}>
                {props?.message ? props?.message : 'Nothing Here Yet!'}
            </p>
            <p style={{ color: '#828282', fontSize: '14px', textAlign: 'center' }}>
                {props?.detailedMessage ? props?.detailedMessage : ''}
            </p>
        </div>
    )
}


export default EmptyScreenView