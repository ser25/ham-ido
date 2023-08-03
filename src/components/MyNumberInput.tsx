import * as numberInput from "@zag-js/number-input";
import { useMachine, normalizeProps } from "@zag-js/react";
import { useId } from "react";

type MyNumberInputProps = {
  min?: number;
  max?: number;
  step?: number;
  initial?: number;
  onChange?: numberInput.Context["onChange"];
  onInvalid?: numberInput.Context["onInvalid"];
};

export function MyNumberInput({
  min,
  max,
  step,
  initial,
  onChange,
  onInvalid,
}: MyNumberInputProps) {
  const [state, send] = useMachine(
    numberInput.machine({
      id: useId(),
      min: min,
      max: max,
      step: step,
      value: initial?.toString(),
      onChange,
      onInvalid,
      maxFractionDigits: 20,
    })
  );

  const api = numberInput.connect(state, send, normalizeProps);

  return (
    <div {...api.rootProps}>
      <label {...api.labelProps}>Enter number:</label>
      <br />
      <div className={"css-1gomreu"}>
        <input {...api.inputProps} />
        <div className={"css-1xf0d02"}>
          <button {...api.incrementTriggerProps} className={"css-2pgj6a"}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path>
            </svg>
          </button>
          <button {...api.decrementTriggerProps} className={"css-wjhnw3"}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
