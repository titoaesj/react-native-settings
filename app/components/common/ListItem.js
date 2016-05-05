import React, {
  Component,
  PropTypes
} from 'react-native';

import moment from 'moment';
import Switch from './Switch';
import CheckBox from './CheckBox';
import RadioButton from './RadioButton';
import Slider from './Slider';
import Button from './Button';

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

class ListItem extends Component {
  render() {

    switch (this.props.data.type) {
      case 'BUTTON':
        return (
          <Button
            title={this.props.data.title}
            options={this.props.data.options}
            callback={this.props.data.callback} />
        );
        break;

        case 'SWITCH':
        return (
          <Switch
            title={this.props.data.title}
            checked={this.props.data.checked}
            callback={this.props.data.callback} />
        );
        break;

        case 'CHECKBOX':
        return (
            <CheckBox
              title={this.props.data.title}
              checked={this.props.data.checked}
              callback={this.props.data.callback} />
        );
        break;

        case 'RADIOBUTTON':
        return (
            <RadioButton
              title={this.props.data.title}
              checked={this.props.data.checked}
              callback={this.props.data.callback} />
        );
        break;

        case 'SLIDER':
        return (
          <Slider
            title={this.props.data.title}
            options={this.props.data.options}
            callback={this.props.data.callback} />
        );
        break;
    }
  }
}

// Props do componente
ListItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    options: PropTypes.object,
  })
}

export default ListItem;
