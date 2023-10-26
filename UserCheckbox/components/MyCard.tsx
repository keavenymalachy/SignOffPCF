import {
  Card,
  CardHeader,
  makeStyles,
  shorthands,
  tokens,
  Text,
  Caption1,
} from '@fluentui/react-components';
import * as React from 'react';

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    columnGap: '16px',
    rowGap: '36px',
  },

  title: {
    ...shorthands.margin(0, 0, '12px'),
  },

  card: {
    width: '100%',
    maxWidth: '100%',
    height: '100%',
  },

  flex: {
    ...shorthands.gap('4px'),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  appIcon: {
    ...shorthands.borderRadius('4px'),
    height: '32px',
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  cardFooter: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const MyCard = () => {
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <CardHeader
        header={
          <Text weight='semibold'>
            Alert in Teams when a new document is uploaded in channel
          </Text>
        }
        description={
          <Caption1 className={styles.caption}>By Microsoft</Caption1>
        }
      />
    </Card>
  );
};

export default MyCard;
