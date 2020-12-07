/**
 * title: Default usage
 * desc: Default as a switch function, or accept a parameter to change state.
 *
 * title.zh-CN: useImmerReducer
 * desc.zh-CN: 使用immer reducer 的方式管理数据
 */
import React from 'react';
import { useImmerReducer, Action } from '@onecocjs/use.immer';
import { Button } from 'antd';

export default function() {
  const { state, dispatch } = useImmerReducer(
    { user: { name: '张三' } },
    function(state, action) {
      switch (action.type) {
        case 'changeName':
          state.user.name = action.payload.name;
          break;
        default:
          return state;
      }
    },
  );

  return (
    <>
      <p>{state.user.name}</p>
      <Button
        type="primary"
        onClick={() => {
          dispatch({ type: 'changeName', payload: { name: '李四' } });
        }}
      >
        更新
      </Button>
    </>
  );
}
