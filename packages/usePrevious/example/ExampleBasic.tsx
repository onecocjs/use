import React, { useState } from 'react';
import { Button } from 'antd';
import usePrevious from '@onecocjs/use.previous';
import usePersistFn from '@onecocjs/use.persistfn';

export default function() {
  const [count, updateCount] = useState(0);
  const onClick = usePersistFn(() => {
    updateCount(count + 1);
  });
  const prev = usePrevious(count);
  return (
    <>
      <p>当前状态：{count}</p>
      <p>上次状态：{prev}</p>

      <Button type="primary" onClick={onClick}>
        点击
      </Button>
    </>
  );
}
