import React, {
  Component,
  ListView,
  PropTypes,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ListItem from './ListItem';
import Color from '../../resources/color';

/**
 * Lista de pontos batidos
 */
class SettingsListView  extends Component {

  /**
   * construtor do component
   * @param  {Object} props
   * @return {void}
   */
  constructor(props) {
    super(props);

    // dataSource -> lista de pontos
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource
    }
  }

  /**
   * Component Lifecycle Method
   * @return {void}
   */
  componentDidMount() {
    // popula o dataSource com os pontos
    this.setState({
      dataSource : this.state.dataSource.cloneWithRows(this.props.dataList)
    });
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      dataSource : this.state.dataSource.cloneWithRows(newProps.dataList)
    });
  }

  /**
   * renderiza a linha do listView
   * @param  {object} point -> ponto
   * @param  {number} idSec -> id da sequência
   * @param  {number} idRow -> id da linha
   * @return {ReactElement} SettingsListView Item
   */
  renderRow(data, idSec, idRow) {
    return (
      <ListItem
        data={data} />
    );
  }

  /**
   * renderiza a lista de pontos
   * @return {ReactElement}
   */
  renderSettingsListView () {

      // caso não tenha ponto, retorna a mensagem
      if(this.props.dataList.length === 0) {
        return (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={{fontSize: 20}}>
              Você ainda não bateu o ponto Hoje!
            </Text>
          </View>
        );
      }

      // retorna a ListView
      return (
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
            style={styles.listView}
            renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
          />
      );
  }

  /**
   * Renderiza o componente
   * @return {ReactElement}
   */
  render() {
    return (
      <View style={styles.container}>
        {this.renderSettingsListView()}
      </View>
    );
  }
}

// Props do componente
SettingsListView.propTypes = {
  dataList: PropTypes.array.isRequired
}

// Estilo do componente
var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    listView: {
      backgroundColor: Color.color.BackgroundListView
    },
    separator: {
      height: 1,
      backgroundColor: '#CCCCCC',
    }
});

export default SettingsListView;
