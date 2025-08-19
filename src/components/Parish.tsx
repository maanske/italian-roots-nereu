import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Church, Users, Heart, Building } from "lucide-react";

const Parish = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            A Construção da Paróquia Nossa Senhora do Rosário
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Centro espiritual e social da comunidade italiana, construída com fé, determinação e trabalho coletivo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-l-4 border-l-primary shadow-soft hover:shadow-warm transition-all duration-300">
            <CardHeader className="pb-3">
              <Church className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="font-playfair text-lg">Centro de Fé</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Ponto de encontro espiritual que fortaleceu a identidade católica da comunidade.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent shadow-soft hover:shadow-warm transition-all duration-300">
            <CardHeader className="pb-3">
              <Users className="w-8 h-8 text-accent mb-2" />
              <CardTitle className="font-playfair text-lg">União Social</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Espaço de convivência que mantinha vivas as tradições e costumes italianos.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-terracotta shadow-soft hover:shadow-warm transition-all duration-300">
            <CardHeader className="pb-3">
              <Heart className="w-8 h-8 text-terracotta mb-2" />
              <CardTitle className="font-playfair text-lg">Esforço Coletivo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Construída através do trabalho voluntário e doações de toda a comunidade.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-italian-green shadow-soft hover:shadow-warm transition-all duration-300">
            <CardHeader className="pb-3">
              <Building className="w-8 h-8 text-italian-green mb-2" />
              <CardTitle className="font-playfair text-lg">Arquitetura Única</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Fusão de elementos arquitetônicos italianos com materiais e técnicas locais.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-warm rounded-2xl p-8 md:p-12 shadow-elegant">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary">
              Um Legado de Fé e Comunidade
            </h3>
            <p className="font-inter text-muted-foreground leading-relaxed">
              A Paróquia Nossa Senhora do Rosário nasceu do sonho coletivo dos imigrantes italianos que desejavam um espaço sagrado onde pudessem manter vivas suas tradições religiosas. Sob a liderança visionária do <strong>Padre Antônio Echelmeyer</strong>, conhecido carinhosamente como o "Padre Construtor", a comunidade se uniu em um esforço extraordinário.
            </p>
            <p className="font-inter text-muted-foreground leading-relaxed">
              Cada pedra colocada, cada janela instalada, cada altar construído representava não apenas um ato de fé, mas também a determinação de uma comunidade em preservar sua identidade cultural. A arquitetura única da igreja reflete essa fusão harmoniosa entre a tradição italiana e a realidade brasileira, criando um patrimônio arquitetônico que perdura até hoje.
            </p>
            <p className="font-inter text-muted-foreground leading-relaxed">
              Mais do que um templo religioso, a paróquia tornou-se o coração pulsante da vida social da comunidade, onde celebrações, festas tradicionais e momentos de solidariedade fortaleceram os laços entre as famílias e perpetuaram o legado cultural italiano.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parish;