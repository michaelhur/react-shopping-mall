import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Gnb = () => (
    <StyledGnb>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/products">상품목록</Link>
            </li>
            <li>
                <Link to="/cart">장바구니</Link>
            </li>
        </ul>
    </StyledGnb>
);

export default Gnb;

const StyledGnb = styled.nav`
    max-width: 80%;

    ul {
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
`;
