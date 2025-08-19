import { Card, CardContent } from "@/components/ui/card";
import familiaImage from "@/assets/familia-italiana.jpg";

const Introduction = () => {
  return (
    <section id="introducao" className="py-20 bg-gradient-warm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              A Imigração Italiana no Bairro Nereu Ramos
            </h2>
            <div className="space-y-4 text-muted-foreground font-inter leading-relaxed">
              <p className="text-lg">
                No final do século XIX e início do XX, famílias oriundas principalmente da região do <strong>Trentino</strong> chegaram ao bairro Nereu Ramos, em Jaraguá do Sul, em busca de novas oportunidades e uma vida melhor.
              </p>
              <p>
                Estes imigrantes enfrentaram enormes desafios: o idioma desconhecido, o clima tropical, a adaptação a novos costumes e a necessidade de reconstruir suas vidas em terra estrangeira. Porém, trouxeram consigo uma riqueza cultural inestimável.
              </p>
              <p>
                A comunidade italiana estabeleceu-se com determinação, preservando cuidadosamente sua <strong>língua ancestral</strong>, suas <strong>tradições familiares</strong> e, especialmente, sua profunda <strong>religiosidade católica</strong> que se tornaria o coração da vida comunitária.
              </p>
              <p>
                Essa herança cultural permanece viva até hoje, transmitida através das gerações e celebrada na comunidade que se formou ao redor da Paróquia Nossa Senhora do Rosário.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <Card className="overflow-hidden shadow-warm border-none">
              <CardContent className="p-0">
                <img 
                  src={familiaImage} 
                  alt="Família italiana imigrante em Jaraguá do Sul no início do século XX"
                  className="w-full h-96 object-cover"
                />
                <div className="p-6 bg-italian-cream">
                  <p className="font-inter text-sm text-muted-foreground italic">
                    Família italiana estabelecida no bairro Nereu Ramos, preservando tradições e construindo nova vida no Brasil.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;