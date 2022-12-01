import React from 'react';

const FareBreakupTab = () => {
    return (
        <section className='pt-2 mb-4'>
            <div className='px-4'>
                <div className="border border-secondary rounded">
                    <div className="border-bottom border-secondary py-2 px-3">
                        <p className='m-0 text-uppercase font-semibold' style={{ fontSize: '12px' }}>Fare breakup summary</p>
                    </div>
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