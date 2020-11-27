import React from 'react';
import useMap from '@onecocjs/use.map';
import { Button, Space } from 'antd';

export default function() {
  const { mapState, get, set, del, reset } = useMap([
    ['1', 'xx'],
    ['2', 'yy'],
  ]);

  return (
    <>
      <p>{JSON.stringify(Array.from(mapState), null, 2)}</p>
      <Space>
        <Button type="primary" onClick={() => set('3', 'zz')}>
          set 3
        </Button>
        <Button type="primary" onClick={() => del('1')}>
          del 1
        </Button>
        <Button type="primary" onClick={reset}>
          reset
        </Button>
      </Space>
    </>
  );
}
