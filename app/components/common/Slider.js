import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';

import Color from '../../resources/color';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  MKSlider
} from 'react-native-material-kit';


class Slider extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon style={styles.icon}
          name={this.props.options.leftIcon}
          size={35}
          color={Color.color.SettingsIconColor} />
        <View style={styles.body}>
          <View style={styles.title}>
            <Text style={styles.titleSlider}>
              {this.props.title}
            </Text>
          </View>
          <View style={styles.col}>
            <MKSlider
              ref="slider"
              min={this.props.options.min}
              max={this.props.options.max}
              value={this.props.options.value}
              onChange={(e) => this.props.callback(e)}
              style={styles.slider} />
          </View>
        </View>
      </View>
    );
  }
}


Slider.propTypes = {
  title: React.PropTypes.string.isRequired,
  options: React.PropTypes.object.isRequired,
  callback: React.PropTypes.func
};

Slider.defaultProps = {
  title: 'Undefined Product',
  options: {
    leftIcon: "mic",
    min: 0,
    max: 100,
    value: 50,
  },
  callback: (e) => console.log('tur ',e)
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 16,
    paddingRight: 16,
    height: 70,
    paddingTop:5,
    paddingBottom:5
  },
  title: {
    fontSize: 18,
    marginLeft: 10
  },
  icon: {
    width: 35,
    height: 35,
    flexDirection: 'row',
    marginRight: 8,
    marginLeft: 10,
    alignItems: 'center'
  },
  body: {
    flex: 1,
    marginLeft: 0,
    paddingLeft: 0,
    alignSelf: 'stretch',
    paddingTop: 5

  },
  slider: {
    flex: 1
  },
  title: {
      paddingLeft: 15
  },
  titleSlider: {
      fontSize: 15
  }
});


export default Slider;
