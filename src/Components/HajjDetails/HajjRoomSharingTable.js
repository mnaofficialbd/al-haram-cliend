import React from 'react';

const HajjRoomSharingTable = () => {
    return (
        <section className='container ps-5 '>
            <div className="ps-4">
                <table class="ms-5 ps-5 table table-bordered text-center w-50 shadow ">
                    <thead style={{ background: '#02A3C1' }}>
                        <tr className='text-white'>
                            <th scope="col">Room Type</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Single Room</td>
                            <td>Rs 5000/-</td>
                        </tr>
                        <tr>
                            <td>Twin Sharing</td>
                            <td>Rs 5000/-</td>
                        </tr>
                        <tr>
                            <td>Triple Sharing</td>
                            <td>Rs 5000/-</td>
                        </tr>
                        <tr>
                            <td>Quad Sharing</td>
                            <td>Rs 5000/-</td>
                        </tr>
                        <tr>
                            <td>Quint Sharing</td>
                            <td>Rs 5000/-</td>
                        </tr>
                        <tr>
                            <td>Hexa Sharing</td>
                            <td>Rs 5000/-</td>
                        </tr>
                        <tr>
                            <td>Child With Bed</td>
                            <td>Rs 5000/-</td>
                        </tr>
                        <tr>
                            <td>Child Without Bed</td>
                            <td>Rs 5000/-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default HajjRoomSharingTable;