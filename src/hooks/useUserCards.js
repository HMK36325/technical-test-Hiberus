import { useContext, useEffect, useState } from "react";
import Context from "context/userContext";
import getUsers from "services/getUsers";


export default function useUserCards() {
    const [loading, setLoading] = useState(false)
    const [totalPages, setTotalPage] = useState(5)
    const [isUserDeleted, setIsUserDeleted] = useState(false)
    const [allUsers, setAllUsers] = useState([])
    const [page, setPage] = useState(0)
    const [users, setUsers] = useState([])
    const { currentUser } = useContext(Context)

    useEffect(() => {
        setLoading(true)
        if (currentUser) {
            getUsers({ currentUser }).then((res) => {
                const { auxArray, total } = paginateUsers(res.items)
                setAllUsers(auxArray)
                setUsers(auxArray[0])
                setTotalPage(total)
                setLoading(false)
                setIsUserDeleted(false)
            })
        }
    }, [currentUser, isUserDeleted])

    useEffect(() => {
        setUsers(allUsers[page])
    }, [page, allUsers])

    function paginateUsers(users) {
        const auxArray = []
        for (let i = 0; i < users.length; i += 20) {
            auxArray.push(users.slice(i, i + 20 > users.length ? users.length : i + 20))
        }
        return { auxArray, total: auxArray.length }
    }

    return { loading, users, page, totalPages, setPage, setIsUserDeleted }
}