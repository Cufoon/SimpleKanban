import styles from './app.module.scss';

const done = [
  'Signal && Variable',
  'Control Flow && Operator',
  'Template && Function',
  'Nested Flow and Component',
  'Some Code Refactor',
  'Component dot Access',
  'Random Relation',
  'Inequivalent Mutation',
  '(new)Integration',
  '(new)Some Code Improvement'
];
const doing = ['Code Generate Probability Improvement','Equivalent Mutation', 'Coverage && Regeneration'];
const todo = ['Phase2 Work'];

interface ListProps {
  data: string[];
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
                      fontStyle: 'italic'
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
