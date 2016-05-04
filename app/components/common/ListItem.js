import React, {
  Alert,
  Component,
  PropTypes,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import Touchable from './Touchable';
import Color from '../../resources/color';

import {
  MKIconToggle,
  MKSwitch,
  MKRadioButton,
  MKCheckbox,
  MKColor,
  getTheme,
  setTheme,
} from 'react-native-material-kit';


/**
 * Componente chamado pelo PointList para renderizar cada ponto batido
 */
class PointListItem extends Component {

  _onViewPress() {
    this.context.onViewPress && this.context.onViewPress(this.props.data)
  }

  _onEditPress() {
    this.context.onEditPress && this.context.onEditPress(this.props.data)
  }

  _onLocationPress() {
    this.context.onLocationPress && this.context.onLocationPress(this.props.data)
  }

  /**
   * Renderiza o componente
   * @return {ReactElement}
   */
  render() {

    // recebe estilo definido no props
    let style = this.props.style || {};
    let edited = this.props.data.edited ? '*': '';


    switch (this.props.data.type) {
      case 'LINK':

        // Verifica se a row terar icon
        if (this.props.data.options != null
            && this.props.data.options.leftIcon != null) {
          return (
              <Touchable onPress={this.props.data.callback}>
                <View style={[styles.containerLINK, ...style]}>
                  <Image style={styles.rowIcon} source={require('../../resources/img/ic_clock.png')} />
                  {/*<Icon style={styles.rowIcon} name="timer" size={30} color={Color.color.SettingsIconColor} />*/}
                  <Text style={styles.rowWithIconTitle}>
                    {this.props.data.title}
                  </Text>
                </View>
              </Touchable>
            );
        } else {
          return (
              <Touchable onPress={this.props.data.callback}>
                <View style={[styles.containerLINK, ...style]}>
                  <Text style={styles.rowTitle}>
                    {this.props.data.title}
                  </Text>
                </View>
              </Touchable>
            );
          }
        break;

        case 'SWITCH':
        return (
            <View style={[styles.containerSWITCH, ...style]}>
              <Text style={styles.rowTitle}>
                {this.props.data.title}
              </Text>
              <View style={styles.switchAlign}>
                  <View style={styles.col}>
                    <MKSwitch checked={true} style={styles.switch} />
                  </View>
              </View>
            </View>
        );
        break;
    }
  }
}

// Props do componente
PointListItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    options: PropTypes.object,
  })
}

PointListItem.contextTypes = {
  onEditPress: PropTypes.func,
  onViewPress: PropTypes.func,
  onLocationPress: PropTypes.func,
}

// Estilos do componente
const styles = StyleSheet.create({
  containerLINK: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 70,
    padding: 16,
    borderBottomWidth: 0.3,
    borderBottomColor: 'gray'
  },
  containerSWITCH: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
    height: 70,
    paddingTop:5,
    paddingBottom:5,
    borderBottomWidth: 0.3,
    borderBottomColor: 'gray'
  },
  rowWithIconTitle: {
    fontSize: 18
  },
  rowTitle: {
    fontSize: 18,
    marginLeft: 10
  },
  rowIcon: {
    width: 35,
    height: 35,
    flexDirection: 'row',
    marginRight: 8,
    marginLeft: 10,
    alignItems: 'center'
  },
  switchAlign: {
    alignSelf: 'flex-end'
  }
});

export default PointListItem;
