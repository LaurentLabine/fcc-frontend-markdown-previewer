import React from 'react';
import { Provider } from 'react-redux';
import { store } from './configure-store';
import { Container } from './previewer/container';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas);
library.add(fab);


const App = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);

export default App;
