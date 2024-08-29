import styles from './app.module.scss';

const done = [
  'Phase1 Work',
  'Phase2 Common Work',
  'Expression Value Calculation',
  '(new)BigInt Operators Realization in Finite Fields',
  '(new)Expression Value in BigInt Finite Fields'
];

const doing = [
  <div>
    <p style={{ margin: '0' }}>Input Generation by Z3</p>
    <em style={{ fontStyle: 'italic', color: 'grey' }}>
      will be done in next week
    </em>
  </div>,
  <div>
    <p style={{ margin: '0' }}>Code Generate Probability Improvement</p>
    <em style={{ fontStyle: 'italic', color: 'grey' }}>
      will be done in next two weeks
    </em>
  </div>,
  <div>
    <p style={{ margin: '0' }}>Code Difference Tracking</p>
    <em style={{ fontStyle: 'italic', color: 'grey' }}>
      will be done in next two weeks
    </em>
  </div>
];

const todo = ['Next Milestone'];

interface ListProps {
  data: any[];
  color: string;
  name: string;
  titleColor: string;
}
const tagRgx = /^\(([a-zA-Z,]+)\)/;

const List: React.FC<ListProps> = ({ data, name, color, titleColor }) => {
  return (
    <div className={styles.list} style={{ backgroundColor: color }}>
      <div className={styles.listTitle} style={{ color: titleColor }}>
        {name}
      </div>
      <div className={styles.items}>
        {data.map((item) => {
          const tags = tagRgx.exec(item)?.[1];
          if (tags !== null && tags !== undefined) {
            if (tags.includes('new')) {
              return (
                <div
                  className={styles.item}
                  style={{ backgroundColor: 'green', color: 'white' }}
                  key={item}
                >
                  <div>{item.substring(tags.length + 2)}</div>
                  <div
                    style={{
                      color: 'rgb(186, 243, 219)',
                      fontStyle: 'italic',
                      paddingLeft: '5px'
                    }}
                  >
                    new
                  </div>
                </div>
              );
            }
          }
          return (
            <div className={styles.item} key={item}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className={styles.wrapper}>
      <List
        data={done}
        color='#baf3db'
        titleColor='rgb(22, 75, 53)'
        name='Done'
      />
      <List
        data={doing}
        color='#cce0ff'
        titleColor='rgb(9, 50, 108)'
        name='Doing'
      />
      <List
        data={todo}
        color='#fedec8'
        titleColor='rgb(112, 46, 0)'
        name='Next'
      />
    </div>
  );
};

export default App;
