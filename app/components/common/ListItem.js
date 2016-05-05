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
import Switch from './Switch';

import {
  MKIconToggle,
  MKSwitch,
  MKRadioButton,
  MKCheckbox,
  MKColor,
  getTheme,
  setTheme,
  MKSlider
} from 'react-native-material-kit';



class ValueText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curValue: props.initial,
    };
  }

  onChange(curValue) {
    this.setState({curValue});
  }

  render() {
    return (
      <Text style={styles.legendLabel}>
        {this.state.curValue} ({this.props.rangeText})
      </Text>
    );
  }
}

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
                  {/*<Image style={styles.rowIcon}  source={require('../../resources/img/ic_clock.png')} />*/}
                  <Icon style={styles.rowIcon} name={this.props.data.options.leftIcon} size={35} color={Color.color.SettingsIconColor} />
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
          <Switch
            title={this.props.data.title}
            checked={this.props.data.checked}
            callback={this.props.data.callback}
          />
        );
        break;

        case 'CHECKBOX':
        return (
            <View style={[styles.containerCHECKBOX, ...style]}>
              <Text style={styles.rowTitle}>
                {this.props.data.title}
              </Text>
              <View style={styles.checkboxAlign}>
                <View style={styles.col}>
                  <MKCheckbox
                    onCheckedChange={(e) => this.props.data.callback(e)}
                    checked={true} />
                </View>
              </View>
            </View>
        );
        break;

        case 'RADIOBUTTON':
        return (
            <View style={[styles.containerRADIOBUTTON, ...style]}>
              <Text style={styles.rowTitle}>
                {this.props.data.title}
              </Text>
              <View style={styles.checkboxAlign}>
                <View style={styles.col}>
                  <MKRadioButton
                    checked={false}
                    onCheckedChange={(e) => this.props.data.callback(e)}
                    group={this.radioGroup} />
                </View>
              </View>
            </View>
        );
        break;

        case 'SLIDER':
        return (
            <View style={[styles.containerSLIDER, ...style]}>
              {/*<Image style={styles.rowIcon}  source={require('../../resources/img/ic_clock.png')} />*/}
              <Icon style={styles.rowIcon} name={this.props.data.options.leftIcon} size={35} color={Color.color.SettingsIconColor} />
              <View style={styles.bodySLIDER}>
                <View style={styles.rowWithIconTitleSlider}>
                  <Text style={styles.titleSliderText}>
                    {this.props.data.title}
                  </Text>
                </View>
                <View style={styles.col}>
                  <MKSlider
                    ref="slider"
                    min={this.props.data.options.min}
                    max={this.props.data.options.max}
                    value={this.props.data.options.value}
                    onChange={(e) => this.props.data.callback(e)}
                    style={styles.slider} />
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
    padding: 16
  },
  containerCHECKBOX: {
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
  containerRADIOBUTTON: {
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
  containerSLIDER: {
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
    alignSelf: 'center'
  },
  checkboxAlign: {
    alignSelf: 'center'
  },
  slider: {
    flex: 1
  },
  bodySLIDER: {
    flex: 1,
    marginLeft: 0,
    paddingLeft: 0,
    alignSelf: 'stretch',
    paddingTop: 5

  },
  rowWithIconTitleSlider: {
      paddingLeft: 15
  },
  titleSliderText: {
      fontSize: 15
  }
});

export default PointListItem;
