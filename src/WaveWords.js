import "./Waves.scss";


const articles = [

  {
    link: '#',
    title: 'John Smith',
    description: 'The home of john SMITH IN THE FUTURE',
    year: '2010'
  },  {
    link: '#',
    title: 'John Smith',
    description: 'The home of john SMITH IN THE FUTURE',
    year: '2010'
  },
  {
    link: '#',
    title: 'John Smith',
    description: 'The home of john SMITH IN THE FUTURE',
    year: '2010'
  },
  {
    link: '#',
    title: 'John Smith',
    description: 'The home of john SMITH IN THE FUTURE',
    year: '2010'
  },
  {
    link: '#',
    title: 'John Smith',
    description: 'The home of john SMITH IN THE FUTURE',
    year: '2010'
  }
]


export default function WaveWords() {
  return (
      <div className="main-page">
           <div className="digit-title">
        
        <div>
        DISCOVERY <span class="blinking-cursor">|</span>
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
