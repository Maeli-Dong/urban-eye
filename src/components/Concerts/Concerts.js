import { concerts } from '../../data';
import Section from '../commun/Section';
import Carte from '../commun/Carte';

const Concerts = () => {
  return (
    <Section label="Line-up 2027" title="Concerts" linkText="Toute la programmation →">
      {concerts.map(concert => (
        <Carte
          key={concert.id}
          image={concert.image}
          alt={concert.alt}
          surtitre={concert.category}
          titre={concert.name}
          infos={[concert.day, concert.time, concert.venue]}
          pastille={concert.badge}
          vedette={concert.featured}
        />
      ))}
    </Section>
  );
};

export default Concerts;