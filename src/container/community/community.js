
import React from 'react'
import Header from '../../components/header/header.js'
import Footer from "../../components/footer/footer";

export default class  Community extends React.Component{
    render (){
        return (
            <div>
                <Header title={'我的社区'}/>
                <div className="scrollTop">
                    <h1>Community</h1>
                </div>
                <Footer/>
            </div>

        )
    }
}
