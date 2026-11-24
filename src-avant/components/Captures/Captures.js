import { captures, categories } from '../../captures';
import Section from '../commun/Section';
import Carte from '../commun/Carte';

const Captures = () => {
  return (
    <Section label="Urban Eye" title="Captures" linkText="Toute la carte →">
      {captures.map(capture => {
        // La catégorie de la capture : son nom, sa couleur, son encre
        const categorie = categories[capture.categorie];
        return (
          <Carte
            key={capture.id}
            image={capture.image}
            alt={capture.alt}
            titre={capture.titre}
            infos={[capture.lieu, capture.date]}
            pastille={categorie.label}
            couleur={categorie.couleur}
            encre={categorie.encre}
          />
        );
      })}
    </Section>
  );
};

export default Captures;