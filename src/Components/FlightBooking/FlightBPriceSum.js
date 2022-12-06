import React from 'react';

const FlightBPriceSum = () => {
    return (
        <section>
            <h5 className="text-center">Price Summary</h5>
            <div>
                <table class="table">
                    <tbody>
                        <tr>
                            <td>Adult : 1</td>
                            <td>28,500.00</td>
                        </tr>
                        <tr>
                            <td>All Taxes</td>
                            <td>1500.00</td>
                        </tr>
                        <tr>
                            <td>Grand Total</td>
                            <td>30,000.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='mt-3 d-flex justify-content-center'>
                <button className="popular-card-btn">
                    Continue Booking
                </button>
            </div>
        </section>
    );
};

export default FlightBPriceSum;