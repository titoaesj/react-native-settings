import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';

import {
  MKSwitch
} from 'react-native-material-kit';


class Switch extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.props.title}
        </Text>
        <View style={styles.switch}>
            <View style={styles.col}>
              <MKSwitch
                checked={this.props.checked}
                onCheckedChange={(e) => this.props.callback(e)}
                style={styles.switch} />
            </View>
        </View>
      </View>
    );
  }
}

Switch.propTypes = {
  title: React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool,
  callback: React.PropTypes.func
};

Switch.defaultProps = {
  title: 'Undefined Product',
  checked: false,
  callback: (e) => console.log('tur ',e)
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  switch: {
    alignSelf: 'center'
  },
});


export default Switch;
