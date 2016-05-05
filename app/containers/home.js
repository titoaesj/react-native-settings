import React, {
  Component,
  View,
  ListView,
  Text,
  StyleSheet
} from 'react-native';

import {connect} from 'react-redux';
import Header from '../components/common/Header';
import * as MyStyleSheet from '../components/common/MyStyleSheet';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import Color from '../resources/color'; //Importa a palheta de cores
import SettingsListView from '../components/common/SettingsListView';

class Home extends Component {

  constructor(props) {
    super(props);

    this.data = [
      {
        title: "Horário de trabalho",
        type: "LINK",
        callback: this.itemCallback.bind(this),
        options: {
          leftIcon: "access-time"
        }
      },
      {
        title: "Notificação",
        type: "LINK",
        callback: this.itemCallback.bind(this)
      },
      {
        title: "Switch",
        type: "SWITCH",
        checked: false,
        callback: this.switchCallback.bind(this)
      },
      {
        title: "CheckBox",
        type: "CHECKBOX",
        callback: this.checkBoxCallback.bind(this)
      },
      {
        title: "RadioButton",
        type: "RADIOBUTTON",
        callback: this.radioCallback.bind(this)
      },
      {
        title: "Volume do microfone",
        type: "SLIDER",
        callback: this.sliderCallback.bind(this),
        options: {
          leftIcon: "mic",
          min: 0,
          max: 100,
          value: 50,

        }
      }
    ];

  }

  itemCallback(){
    console.log('callback do item');
  }

  switchCallback(self) {
    console.log('home switch tur ', self);
  }

  sliderCallback(self) {
    console.log('Currente value ', self);
  }

  checkBoxCallback(self) {
    console.log('checkbox tur ', self);
  }

  radioCallback(self) {
    console.log('radio tur ', self);
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
          <SettingsListView dataList={this.data} />
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
