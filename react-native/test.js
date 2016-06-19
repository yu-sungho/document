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

  render() {
  var _scrollView: ScrollView;
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
     <View>
      <ScrollView style={{backgroundColor:'#a9a9a9', flex:1}}
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={true}
          onScroll={() => { console.log('onScroll!'); }}
          scrollEventThrottle={200}
          style={styles.scrollView}>
          <View>
              <View style={{padding:20,flex:1, flexDirection:'column'}}>
                <Text style={{flex:1, fontSize:25, marginBottom:10}}>Search</Text>
                <TextInput style={{flex:1, backgroundColor:'#FFFFFF'}} placeholder="Hello" />
              </View>
              <View style={{ padding:20,backgroundColor:'#a9a9a9', flex:1, flexDirection:'column'}}>
                <Text style={{flex:1, fontSize:25}}>WorkitemType</Text>
                    <MultipleChoice
                    style={{backgroundColor:'#FFFFFF'}}
                    options={this.state.resultData}
                    renderRow={this.renderMovie}
                    maxSelectedOptions={5}
                    onSelection={(option)=>alert(option + ' was selected!')}
                    />
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
  renderIndicator() {
    if (this._isSelected(option)) {
        return (
            <Image
                style={Styles.optionIndicatorIcon}
                source={require('./assets/images/check.png')}
            />
        );
    }
  }

  renderMovie(movie) {
    return (
      <View style={styles.container}>
      <TouchableOpacity
          activeOpacity={disabled ? 1 : 0.7}
          onPress={!disabled ? ()=>{this._selectOption(option)} : null}
      >
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
        <View style={styles.optionIndicator}>{this.renderIndicator()}</View>
    </TouchableOpacity>
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
    backgroundColor: '#a9a9a9',
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
