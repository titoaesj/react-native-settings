import React, {
  Component,
  StyleSheet,
  View,
  Text,
  Switch as RNSwitch
} from 'react-native';

class Switch extends Component {

  constructor(props) {
    super(props);

    this.state = {
      turSwitch: this.props.checked
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.props.title}
        </Text>
        <View style={styles.switch}>
            <View style={styles.col}>

              <RNSwitch
                onValueChange={(value) => {
                  this.props.callback(value);
                  this.setState({ turSwitch: value})}}
                style={styles.switch}
                value={this.state.turSwitch}
                />

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
