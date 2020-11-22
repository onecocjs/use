/**
 * title: Default usage
 * desc: Default as a switch function, or accept a parameter to change state.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 强制组件刷新
 */

import React, { useRef } from 'react';
import { Button } from 'antd';
import { useUpdate } from '@onecocjs/use';

export default () => {
  const value = useRef(false);
  const update = useUpdate();

  return (
    <div>
      <h1>{JSON.stringify(value.current)}</h1>
      <Button
        type="primary"
        onClick={() => {
          value.current = !value.current;
          update();
        }}
      >
        切换
      </Button>
    </div>
  );
};
