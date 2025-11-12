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

    return (
        <div style={spinnerContainerStyle}>
            <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['#306cce', '#72a1ed']} 
            />
        </div>
    );
};

export default LoadingSpinner;