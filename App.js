import React from 'react'
import PropTypes from 'prop-types'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  FlatList,
  NavigatorIOS
} from 'react-native'

class HomeScreen extends React.Component {
  constructor (props) {
    super(props)
    this.renderLi = this.renderLi.bind(this)
  }
  static propTypes = {
    navigator: PropTypes.any
  }
  screens = [
    {
      component: require('./AnotherScreen').default,
      title: 'Another screen 1'
    },
    {
      component: require('./AnotherScreen').default,
      title: 'Another screen 2'
    },
    {
      component: require('./AnotherScreen').default,
      title: 'Another screen 3'
    },
    {
      component: require('./AnotherScreen').default,
      title: 'Another screen 4'
    }
  ]
  renderLi ({ index, item }) {
    return (
      <TouchableOpacity
        style={{
          padding: 20,
          borderBottomColor: '#ECECEC',
          borderBottomWidth: 1
        }}
        onPress={() => {
          this.props.navigator.push(item)
        }}
      >
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  extractKey (item, index) {
    return index
  }
  render () {
    return (
      <View style={styles.container}>
        <FlatList
          style={{
            backgroundColor: 'white'
          }}
          data={this.screens}
          renderItem={this.renderLi}
          keyExtractor={this.extractKey}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEEF4',
    flex: 1
  }
})

export default class App extends React.Component {
  render () {
    return (
      <NavigatorIOS
        initialRoute={{
          component: HomeScreen,
          title: 'Home'
        }}
        style={styles.container}
      />
    )
  }
}
