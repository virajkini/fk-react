import { useState } from 'react';

import Main from './screens/Main';
import Drawer from './screens/Drawer';

import './App.css';

function App() {
  const [cardList, updateCardList] = useState([]);
  const [showDrawer, updateShowDrawer] = useState(false);

  const addCard = (card) => {
      if(cardList.length < 5) {
          updateCardList([
            ...cardList,
            card,
          ]);
      }
  }

  return (
    <div className="app">
        <Main
          cardList={cardList}
          onShow={() => updateShowDrawer(true)}
          showDrawer={showDrawer}
        />
        {
          showDrawer &&
          <Drawer 
            onSubmit={addCard}
            onClose={() => updateShowDrawer(false)}
          />
        }
    </div>
  );
}

export default App;
