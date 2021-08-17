import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditBooking from './EditBookingForm';
import './EditBooking.css'

function BookingFormModal({booking}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="updateBooking" onClick={() => setShowModal(true)}>Update</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditBooking booking={booking}/>
                </Modal>
            )}
        </>
    )
}

export default BookingFormModal;
