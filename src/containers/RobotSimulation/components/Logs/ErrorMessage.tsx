import React from 'react';

interface IErrorMessage {
  type: string;
}

const ErrorMessage: React.FunctionComponent<IErrorMessage> = ({
  type,
}): JSX.Element => {
  return (
    <span className="message">
      <span className="intro">Errr..</span>
      <span className="_text-gamma">{type}</span>
    </span>
  );
};

export default ErrorMessage;
