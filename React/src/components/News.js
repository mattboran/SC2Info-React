import React, { Component } from 'react';
import Loader from 'react-loader';

import { fetchNews } from '../lib/api';
class News extends Component{
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      newsItems: []
      }
    }

    getNewsItems() {
      fetchNews().then((newsItems) => {
        this.setState({ newsItems });
      });
    }
    componentDidMount() {
        // Simulate async call
        setTimeout(() => {
            this.setState({loading: false});
        },2000);
        this.getNewsItems();
    }

    render(){
        if (this.state.loading) {
            return(
                <div>
                    <Loader loaded = {!this.state.loading}/>
                </div>
            );
        }
        return(
            <div>
                <div>
                    <h2>SC2 News / Homepage</h2>
                    {this.state.newsItems.map(newsItem =>
                        <div key={newsItem.id}>{newsItem.title}</div>
                        )}
                </div>
            </div>
        );
    }
}

export default News;
