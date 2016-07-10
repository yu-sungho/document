/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  Component,
} from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import MultipleChoice from 'react-native-multiple-choice'
import AutoLink from 'react-native-autolink';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class SampleApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
      resultData: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        var resultThree = [];
        resultThree.push(responseData.movies[0]);
        resultThree.push(responseData.movies[1]);
        resultThree.push(responseData.movies[2]);
        resultThree.push(responseData.movies[3]);
        resultThree.push(responseData.movies[4]);

        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(resultThree),
          resultData: resultThree,
          loaded: true,
        });
      })
      .done();
  }

  _selectOption() {
    alert("test");
  }

  render() {
  var _scrollView: ScrollView;
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View>
      <ScrollView style={{backgroundColor:'#FFFFFF', height:500}}
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={true}
          onScroll={() => { console.log('onScroll!'); }}
          scrollEventThrottle={200}
          style={styles.scrollView}>
          <View>
              <View style={{ padding:20,backgroundColor:'#FFFFFF'}}>
 <TouchableOpacity
          activeOpacity={1}
          onPress={()=>{this._selectOption()}}> 
                <AutoLink style={{fontSize:25}}
                text="WorkitemTypesdfsd http://stackoverflow.com/questions/32634352/react-native-android-build-failed fsdfsdfsdfsdfsdfsdfsd http://daum.net fsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfWorkitemTypesdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfWorkitemTypesdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfWorkitemTypesdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfWorkitemTypesdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfWorkitemTypesdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfWorkitemTypesdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfWorkitemTypesdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfWorkitemTypesdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfWorkitemTypesdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfWorkitemTypesdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfWorkitemTypesdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfWorkitemTypesdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfWorkitemTypesdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf"/>
                </TouchableOpacity>
              </View>
          </View>
       </ScrollView>
       </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
  },  
  scrollView: {
    backgroundColor: '#FFFFFF',
    height:windowSize.height
  },
  horizontalScrollView: {
    height: 120,
  },
  containerPage: {
    height: 50,
    width: 50,
    backgroundColor: '#527FE4',
    padding: 5,
  },
    optionLabel: {
        flex: 1,
    },

    optionIndicator: {
        width: 40,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    optionIndicatorIcon: {
        width: 20,
        height: 20
    },

    separator: {
        height: 1,
        marginTop: 4,
        marginBottom: 4,
        backgroundColor: '#efefef',
    }
});

export default SampleApp;
