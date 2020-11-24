/**
 * title: Default usage
 * desc: Default as a switch function, or accept a parameter to change state.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: timeout使用示例
 */

import React, { useState } from 'react';
import { useTimeout } from '@onecocjs/use';

export default () => {
  const [state, setState] = useState(0);
  useTimeout(() => {
    setState(state + 1);
  }, 2000);

  return (
    <div>
      <h1>{JSON.stringify(state)}</h1>
    </div>
  );
};
