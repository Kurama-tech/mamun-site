import React, { MutableRefObject } from "react";
import Typed from "typed.js";

const Typer = () => {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef() as MutableRefObject<any>;
  // Create reference to store the Typed instance itself
	const typed = React.useRef() as MutableRefObject<any>;

  React.useEffect(() => {
    const options = {
    	strings: [
        'Need an App?',
        'Need a Busniess Website?',
        'Need custom CRM&rsquo;s/Dashboard?',
        'Develop secure software?',
        'Upgrade your tech stack?',
        'Improve UX/UI?',
        'Manage deployments?',
        'Host on Prem?'
      ],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
      <div className="type-wrap">
        <span style={{ whiteSpace: 'pre' }} className="text-primary" ref={el} />
      </div>
  );
}

export default Typer