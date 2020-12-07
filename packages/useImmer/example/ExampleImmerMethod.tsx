/**
 * title: Default usage
 * desc: Default as a switch function, or accept a parameter to change state.
 *
 * title.zh-CN: useImmerMethod
 * desc.zh-CN: 使用immer reducer 的方式管理数据
 */
import React from 'react';
import { useImmerMethod, Action } from '@onecocjs/use.immer';
import { Button } from 'antd';

export default function() {
  const { state, dispatch, actions } = useImmerMethod(
    { user: { name: '张三' } },
    {
      changeName(state, action: Action<{ name: string }>) {
        state.user.name = action.payload?.name ?? '';
      },
    },
  );

  return (
    <>
      <p>{state.user.name}</p>
      <Button
        type="primary"
        onClick={() => {
          actions.changeName({ name: '李四' });
        }}
      >
        更新
      </Button>
    </>
  );
}
