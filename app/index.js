import { AppRegistry, Hello }  from 'react-native';
import { Provider } from 'react-redux';
import { App } from './components';

const ankiapp = () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}

export default ankiapp
AppRegistry.registerComponent('App', () => ankiapp)