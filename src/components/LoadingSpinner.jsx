import React from 'react';
import { Hourglass } from 'react-loader-spinner';

const LoadingSpinner = ({ fullScreen = false }) => {
    

    const spinnerContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        height: fullScreen ? '100vh' : '70vh', 
        width: '100%',
    };

    const primaryColor = '#1CB5E0'; 
    const secondaryColor = '#000851'; 

    return (
        <div style={spinnerContainerStyle}>
            <Hourglass
                visible={true}
                height="50"
                width="50"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={[primaryColor,secondaryColor]} 
            />
        </div>
    );
};

export default LoadingSpinner;