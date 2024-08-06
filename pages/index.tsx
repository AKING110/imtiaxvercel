import React from 'react';
import ImageComponent from './ImageComponent';

const App: React.FC = () => {
  return (
    <div>
      <h1>Image Example</h1>
      <ImageComponent url="https://cdn.fbsbx.com/v/t59.2708-21/454367626_1207839870549096_1345176207741285078_n.ico/5543423.ico?_nc_cat=103&ccb=1-7&_nc_ohc=Kc2JeWm5KToQ7kNvgFF6PVL&_nc_ht=cdn.fbsbx.com&dl=1&stp=c0.5000x0.5000f_dst-jpg_flffffff_p960x501_q75&ur=2b0e22&_nc_sid=c97757&oh=03_Q7cD1QFfKy36X_5zVBB8bshD3ZediOLg2BmehZLiHnve8Z3pug&oe=66B38E94" alt="Description of the image" />
    </div>
  );
};

export default App;
