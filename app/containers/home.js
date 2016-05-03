import React, {
  Component,
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';

import {connect} from 'react-redux';
import Header from '../components/common/Header';
import * as MyStyleSheet from '../components/common/MyStyleSheet';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import Color from '../resources/color'; //Importa a palheta de cores


class Home extends Component {

  renderRow(rowData) {
    return <SampleRow {...rowData} style={styles.row} />
  }

  render() {

    leftItem = {
      title: 'Menu',

      /**
       * Ao passar um numero maior que zero muda
       * o icone indicando que á notificações
       */
      icon: require('../resources/img/ic_settings_white.png'),

    };

    return (
      <View style={styles.container} >
        <Header
          style={styles.header}
          title="Configurações"
          leftItem={leftItem} >
        </Header>
        <View style={styles.body}>

        </View>
      </View>
    );
  }

}

Home.contextTypes = {
  openDrawer: React.PropTypes.func,
};

var styles = MyStyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    android: {
      backgroundColor: Color.color.PrimaryColor,
    },
  },
  body: {
    flex: 1
  }
});

// function mapStateToProps(state) {
//     return {
//       fetchData: state.fetchData,
//       user: state.user
//     };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     changeImageUser: (userId, picture, profile) => dispatch(changeImageUser(userId, picture, profile)),
//     changeProfile: (userId, profile) => {dispatch(changeProfile(userId, profile))}
//   };
// }


export default connect()(Home);
