import React from 'react';
import moment from 'moment';
import marked from 'marked';
import { Avatar } from 'antd';

import styles from './index.less';

export default ({ data: { user, updatedAt, action } }) => (
  <div
    className={styles.trendItem}
  >
    <div className={styles.avatar}>
      {
        user.link && <a href={user.link} target="_blank">
          <Avatar src={user.avatar} />
        </a>
      }
      {
        !user.link && <img src={user.avatar} alt={user.title} />
      }
    </div>
    <div className={styles.content}>
      <div>
        <span className={styles.name}>{user.name}</span>
        <div dangerouslySetInnerHTML={{ __html: marked(action) }} />
      </div>
      <p>{moment(updatedAt).fromNow()}</p>
    </div>
  </div>
);
