import React, { useState } from 'react';
import { useUnmount } from '@onecocjs/use';
import { message, Button, Space } from 'antd';

function Child() {
  useUnmount(() => {
    message.warn('children componet unmount');
  });
  return (
    <>
      <h1>Children</h1>
    </>
  );
}

export default function() {
  const [value, updateValue] = useState(true);
  return (
    <Space direction="vertical">
      <Button type="primary" onClick={() => updateValue(!value)}>
        切换
      </Button>
      {value ? <Child /> : null}
    </Space>
  );
}
