/**
 * title: Default usage
 * desc: Default as a switch function, or accept a parameter to change state.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 使用immer管理数据
 */

import React from 'react';
import { useImmer } from '@onecocjs/use.immer';
import { Button } from 'antd';

export default function() {
  const { state, update } = useImmer({ user: { name: '张三' } });

  return (
    <>
      <p>{state.user.name}</p>
      <Button
        type="primary"
        onClick={() => {
          update(draft => {
            draft.user.name = '李四';
          });
        }}
      >
        更新
      </Button>
    </>
  );
}
