/**
 * title: Default usage
 * desc: Default as a switch function, or accept a parameter to change state.
 *
 * title.zh-CN: 手动触发
 * desc.zh-CN: 手动触发timeout、支持取消
 */

import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { useTimeout } from '@onecocjs/use';

export default () => {
  const [state, setState] = useState(0);
  const { isReady, run, cancel } = useTimeout(
    () => {
      setState(state + 1);
    },
    { delay: 2000, manual: true },
  );

  return (
    <div>
      <h1>{JSON.stringify(isReady())}</h1>
      <Space direction="horizontal">
        <Button type="primary" onClick={run}>
          执行
        </Button>
        <Button type="primary" onClick={cancel}>
          取消
        </Button>
      </Space>
    </div>
  );
};
