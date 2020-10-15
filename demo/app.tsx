import * as React from 'react';
import { AutoChartTest } from './AutoChartTest';
import { FindInsightTest } from './FindInsightTest/index';
import { DataTransformTest } from './DataTransformTest';
import { PipelineTest } from './pipelineTest';
import { ChartOptimizeTest } from './ChartOptimizeTest';

const tuple = <T extends string[]>(...args: T) => args;

const TESTS = tuple('autoChart', 'pipeline', 'insights', 'dataTransform', 'optimization');
type TestType = typeof TESTS[number];
const testComponents: Record<TestType, any> = {
  autoChart: <AutoChartTest />,
  pipeline: <PipelineTest />,
  insights: <FindInsightTest />,
  dataTransform: <DataTransformTest />,
  optimization: <ChartOptimizeTest />,
};

interface TestState {
  test: TestType;
}
class App extends React.Component<{}, TestState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      test: 'optimization', // init for test
    };
  }

  setTest = (t: TestType) => {
    this.setState({
      test: t,
    });
  };
  render() {
    const { test } = this.state;

    const nav = (
      <nav>
        <ul>
          {TESTS.map((t, index) => (
            <li
              key={index}
              onClick={() => {
                this.setTest(t);
              }}
              style={{ color: `${test === t ? 'blue' : 'black'}` }}
            >
              {`${t}`}
            </li>
          ))}
        </ul>
      </nav>
    );

    return (
      <>
        {nav}
        {testComponents[test]}
      </>
    );
  }
}

export default App;
