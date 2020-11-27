/**
 * title: Default usage
 * desc: Default as a switch function, or accept a parameter to change state.
 *
 * title.zh-CN: 取消防抖函数的执行
 * desc.zh-CN: 手动调用 cancel 的函数用以取消防抖函数的执行
 */

import React, { useState } from 'react';
import useDebounceFn from '@onecocjs/use.debouncefn';
import { Button, Space } from 'antd';

export default function() {
  const [count, updateCount] = useState(0);
  const fn = useDebounceFn(() => {
    updateCount(count + 1);
  }, 1000);
  return (
    <>
      <h1>{count}</h1>
      <p>点击执行之后一秒内可以取消</p>
      <Space>
        <Button type="primary" onClick={fn}>
          点击执行
        </Button>
        <Button type="primary" onClick={fn.cancel}>
          点击取消
        </Button>
      </Space>
    </>
  );
}
