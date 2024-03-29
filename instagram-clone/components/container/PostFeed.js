import React, {Component} from 'react'
import { FlatList, Text } from 'react-native'
import Post from '../presentation/Post'

class PostFeed extends Component {
  _renderPost({item}){
    return <Post/>;
  }

  _returnKey (item){
    return item.toString();
  }
  render (){
    return (<FlatList
    data = {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}
     keyExtractor = {this._returnKey}
    renderItem = {this._renderPost}/>);
    }
}
export default PostFeed;