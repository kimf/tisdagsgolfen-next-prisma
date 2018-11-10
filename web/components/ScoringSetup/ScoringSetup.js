import { compose, withState, withHandlers } from "recompose";

import FirstStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import BottomButton from "../shared/BottomButton";

const initialState = {
  teamEvent: false,
  strokesEvent: false,
  courseId: null,
  selectedPlayers: [],
  teams: [],
  stepIndex: 0
};

const enhance = compose(
  withState("localState", "setLocalState", initialState),
  withHandlers({
    setData: props => object => {
      props.setLocalState({ ...props.localState, ...object });
    }
  })
);

const steps = [FirstStep, SecondStep];

// TODO: List games being scored right now, to be able to just quickly create a ScoringSession with the same settings..
const ScoringSetup = enhance(({ localState, setData }) => {
  const StepComponent = steps[localState.stepIndex];
  const stepMethod = () =>
    localState.stepIndex === steps.length
      ? alert("GO ON")
      : setData({ stepIndex: localState.stepIndex + 1 });

  if (!StepComponent) {
    return <div>Sista steget....</div>;
  }

  return (
    <section>
      <StepComponent setData={setData} localState={localState} />
      <BottomButton onClick={stepMethod} text={`FORTSÄTT`} />
    </section>
  );
});

export default ScoringSetup;
