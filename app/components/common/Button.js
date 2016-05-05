import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';

import Touchable from './Touchable';
import Color from '../../resources/color';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Button extends Component {
  render() {
      // Verifica se a row terar icon
      if (this.props.options != null &&
        this.props.options.leftIcon != null) {
        return (
            <Touchable onPress={this.props.callback}>
              <View style={styles.container}>
                <Icon
                  style={styles.icon}
                  name={this.props.options.leftIcon}
                  size={35}
                  color={Color.color.SettingsIconColor} />
                <Text style={styles.titleIcon}>
                  {this.props.title}
                </Text>
              </View>
            </Touchable>
          );
      } else {
        return (
            <Touchable onPress={this.props.callback}>
              <View style={styles.container}>
                <Text style={styles.title}>
                  {this.props.title}
                </Text>
              </View>
            </Touchable>
          );
        }
  }
}

Button.propTypes = {
  title: React.PropTypes.string.isRequired,
  options: React.PropTypes.object,
  callback: React.PropTypes.func
};

Button.defaultProps = {
  title: 'Undefined Product',
  callback: () => console.log('click button')
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 70,
    padding: 16
  },
  titleIcon: {
    fontSize: 18
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
  }
});


export default Button;
