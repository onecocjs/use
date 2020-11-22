/**
 * title: Default usage
 * desc: Default as a switch function, or accept a parameter to change state.
 *
 * title.zh-CN: 节流用法
 * desc.zh-CN: 函数节流
 */

import React, { useState } from 'react';
import { Button } from 'antd';
import { usePersistFn } from '@onecocjs/use';

export default function() {
  const [count, updateCount] = useState(0);
  const fn = usePersistFn(
    () => {
      updateCount(count + 1);
    },
    { action: 'throttle', wait: 1000 },
  );

  return (
    <>
      <h1>{count}</h1>
      <Button type="primary" onClick={fn}>
        连续点击
      </Button>
    </>
  );
}
