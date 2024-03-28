import React from "react";
import { Box, Heading, Text, Image, Container, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      <Container maxW="container.lg" py={8}>
        <Heading as="h1" size="2xl" mb={8} textAlign="center">
          L'investissement Boursier
        </Heading>
        <Image src="https://images.unsplash.com/photo-1612043273531-601d2cd4855e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMHRyYWRpbmd8ZW58MHx8fHwxNzExNTg4ODUyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Bourse" mb={8} />
        <Box>
          <Box mb={8}>
            <Text>1. &emsp;Lorsque vous examinez les actions à acheter, tenez compte du volume de négociation. Si le prix monte avec un volume élevé, cela indique un momentum à la hausse. Cependant, un volume élevé avec une baisse des prix peut signaler un momentum à la baisse, ce qui pourrait être risqué.</Text>
            <Text>2. &emsp;Le coefficient bêta est un autre élément important à considérer. Si le coefficient bêta est inférieur à 1, cela signifie que l'action est moins volatile que le marché actuel, ce qui peut être préférable pour les investisseurs cherchant une certaine stabilité. En revanche, un coefficient bêta supérieur à 1 indique une volatilité accrue, ce qui peut être risqué mais aussi potentiellement plus rentable.</Text>
            <Image src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxzdG9jayUyMG1hcmtldHxlbnwwfHx8fDE2ODAxMzc4NTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Stock market graph" my={6} />
            <Text>3. &emsp;La volatilité est un facteur crucial à surveiller. Un taux de volatilité élevé indique des risques plus importants, tandis qu'une volatilité modérée, généralement entre 10% et 20%, peut être considérée comme favorable pour les investisseurs.</Text>
            <Text>4. &emsp;En ce qui concerne le ratio cours/bénéfice (P/E ratio), un ratio bas peut indiquer une meilleure affaire. Les ratios P/E inférieurs à 20 sont généralement considérés comme décent, ce qui peut signifier que l'action est sous-évaluée par rapport à ses bénéfices. Toutefois, si le ratio est très bas, cela peut indiquer que l'action est valorisée à peu près à sa valeur comptable, ce qui peut être un signe d'avertissement.</Text>
            <Image src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxzdG9jayUyMG1hcmtldHxlbnwwfHx8fDE2ODAxMzc4NTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Stock market trading" my={6} />
            <Text>5. &emsp;Examinez le rendement des dividendes. Un rendement des dividendes supérieur à 3% ou 4% est généralement considéré comme élevé, ce qui peut être un bon signe pour les investisseurs à la recherche de revenus stables.</Text>
            <Text>6. &emsp;Le ratio prix/valeur comptable est également crucial. Un ratio inférieur à 1 est considéré comme "bon", indiquant que le prix de l'action est inférieur à sa valeur comptable. En revanche, un ratio supérieur à 1 peut signifier que l'action est surévaluée.</Text>
            <Text>7. &emsp;Le retour sur capitaux propres (ROE) est un autre indicateur important. Un ROE de 15% ou plus est généralement considéré comme bon, mais cela dépend également du secteur dans lequel l'entreprise opère.</Text>
            <Text>8. &emsp;En ce qui concerne le ratio de liquidité actuelle, il est préférable de le voir au-dessus de 1, ce qui signifie que l'entreprise est capable de couvrir ses obligations à court terme avec ses actifs actuels. Cependant, un ratio de liquidité actuelle supérieur à 5 peut indiquer que l'entreprise n'utilise pas efficacement ses actifs, ce qui peut être un signal négatif.</Text>
          </Box>
        </Box>
        <Text mt={8} textAlign="center">
          Pour en savoir plus sur l'investissement boursier, consultez{" "}
          <Link href="https://www.amf-france.org/" color="blue.500" isExternal>
            le site de l'AMF
          </Link>
          .
        </Text>
      </Container>
    </Box>
  );
};

export default Index;
