import React from 'react';
import { Container } from './styled';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';

function ChooseSign() {
    return (
        <Container>
            <Link className="button" to="/sign/user">
                SignIn how to user{' '}
            </Link>
            <Link className="button" to="/sign/artist">
                SignIn how to artist{' '}
            </Link>
            <Footer />
        </Container>
    );
}

export default ChooseSign;
