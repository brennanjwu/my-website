import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const LoadingBarWithRouter = withRouter(({ history }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unlisten = history.listen(() => {
      setProgress(20); // You can set an initial loading progress
    });

    return () => {
      unlisten();
    };
  }, [history]);

  return (
    <LoadingBar
      color="#444444"
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
  );
});

export default LoadingBarWithRouter;
