import ModalPortal from "components/Modal";
import UpdateUserForm from "components/UpdateUserForm.js";
import useUser from "hooks/useUser";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function UserCard({ user, setIsUserModify }) {
    const { deleteUser } = useUser()
    const [showModal, setShowModal] = useState(false)

    const handleDelete = () => {
        setIsUserModify(true)
        deleteUser({ userId: user.id })
    }

    const handleUpdate = () => setShowModal(true)

    const handleClose = () => setShowModal(false)

    const updated = () => {
        setShowModal(false)
        setIsUserModify(true)
    }


    return <div className="bg-white rounded shadow-sm py-5 d-flex flex-column align-items-center mb-4">
        <img src="images/user_placeholder.png" alt={user.id} width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
        <h5>{user.name}</h5>
        <div className="d-flex gap-3 mt-3">
            <Button variant="info" onClick={handleUpdate}>✏️</Button>
            <Button variant="danger" onClick={handleDelete}>🗑️</Button>
        </div>
        {showModal && <ModalPortal onClose={handleClose}><UpdateUserForm user={user} onUpdate={updated} /></ModalPortal>}
    </div>
}
