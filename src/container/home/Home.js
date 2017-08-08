
import React from 'react'
import Header from '../../components/header/header.js'
//import Footer from "../../components/footer/footer";

export default class Home extends React.Component{
    constructor(){
        super();
    }
    render (){
        return (
            <div>
                <Header title={'首页'}/>
                <div className="scrollTop">
                    <h1>home</h1>
                </div>

            </div>

        )
    }
}