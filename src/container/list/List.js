
import React from 'react'
import Header from '../../components/header/header.js'
import Footer from "../../components/footer/footer";

export default class  List extends React.Component{
    render (){
        return (
            <div>
                <Header title={'排行榜'}/>
                <div className="scrollTop">
                    <h1>List</h1>
                </div>
                <Footer/>
            </div>

        )
    }
}
