import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M5 7v8h8V7c0-2.2-1.8-4-4-4S5 4.8 5 7zm3 6H7v-2h1v2zm0-3H7V8h1v2zm0-3H7V5h1v2zm3 6h-1v-2h1v2zm0-3h-1V8h1v2zm0-3h-1V5h1v2zM1 8v7h3V8H1zm2 6H2v-1h1v1zm0-2H2v-1h1v1zm0-2H2V9h1v1zm12.5-4c-.8 0-1.5.7-1.5 1.5V15h1v-2h1v2h1V7.5c0-.8-.7-1.5-1.5-1.5zm.5 6h-1v-2h1v2zm0-3h-1V7h1v2z" /></svg>;
  }

}