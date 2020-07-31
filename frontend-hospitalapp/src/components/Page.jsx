import React, { useEffect } from 'react';

function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | Hospital WebApp`;
    window.scrollTo(0, 0);
  }, [props.title]);

  return <div>{props.children}</div>;
}

export default Page;
