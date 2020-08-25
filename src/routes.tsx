import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashbord from './pages/Dashbord';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Dashbord} />
        </BrowserRouter>
    )
};

export default Routes;