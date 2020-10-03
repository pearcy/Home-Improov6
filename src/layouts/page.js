import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/page.scss';
import pageStyles from '../styles/page.module.scss';

const Page = (props) => {
    return (
        <div className={pageStyles.container}>
            <div className={pageStyles.content}>
            <Header />
            {props.children}
            </div>
            <Footer />
        </div>
    );
}

export default Page;







