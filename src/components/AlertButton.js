import React from "react";

function EventAlert ({message, children}) {
    return(
        <button onClick={()=> alert(message)}>
            {children}
        </button>  
          );
};

export default function ButtonBar () {
    return (
       <>
         <EventAlert message={'Skipping a rope'}>
            Rope SKip
        </EventAlert>

        <EventAlert message={'Swimming a pond'}>
            Swim
        </EventAlert>
       </>
    );
};

/*import React from "react";

function Buttons ({message, children}) {
    return(
        <button onClick={()=> alert(message)}>
            {children}
        </button>
    );
};

export default function ButtonList () {
    return (
        <>
        <Buttons message= {'Touching Grass'}>
            Touch Grass
        </Buttons>

        <Buttons message={'Going for a walk'}>
            Go Out
        </Buttons>
        </>
    )
};*/



/*import React from "react";

function AlertButton ({message, children}) {
return(
    <button onClick={() => alert(message)}>
        {children}
    </button>
);
};

export default function AlertButtonList () {
    return(
        <>
            <AlertButton message={'Playing Mario Kart'}>
                Play a Game
            </AlertButton>

            <AlertButton message={'Meow Meow'}>
                Meow
            </AlertButton>

            <AlertButton message={'Eating chocolate'}>
                Eat chocolate
            </AlertButton>
        </>
    )
};*/



/*import React from "react";

const AlertButton = () => {
    const ClickHandle = () =>{alert('Hello');}
return(
    <button onClick={ClickHandle}>
        Click Me
    </button>
);
}

export default AlertButton*/