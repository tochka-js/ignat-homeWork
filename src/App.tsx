import React from 'react';
import style from './App.module.css';
import Name from "./Name/Name";
import Text from "./Text/Text";
import Time from "./Time/Time";
import Avatar from "./Avatar/Avatar";

function App() {
    return (
        <div className={style.app}>
            <Avatar/>
            <div className={style.message}>
                <Name/>
                <Text/>
                <Time/>
            </div>


        </div>
    );
}

export default App;
