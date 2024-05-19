import Timeline, { calendar } from "react-interactive-timeline";

export default function ReactInteractiveTimeline() {
  return (
    <Timeline
      calendar={calendar("en", "hour")}
      startDate={"1966-01-01"}
      endDate={"1974-01-01"}
      stepMinWidth="70px"
    >
      <Timeline.Controls panDuration={{ month: 6 }} zoomFactor={2} />
      <Timeline.StepBars />
      <Timeline.CurrentDateBar />

      <Timeline.Row>
        <Timeline.Period
          startDate="1963-11-22"
          endDate="1969-01-20"
          label="Lyndon B. Johnson"
          color="#1DB1F1"
        />
        <Timeline.Period
          startDate="1969-01-20"
          endDate="1974-08-09"
          label="Richard Nixon"
          color="#E61A28"
        />
      </Timeline.Row>

      <Timeline.Row>
        <Timeline.Event date="1967-01-27" label="Apollo 1" />
        <Timeline.Event date="1968-10-11" label="Apollo 7" />
        <Timeline.Event date="1968-12-21" label="Apollo 8" />
        <Timeline.Event date="1969-03-03" label="Apollo 9" />
        <Timeline.Event date="1969-05-18" label="Apollo 10" />
        <Timeline.Event date="1969-07-16" label="Apollo 11" color="#81996A" />
        <Timeline.Event date="1969-11-14" label="Apollo 12" />
        <Timeline.Event date="1970-04-11" label="Apollo 13" />
        <Timeline.Event date="1971-01-31" label="Apollo 14" />
        <Timeline.Event date="1971-07-26" label="Apollo 15" />
        <Timeline.Event date="1972-04-16" label="Apollo 16" />
        <Timeline.Event date="1972-12-07" label="Apollo 17" />
      </Timeline.Row>

      <Timeline.Row fixedHeight>
        <Timeline.StepLabels />
      </Timeline.Row>
    </Timeline>
  );
}
