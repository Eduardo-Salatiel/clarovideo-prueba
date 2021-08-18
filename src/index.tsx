import './index.scss';
import ReactDOM from 'react-dom';
import App from './App';
import { STORE } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={STORE}>
    <App />
  </Provider>,
  document.getElementById('root')
);

