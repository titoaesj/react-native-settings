import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';

import {
  MKCheckbox
} from 'react-native-material-kit';


class CheckBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.props.title}
        </Text>
        <View style={styles.checkbox}>
          <View style={styles.col}>
            <MKCheckbox
              onCheckedChange={(e) => this.props.callback(e)}
              checked={this.props.checked} />
          </View>
        </View>
      </View>
    );
  }
}

CheckBox.propTypes = {
  title: React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool,
  callback: React.PropTypes.func
};

CheckBox.defaultProps = {
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
  checkbox: {
    alignSelf: 'center'
  },
});


export default CheckBox;
