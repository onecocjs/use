import React, { useState } from 'react';
import useLockFn from '@onecocjs/use.lockfn';
import { Button } from 'antd';

const deloy = (ms: number) =>
  new Promise((resolve, reject) => setTimeout(resolve, ms));

export default function() {
  const [count, setCount] = useState(0);
  const locked = useLockFn(async () => {
    setCount(count + 1);
    await deloy(1000);
  });

  return (
    <>
      <p>{count}</p>
      <Button type="primary" onClick={locked}>
        提交
      </Button>
    </>
  );
}
