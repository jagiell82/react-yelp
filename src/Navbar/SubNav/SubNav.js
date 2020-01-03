import React from 'react';
import { SubNavItem } from './SubNavItem/SubNavItem';

export function SubNav() {
    return (
        <div>
            <SubNavItem label="Restaurant" icon="fa-utensils"/>
            <SubNavItem label="Home Services" icon="fa-home"/>
            <SubNavItem label="Auto Services" icon="fa-car-side"/>
            <SubNavItem label="More" icon="fa-info-circle" showRightBorder/>
        </div>
    );
}
