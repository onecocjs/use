import React from 'react';
import { Switch, Button, Space } from 'antd';
import useToggle from '..';

export default function() {
  const { state, toggle } = useToggle(false, true);

  return (
    <>
      <Space direction="vertical">
        <Switch checked={state} onChange={toggle} />
        <Button type="primary" onClick={() => toggle()}>
          切换
        </Button>
      </Space>
    </>
  );
}
