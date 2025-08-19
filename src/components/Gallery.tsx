import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/igreja-hero.jpg";
import padreAntonioImage from "@/assets/padre-antonio.jpg";
import familiaImage from "@/assets/familia-italiana.jpg";
import festaImage from "@/assets/festa-italiana.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      image: heroImage,
      title: "Paróquia Nossa Senhora do Rosário",
      description: "Vista externa da igreja construída pela comunidade italiana",
      category: "Arquitetura",
      period: "Histórica"
    },
    {
      image: padreAntonioImage,
      title: "Padre Antônio Echelmeyer",
      description: "O 'Padre Construtor' que liderou a construção da paróquia",
      category: "Liderança",
      period: "Início séc. XX"
    },
    {
      image: familiaImage,
      title: "Família Italiana Imigrante",
      description: "Retrato de família italiana estabelecida no bairro Nereu Ramos",
      category: "Comunidade",
      period: "1890-1920"
    },
    {
      image: festaImage,
      title: "Festa Cultural Italiana",
      description: "Celebração contemporânea das tradições italianas na paróquia",
      category: "Tradições",
      period: "Atual"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Galeria Visual
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Uma jornada visual através do tempo, documentando a rica história da imigração italiana no bairro Nereu Ramos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden shadow-elegant border-none bg-white hover:shadow-warm transition-all duration-500 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-primary text-primary-foreground font-inter">
                      {item.category}
                    </Badge>
                    <Badge variant="secondary" className="font-inter">
                      {item.period}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-playfair text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="font-inter text-sm opacity-90 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-warm rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-6">
            Acervo Histórico em Crescimento
          </h3>
          <p className="font-inter text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Nossa galeria está em constante expansão graças às contribuições da comunidade e ao trabalho de preservação desenvolvido pelo projeto interdisciplinar. Fotografias, documentos e objetos históricos são digitalizados e catalogados, criando um valioso acervo digital da herança italiana em Jaraguá do Sul.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white rounded-lg p-6 shadow-soft">
              <h4 className="font-playfair text-lg font-bold text-primary mb-3">Fotografias Históricas</h4>
              <p className="font-inter text-sm text-muted-foreground">
                Mais de 200 fotografias documentando a vida da comunidade italiana desde o final do século XIX.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-soft">
              <h4 className="font-playfair text-lg font-bold text-accent mb-3">Documentos Originais</h4>
              <p className="font-inter text-sm text-muted-foreground">
                Certidões, cartas e registros paroquiais preservados e digitalizados para futuras gerações.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-soft">
              <h4 className="font-playfair text-lg font-bold text-terracotta mb-3">Objetos Pessoais</h4>
              <p className="font-inter text-sm text-muted-foreground">
                Utensílios, roupas e objetos pessoais que contam a história cotidiana dos imigrantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;