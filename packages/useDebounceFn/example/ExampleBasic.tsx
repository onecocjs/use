/**
 * title: Default usage
 * desc: Default as a switch function, or accept a parameter to change state.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 基础的防抖动效果
 */
import React, { useState } from 'react';
import useDebounceFn from '@onecocjs/use.debouncefn';
import { Button } from 'antd';

export default function() {
  const [count, updateCount] = useState(0);
  const fn = useDebounceFn(() => {
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
