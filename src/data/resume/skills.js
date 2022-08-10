// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Heroku',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'ElasticSearch',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 5,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Redis',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Express.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'D3',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Flask',
    competency: 5,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git/Mercurial',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Numpy',
    competency: 5,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Numba',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Pytorch',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 5,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 1,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Julia',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 4,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'GraphQL',
    competency: 1,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 5,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Hadoop',
    competency: 2,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'Spark',
    competency: 2,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'Swift, Obj-C',
    competency: 5,
    category: ['Mobile Development'],
  },
  {
    title: 'Kotlin, Java',
    competency: 3,
    category: ['Mobile Development'],
  },
  {
    title: 'GoLang',
    competency: 2,
    category: ['Data Engineering'],
  },
  {
    title: 'Rust',
    competency: 1,
    category: ['Data Engineering'],
  },
  {
    title: 'XCode',
    competency: 5,
    category: ['Mobile Development'],
  },
  {
    title: 'Android Studio',
    competency: 3,
    category: ['Mobile Development'],
  },

].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#32a852',
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
