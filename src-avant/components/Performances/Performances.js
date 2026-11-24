import { performances } from '../../data';
import Section from '../commun/Section';
import Carte from '../commun/Carte';

const Performances = () => {
  return (
    <Section label="Parcours libre" title="Arts & performances" linkText="Tout le parcours →">
      {performances.map(performance => (
        <Carte
          key={performance.id}
          image={performance.image}
          alt={performance.alt}
          surtitre={performance.category}
          titre={performance.name}
          infos={[performance.day, performance.time, performance.venue]}
          pastille={performance.badge}
        />
      ))}
    </Section>
  );
};

export default Performances;