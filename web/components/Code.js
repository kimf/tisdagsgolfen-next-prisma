import { compose, withState } from "recompose";

import BottomButton from "./shared/BottomButton";

const enhance = compose(withState("code", "onChangeCode", ""));

const Code = enhance(({ enterCode, code, onChangeCode }) => (
  <div>
    <h2>Superhemlig login-kod</h2>
    <p>Om du har här att göra borde du fått en kod.. :P </p>
    <input
      style={{ border: "1px solid #ccc", fontSize: "2em", padding: 20 }}
      type="text"
      value={code}
      onChange={event => onChangeCode(event.target.value)}
    />
    <BottomButton
      text="FORTSÄTT"
      onClick={() => enterCode(code)}
      disabled={code.length < 2}
    />
  </div>
));

export default Code;
