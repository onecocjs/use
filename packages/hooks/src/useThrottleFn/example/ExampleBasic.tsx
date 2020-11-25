import React, { useState } from 'react';
import { useThrottleFn } from '@onecocjs/use';
import { Button } from 'antd';

export default function() {
  const [count, updateCount] = useState(0);
  const fn = useThrottleFn(() => {
    updateCount(count + 1);
  }, 1000);
  return (
    <>
      <h1>{count}</h1>
      <Button type="primary" onClick={fn}>
        点击
      </Button>
    </>
  );
}
