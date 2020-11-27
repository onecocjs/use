/**
 * title: Default usage
 * desc: Default as a switch function, or accept a parameter to change state.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 组件加载时 保证只运行一次的的 `Effect`
 */

import React, { useState } from 'react';
import { Button, message } from 'antd';
import useEffectOnce from '@onecocjs/use.effectonce';

function Children() {
  const [count, updateCount] = useState(0);

  useEffectOnce(() => {
    message.success('running effect once on mount');
    return () => {
      message.warn('running clean-up of effect on unmount');
    };
  });

  return (
    <>
      <h1>hello world</h1>
      <p>计数：{count}</p>
      <Button onClick={() => updateCount(count + 1)}>递增</Button>
    </>
  );
}

export default () => {
  const [value, updateValue] = useState(true);

  return (
    <div>
      <Button type="primary" onClick={() => updateValue(!value)}>
        {value ? '隐藏子组件' : '显示子组件'}
      </Button>
      {value ? <Children /> : null}
    </div>
  );
};
