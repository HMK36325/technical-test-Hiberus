import React from "react";
import UserCard from "components/UserCard";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import useUserCards from "hooks/useUserCards";

export default function ListOfUsers() {
    const { users, loading, totalPages, page, setPage, setIsUserDeleted } = useUserCards();

    const handlePageClick = (data) => {
        console.log(data.nextSelectedPage)
        setPage(data.nextSelectedPage);
    }

    return <Container>
        <div className="show-more">
            <ReactPaginate
                previousLabel={'Anterior'}
                nextLabel={'Siguiente'}
                breakLabel={'...'}
                pageRangeDisplayed={5}
                marginPagesDisplayed={3}
                pageCount={totalPages}
                forcePage={page}
                onClick={handlePageClick}
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                activeClassName={'active'}
                renderOnZeroPageCount={null}
                eventListener={'onClick'}
            />
        </div>

        {loading ? <Spinner animation="border" className="loading" />
            : <Row>
                {users.length > 0 && users.map((user) => {
                    return <Col lg="3" md="4" key={user.id}>
                        <UserCard user={user} key={user.id} setIsUserDeleted={setIsUserDeleted} />
                    </Col>
                })}
            </Row>}
    </Container>
}