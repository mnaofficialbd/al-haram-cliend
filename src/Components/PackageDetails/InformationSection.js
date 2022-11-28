import React from 'react';

const InformationSection = () => {
    return (
        <section className=''>
            <table class="table w-50 mx-auto shadow ">
                <thead  style={{background: '#02A3C1'}}>
                    <tr className='text-white text-center'>
                        <th scope="col">Inclusions</th>
                        <th scope="col">Exclusions</th>
                    </tr>
                </thead>
                <tbody className=''>
                    <tr>
                        <td>Air Fare</td>
                        <td>RT PCR</td>
                    </tr>
                    <tr>
                        <td>Accommodation</td>
                        <td>Any Expenses Of Personel In Nature</td>
                    </tr>
                    <tr>
                        <td>Breakfast, Lunch & Dinner</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Umrah Visa</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Transportation</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Ziyarat & Umrah</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Support Of Own Akbar Executive</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>GST & TCS</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default InformationSection;