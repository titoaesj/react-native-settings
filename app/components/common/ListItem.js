import React, {
  Alert,
  Component,
  PropTypes,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import Touchable from './Touchable';


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
        return (

            <Touchable onPress={this.props.data.callback}>
              <View style={[styles.container, ...style]}>
                <Text>
                  {this.props.data.title}
                </Text>
              </View>
            </Touchable>
          );
        break;
      default:
        return (
          <View style={[styles.container, ...style]}>
            <TouchableHighlight >
              <Text>
                {this.props.data.title}
              </Text>
            </TouchableHighlight >
          </View>
          );
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
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  },
  icon: {
    fontSize: 20
  },
  fluxIconWrapper: {
    flex: 1,
    alignItems: 'center'
  },
  iconIn: {
    color: 'green'
  },
  iconOut: {
    color: 'red'
  },

  timeWrapper: {
    flex: 5,
    paddingHorizontal: 5
  },
  time: {
    fontSize: 20
  },

  buttonsGroupWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:50,
    backgroundColor: 'rgba(170, 180, 182, 0.64)'
  },
  iconLocation: {
    color: 'red'
  }
});

export default PointListItem;
