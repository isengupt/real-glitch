import "./Waves.scss";


const articles = [

  {
    link: 'https://github.com/isengupt/FDOPages',
    title: 'FDO Website',
    description: 'Website for Future Doctors Organization',
    year: '2020'
  },
  {
    link: 'https://github.com/isengupt/ContemplationApp',
    title: 'Contemplations Book App',
    description: 'Sentiment analysis app that tracks time series of emotions over time through book entries',
    year: '2020'
  },
  {
    link: 'https://github.com/isengupt/ParticleSimulation',
    title: 'Particle Simulation',
    description: 'Simulation of epidemic using particles as humans',
    year: '2020'
  },
  {
    link: 'hhttps://github.com/isengupt/glass-blur',
    title: 'Glass blur',
    description: 'Front-end project to simulate background blur with r3f',
    year: '2020'
  },
  {
    link: 'https://github.com/isengupt/Genetic-Algos-RN',
    title: 'Genetic Algorithms',
    description: 'A simple react native implementation of text search / matching algorithms and visualization in the context of DNA',
    year: '2020'
  }, {
    link: 'https://github.com/isengupt/fiber-website',
    title: 'Visibility Scroll',
    description: 'Front-end project to simulate visible elements on scroll',
    year: '2020'
  },
  {
    link: 'https://github.com/isengupt/Wikipedia-Data-Projects',
    title: 'Location visulization songs',
    description: 'Visualization of all songs on wikipedia and their audio info',
    year: '2020'
  },
  {
    link: 'https://github.com/isengupt/LyricsSediment',
    title: 'Lyrics sediment',
    description: 'A meteor app that uses genius api to get lyrics',
    year: '2020'
  },
  {
    link: 'https://github.com/isengupt/ObjectTracker',
    title: 'Object Tracker',
    description: 'OpenCV tracker that uses PyrLK method to track user input circle in 2d video',
    year: '2020'
  },
  {
    link: 'https://github.com/isengupt/Rust_Actuarial_Finance',
    title: 'Rust Finance',
    description: 'A rust native module for javascript that implements multiple annuity functions, options functions',
    year: '2020'
  },
  {
    link: 'https://github.com/isengupt/ObjectTracker',
    title: 'Object Tracker',
    description: 'OpenCV tracker that uses PyrLK method to track user input circle in 2d video',
    year: '2020'
  },
  {
    link: 'https://github.com/isengupt/Music-Group-Theory',
    title: 'Music Group Theory',
    description: 'Various implementations of group theory, transormation theory, and category algorithms on musical triads using p5.js',
    year: '2020'
  },
  {
    link: 'https://github.com/isengupt/PoliticalClassifierChome',
    title: 'Political Classifier',
    description: 'VA chrome extension that uses a political classification keras model to tag texts on a web page',
    year: '2020'
  },
  {
    link: 'https://github.com/isengupt/minhashing-rust',
    title: 'Rust minhashing',
    description: 'A min-hashing algorithm implementation in rust that searches for near duplicate ny-times articles',
    year: '2020'
  },

  {
    link: 'https://github.com/isengupt/Letterboxd-Simple-Client',
    title: 'Letterboxd',
    description: 'A simple react ui using redux to fetch and display display recommendations',
    year: '2020'
  },

  





]


export default function WaveWords() {
  return (
      <div className="main-page">
           <div className="digit-title">
        
        <div>
        PROJECTS <span class="blinking-cursor">|</span>
        </div>
        </div>
    <section className="press">
      <div className="press-container">

      {articles.map((item) => 
        <a
          href={item.link}
          rel="noopener"
          target="_blank"
        >
          <span className="press-container__media" aria-label={item.title}>
            <span aria-hidden="true">{item.title}</span>
          </span>{" "}
          <span
            className="press-container__title"
            aria-label={item.description}
          >
            <span aria-hidden="true">
            {item.description}
            </span>
          </span>{" "}
          <span className="press-container__year" aria-label={item.year}>
            <span aria-hidden="true">{item.year}</span>
          </span>{" "}
        </a>
      
      )}
      
  
      </div>
    </section>
    </div>
  );
}
