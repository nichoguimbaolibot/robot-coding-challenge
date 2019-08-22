import React, { FunctionComponent } from 'react';
import Spin from 'antd/lib/spin';

interface ILoading {}

const Loading: FunctionComponent<ILoading> = (): JSX.Element => (
  <Spin className="loading-icon" size="large" />
);

export default Loading;
