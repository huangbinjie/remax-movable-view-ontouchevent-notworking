import * as React from 'react';
import { View, MovableArea, MovableView } from 'remax/wechat';
import styles from './index.css';

export default () => {
  return (
    <View className={styles.app}>
      <MovableArea>
        <MovableView x={0} onTouchStart={() => console.log('start')} onTouchEnd={() => console.log('end')} direction="horizontal">
          <View className={styles.messageItem}>
            <View className={styles.messageTitle}>title</View>
            <View className={styles.messageTime}>desc</View>
          </View>
        </MovableView>
        <View className={styles.messageDelete}>
          删除
        </View>
      </MovableArea>
    </View>
  );
};
