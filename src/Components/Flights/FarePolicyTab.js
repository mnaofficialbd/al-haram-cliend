import React from 'react';

const FarePolicyTab = () => {
    return (
        <section className='pt-2 mb-4'>
            <div className='px-4' style={{ background: '#F5F5F5' }}>
                <div className="d-md-flex">

                    <div className="px-2 w-50">
                        <div className="text-center" style={{ background: '#02A3C1' }}>
                            <h5 className='text-white text-uppercase py-2 m-0'>cancellation charges per pax</h5>
                        </div>
                        <table class="table table-bordered border-dark">
                            <thead>
                                <tr>
                                    <th scope="col">TIMELINE</th>
                                    <th scope="col">PENALTY</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0 HOUR - 3 HOUR</td>
                                    <td>NOT REFUNDABLE</td>
                                </tr>
                                <tr>
                                    <td>0 HOUR - 3 HOUR</td>
                                    <td>RS 3,499.00</td>
                                </tr>
                                <tr>
                                    <td>0 HOUR - 3 HOUR</td>
                                    <td>RS 2,975.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="px-2 w-50">
                        <div className="text-center" style={{ background: '#02A3C1' }}>
                            <h5 className='text-white text-uppercase py-2 m-0'>reshedule charges per pax</h5>
                        </div>
                        <table class="table table-bordered border-dark">
                            <thead>
                                <tr>
                                    <th scope="col">TIMELINE</th>
                                    <th scope="col">PENALTY</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0 HOUR - 3 HOUR</td>
                                    <td>NOT REFUNDABLE</td>
                                </tr>
                                <tr>
                                    <td>0 HOUR - 3 HOUR</td>
                                    <td>RS 3,499.00</td>
                                </tr>
                                <tr>
                                    <td>0 HOUR - 3 HOUR</td>
                                    <td>RS 2,975.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className='text-uppercase' style={{fontSize: '13px'}}>
                    <p>HappyFare Fee: ₹ 500 Per Pax</p>
                    <p className='font-bold'>Disclaimer :</p>
                    <li>
                        <span className='font-bold'>Check -in </span>for all Domestic Flights Closes 45 Minutes prior to the scheduled departure, Failure to check -in at least 45 minutes prior will result in the fare being forfeited.
                    </li>
                    <li>
                        If Ticket Fare is lower than Cancellation penalty then Basic Fare Plus Fuel Surcharge will be charged as cancellation Fee, only statutory taxes will be refunded.
                    </li>
                    <li>
                        Re-issue not advisable if Ticket fare is lower than Re-issue charges, better cancel and issue new ticket.
                    </li>
                    <li>
                    <span className='font-bold'>INFANT -</span> No Re-issue & Cancel Fee applicable for Infant Ticket except for Air Asia, INFANT TICKETS ARE NON REFUNDABLE ON AIR ASIA,
                    </li>
                    <li>
                        Partial Cancellation is not allowed on tickets booked under special discounted Round trip fares.
                    </li>
                    <li>
                      <span className='font-bold'>No Show </span>means, if a ticket is not cancelled within the stipulated time.
                    </li>
                    <li>
                        Tickets booked under Sale / Promo Fare are Non Refundable, Above Cancel/Re-issue Penalty is applicable for Refundable Fares only, For Fares Marked as Non Refundable only statutory taxes will be refunded
                    </li>
                    <li>
                        <span className='font-bold'>Family Fare-</span> Cancellation in respect of the booking made under family fare shall only be permissible if minimum of four (04) passengers are retained in the booking.
                    </li>
                    <li>
                        ANY AMOUNT PAID TOWARDS SEAT, MEAL, EXTRA BAGGAGE BOOKING IN AIR ASIA ARE NON REFUNDABLE IN CASE OF TICKET CANCELLATION.
                    </li>
                    <li>
                        The above Fare Rules are just a guideline for your convenience and is subject to changes by the Airline from time to time.
                    </li>
                </div>
            </div>
        </section>
    );
};

export default FarePolicyTab;