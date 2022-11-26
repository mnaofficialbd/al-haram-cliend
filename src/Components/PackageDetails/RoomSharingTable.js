import React from 'react';

const RoomSharingTable = () => {
    return (
        <section>
            <table class="table text-white w-50 mx-auto shadow text-center" style={{background: '#02A3C1'}}>
                <thead>
                    <tr>
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
        </section>
    );
};

export default RoomSharingTable;