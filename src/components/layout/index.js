import React from 'react';
import Header from "./header";

function Layout({children}) {
    return (
        <>
            <div className="layout">
                <Header/>
                <main>
                    {children}
                </main>
            </div>
        </>
    );
}

export default Layout