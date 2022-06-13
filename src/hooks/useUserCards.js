import { useContext, useEffect, useState } from "react";
import Context from "context/userContext";
import { useLocation } from "wouter";
import getUsers from "services/getUsers";


export default function useUserCards() {
    const [, navigate] = useLocation()
    const [loading, setLoading] = useState(false)
    const [totalPages, setTotalPage] = useState(5)
    const [isUserModify, setIsUserModify] = useState(false)
    const [allUsers, setAllUsers] = useState([])
    const [page, setPage] = useState(0)
    const [users, setUsers] = useState([])
    const { currentUser } = useContext(Context)

    useEffect(() => {
        setLoading(true)
        if (currentUser) {
            getUsers({ currentUser }).then((res) => {
                console.log(res)
                const { auxArray, total } = paginateUsers(res.items.filter(user => user.id !== currentUser.id))
                setAllUsers(auxArray)
                setUsers(auxArray[0])
                setTotalPage(total)
                setLoading(false)
                setIsUserModify(false)
            })
        } else navigate('/')
    }, [currentUser, isUserModify, navigate])

    useEffect(() => {
        setUsers(allUsers[page])
    }, [page, allUsers])

    function paginateUsers(users) {
        console.log(users)
        const auxArray = []
        for (let i = 0; i < users.length; i += 20) {
            auxArray.push(users.slice(i, i + 20 > users.length ? users.length : i + 20))
        }
        return { auxArray, total: auxArray.length }
    }

    return { loading, users, page, totalPages, setPage, setIsUserModify }
}