import React, { Component } from 'react';

import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PatientDetails from './PatientDetails';
import Confirmation from './Confirmation';

import './pages.css';

const pages = {
    1 : PageOne,
    2 : PageTwo,
    3 : PageThree,
    4 : PatientDetails,
    5 : Confirmation
}

export default pages;