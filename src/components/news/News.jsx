import React, { Component } from 'react'
    import './News.css'

import NewsTemplate from './newstemplate/NewsTemplate'

class News extends Component {
    render() {
        return (
            <div className="news">
                <NewsTemplate title={'1.Name bla bla'}/>
                <NewsTemplate title={'2.Name bla bla'}/>
                <NewsTemplate title={'3.Name bla bla'}/>
                <NewsTemplate title={'4.Name bla bla'}/>
                <NewsTemplate title={'5.Name bla bla'}/>
                <NewsTemplate title={'6.Name bla bla'}/>
                <NewsTemplate title={'7.Name bla bla'}/>
                <NewsTemplate title={'8.Name bla bla'}/>
            </div>
        )
    }
}

export default News