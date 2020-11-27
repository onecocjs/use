/**
 * title: Default usage
 * desc: Default as a switch function, or accept a parameter to change state.
 *
 * title.zh-CN: leading
 * desc.zh-CN: 通过配置 leading 使得 函数在 指定在延迟开始前调用。
 */

import React, { useState } from 'react';
import useDebounceFn from '@onecocjs/use.debouncefn';
import { Button, Space } from 'antd';

export default function() {
  const [count, updateCount] = useState(0);
  const fn = useDebounceFn(
    () => {
      updateCount(count + 1);
    },
    1000,
    {
      leading: true,
    },
  );
  return (
    <>
      <h1>{count}</h1>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            fn();
          }}
        >
          点击执行
        </Button>
      </Space>
    </>
  );
}
