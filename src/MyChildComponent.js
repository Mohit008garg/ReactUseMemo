import React, {memo} from 'react';

function MyChildComponent({childState, changeChildStateFunction}) {
    console.log('rendering child component');
    return (
      <>
       This is Child Component
        <br/>
       Child state is:{childState}

       <button onClick={()=>changeChildStateFunction()}>Update child State</button>
      </>
    );
  }
  
  export default memo(MyChildComponent);