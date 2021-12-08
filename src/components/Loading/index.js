import React from "react";
import { Spin, Alert } from "antd";

const Loading = () => {
  return (
    <div>
      <Spin tip="Loading..." size="large">
        <Alert
          message="Loading"
          description="Loading page..."
          type="info"
        />
      </Spin>
    </div>
  );
};

export default Loading;
