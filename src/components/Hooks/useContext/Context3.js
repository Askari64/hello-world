import React, {useContext} from 'react';
import { firstNameContext, middleNameContext, lastNameContext } from './ContextApp';

function Context3() {
    const firstName = useContext(firstNameContext);
    const middleName = useContext(middleNameContext);
    const lastName = useContext(lastNameContext);

    let name = `${firstName} ${middleName} ${lastName}`
  return (
    <div>Name - {name}  </div>
  )
}

export default Context3