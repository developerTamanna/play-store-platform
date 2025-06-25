import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-600"></div>
        </div>
    );
};

export default Loading;
