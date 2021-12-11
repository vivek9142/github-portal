import React from 'react';
import MainForm from '../../components/MainForm/MainForm.component';

const HomePage = (props) => {
    const redirectHandler = () => {
        props.history.push('/users/');
    }
    return(
        <div className="homepage__container">
            <MainForm onRedirect={redirectHandler}/>
        </div>
    )
};

export default HomePage;