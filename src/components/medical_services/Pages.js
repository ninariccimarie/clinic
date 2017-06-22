import React, { Component } from 'react';

import PageOne from './pageone/PageOne';
import MedicalService from './medical_service/MedicalService';
import Schedule from './schedule/Schedule';
import PatientDetails from './patient_details/PatientDetails';
import Confirmation from './confirmation/Confirmation';

const pages = {
    1 : PageOne,
    2 : MedicalService,
    3 : Schedule,
    4 : PatientDetails,
    5 : Confirmation
}

export default pages;