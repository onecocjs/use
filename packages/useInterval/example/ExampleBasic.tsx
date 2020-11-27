/**
 * title: Default usage
 * desc: Default as a switch function, or accept a parameter to change state.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: useInterval基础用法
 */
import React, { useState } from 'react';
import useInterval from '@onecocjs/use.interval';

export default function() {
  const [count, updateCount] = useState(0);

  useInterval(() => {
    updateCount(count + 1);
  }, 1000);

  return (
    <>
      <h1>{count}</h1>
    </>
  );
}
