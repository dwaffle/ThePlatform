import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SeriesPageScaffolding from '../components/series/seriesPage'
import MainLayout from '../layouts/MainLayout';

export default function SeriesPage( props:{} ){

    return <MainLayout>
        
            <SeriesPageScaffolding/>
     
        
    </MainLayout>;

}

