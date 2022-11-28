import React from 'react';

const InformationSection = () => {
    return (
        <section className='container ps-5 '>
            <div className="ps-4">
            <table class="ms-5 ps-5 table table-bordered w-50 shadow ">
                <thead  style={{background: '#02A3C1'}}>
                    <tr className='text-white text-center'>
                        <th scope="col">Inclusions</th>
                        <th scope="col">Exclusions</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
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
                        <td>GST & TCS</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            </div>
            
        </section>
    );
};

export default InformationSection;