/*
 * @Descripttion: 
 * @Author: Calvin
 * @Date: 2021-09-06 15:40:56
 */
import { Provider } from 'react-redux';
import Router from '@/router';
import store from '@/store';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
