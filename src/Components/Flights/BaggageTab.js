import React from 'react';

const BaggageTab = () => {
    return (
        <section className='pt-2 mb-4'>
            <div className='px-4'>
                <div className="border border-secondary rounded">
                    <div className="px-4">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">BAGGAGE SUMMARY</th>
                                    <th scope="col">DETAILS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Check In Baggage</td>
                                    <td>15 Kg (One Piece Only) - Each Adult & Child</td>
                                </tr>
                                <tr>
                                    <td>Hand Baggage</td>
                                    <td>7 Kg - Each Adult & Child</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="px-4">
                        <h6>BAGGAGE DISCLAIMER</h6>
                        <div className="my-2 text-capitalize">
                            <li>
                                <strong>Hand Baggage: </strong> Airlines permits only one (1pc) bag weighing not more than 7 KGS. In addition to the one piece of Hand Baggage permitted, Few Airlines may permit Customer to carry one additional personal article such as ladies purse or a small bag containing laptop not weighing more than 3 KGS.
                            </li>
                            <li>
                                <strong>Infant Baggage: </strong> Passenger Traveling with Infant are allowed to carry 1 Pc of additional Hand Baggage not exceeding 7 KGS.
                            </li>
                            <li>
                                The baggage information is just for reference, Please check with airline for more specific information.
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BaggageTab;