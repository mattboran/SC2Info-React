import React, { Component } from 'react';
import Loader from 'react-loader';

import { fetchNews } from '../lib/api';
class News extends Component{
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
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
            this.setState({loaded: true});
        },2000);
        this.getNewsItems();
    }


    render(){
        const Title = () =>  <h2>SC2 News / Homepage</h2>;

        if (!this.state.loaded) {
            return(
                <div>
                    <Loader loaded = {this.state.loaded}/>
                </div>
            );
        }
        // In the case of articles not being loaded
        if (!this.state.newsItems || this.state.newsItems.length === 0){
          return(
            <div>
                <Title />
                <h3>Error: unable to get articles</h3>
            </div>
          );
        }

        return(
            <div>
                <Title />
                {/*{this.state.newsItems.map(newsItem =>*/}
                    {/*<div key={newsItem.id}>{newsItem.title}</div> )}*/}
            </div>
        );
    }
}

export default News;
