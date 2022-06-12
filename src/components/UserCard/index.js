import useUser from "hooks/useUser";
import React from "react";
import { Button } from "react-bootstrap";

export default function UserCard({ user, setIsUserDeleted }) {
    const { deleteUser } = useUser()

    const handleDelete = () => {
        setIsUserDeleted(true)
        deleteUser({ userId: user.id })
    }

    return <div className="bg-white rounded shadow-sm py-5 d-flex flex-column align-items-center mb-4">
        <img src="images/user_placeholder.png" alt={user.id} width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
        <h5>{user.name}</h5>
        <div className="d-flex gap-3 mt-3">
            <Button variant="info">✏️</Button>
            <Button variant="danger" onClick={handleDelete}>🗑️</Button>
        </div>
    </div>
}