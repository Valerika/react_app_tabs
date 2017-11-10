import React from 'react';

const DummyTable = () => (
    <table className="table-dummy">
        <thead>
        <tr>
            <th></th>
            <th scope="col" abbr="Starter">Smart Starter</th>
            <th scope="col" abbr="Medium">Smart Medium</th>
            <th scope="col" abbr="Business">Smart Business</th>
            <th scope="col" abbr="Deluxe">Smart Deluxe</th>
        </tr>
        </thead>
        <tfoot>
        <tr>
            <th scope="row">Price per month</th>
            <td>$ 2.90</td>
            <td>$ 5.90</td>
            <td>$ 9.90</td>
            <td>$ 14.90</td>
        </tr>
        </tfoot>
        <tbody>
        <tr>
            <th scope="row">Storage Space</th>
            <td>512 MB</td>
            <td>1 GB</td>
            <td>2 GB</td>
            <td>4 GB</td>
        </tr>
        <tr>
            <th scope="row">Bandwidth</th>
            <td>50 GB</td>
            <td>100 GB</td>
            <td>150 GB</td>
            <td>Unlimited</td>
        </tr>
        <tr>
            <th scope="row">MySQL Databases</th>
            <td>Unlimited</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
        </tr>
        <tr>
            <th scope="row">Setup</th>
            <td>19.90 $</td>
            <td>12.90 $</td>
            <td>free</td>
            <td>free</td>
        </tr>
        </tbody>
    </table>
)

export default DummyTable;
