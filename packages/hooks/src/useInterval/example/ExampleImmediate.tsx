/**
 * title: Default usage
 * desc: Default as a switch function, or accept a parameter to change state.
 *
 * title.zh-CN: 立即执行
 * desc.zh-CN: useInterval 启动之后立即执行一次
 */
import React, { useState } from 'react';
import useInterval from '..';

export default function() {
  const [count, updateCount] = useState(0);

  useInterval(
    () => {
      updateCount(count + 1);
    },
    1000,
    { immediate: true },
  );

  return (
    <>
      <h1>{count}</h1>
    </>
  );
}
