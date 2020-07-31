// Page component is created to avoid duplication of code e.g: useEffect() for title change for each page
// Page component contains 'Container' component and Page component will be contained in respective page component
// nested components is example of COMPOSITION

import React, { useEffect } from "react";
// import Container
import Container from "./Container";

function Page(props) {
  // useEffect is used to do the things for the first time when component is rendered
  // syntax => useEffect( arrow function, []); empty array represents things being doen for the first time
  useEffect(() => {
    // use ` to make string dynamic, use ${} to access title
    // title will change in the window tab during navigation
    document.title = `${props.title} | ComplexApp`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container wide={props.wide}>
      {/* includes any code as children where this component is being called */}
      {props.children}
    </Container>
  );
}

export default Page;
