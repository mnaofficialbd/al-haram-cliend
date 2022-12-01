import React from 'react';

const FareBreakupTab = () => {
    return (
        <section className='pt-2 mb-4'>
            <div className='px-4'>
                <div className="rounded"  style={{background: '#F5F5F5'}}>
                    <div className="px-4">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">FARE BREAKUP SUMMARY</th>
                                    <th scope="col">AMOUNT INR</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Basic Amount</td>
                                    <td>RS 34,575.00</td>
                                </tr>
                                <tr>
                                    <td>Tax Amount</td>
                                    <td>RS 34,575.00</td>
                                </tr>
                                <tr>
                                    <td>Yq Amount</td>
                                    <td>RS 34,575.00</td>
                                </tr>
                                <tr>
                                    <td>Gst</td>
                                    <td>RS 34,575.00</td>
                                </tr>
                                <tr className='font-semibold'>
                                    <td>Total Amount</td>
                                    <td>RS 34,575.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FareBreakupTab;