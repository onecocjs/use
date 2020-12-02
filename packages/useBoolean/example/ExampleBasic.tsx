import React from 'react';
import { Switch, Button, Space } from 'antd';
import useBoolean from '@onecocjs/use.boolean';

export default function() {
  const { state, toggle } = useBoolean();

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
