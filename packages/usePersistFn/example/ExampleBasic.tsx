/**
 * title: Default usage
 * desc: Default as a switch function, or accept a parameter to change state.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 包含函数的内存地址永远不会变化
 */

import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import usePersistFn from '@onecocjs/use.persistfn';

const Children1 = function(props: { fn: () => void }) {
  const [state, updateState] = useState<null | number>(null);

  useEffect(() => {
    updateState(Math.random());
  }, [props.fn]);

  return (
    <>
      <p>i'm is children1, this is i random number {state}</p>
    </>
  );
};

export default function() {
  const [count, updateCount] = useState(0);
  const fn = usePersistFn(() => {
    updateCount(count + 1);
  });

  return (
    <>
      <h1>{count}</h1>
      <Children1 fn={fn} />
      <p>连续点击之后，子组件并不会被渲染</p>
      <Button type="primary" onClick={fn}>
        连续点击
      </Button>
    </>
  );
}
