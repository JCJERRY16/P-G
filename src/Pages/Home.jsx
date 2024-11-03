import {
  Hero,
  Navbar,
  Footer,
  SEO,
  Projects,
  Services,
  Contact,
  Skills,
} from '../components';

function Home() {
  return (
    <>
      <SEO
        title='JERRY'
        description='I love building and creating frontend structure with solid foundations, and excellent user experiences.'
      />
      <main>
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default Home;
