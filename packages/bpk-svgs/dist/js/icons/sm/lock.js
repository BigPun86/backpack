function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
export default ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
    width: "1.125rem",
    height: "1.125rem"
  }} {...props}><path d="M17 10V6.8C17 4.2 14.8 2 12.2 2h-.4C9.2 2 7 4.2 7 6.8V10c-1.1.1-2 1-2 2.1v7.7C5 21 6 22 7.2 22h9.7c1.2 0 2.2-1 2.2-2.2v-7.7c-.1-1.1-1-2-2.1-2.1zm-5.2-6h.4C13.7 4 15 5.3 15 6.8V10H9V6.8C9 5.3 10.3 4 11.8 4z" /></svg>;
});