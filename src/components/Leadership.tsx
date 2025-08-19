import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, BookOpen, Award } from "lucide-react";
import padreAntonioImage from "@/assets/padre-antonio.jpg";

const Leadership = () => {
  return (
    <section className="py-20 bg-italian-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Lideranças Religiosas
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Padres visionários que dedicaram suas vidas ao crescimento espiritual e social da comunidade italiana.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Padre Antônio Echelmeyer */}
          <Card className="overflow-hidden shadow-elegant border-none bg-white">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={padreAntonioImage} 
                  alt="Padre Antônio Echelmeyer, o Padre Construtor"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground font-inter">
                    Padre Construtor
                  </Badge>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Padre Antônio Echelmeyer
                </h3>
                <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                  Líder visionário e organizador social que dedicou sua vida à construção não apenas física, mas espiritual da comunidade italiana. Conhecido como o "Padre Construtor", ele foi o grande responsável pela materialização do sonho coletivo da paróquia.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-5 h-5 text-primary" />
                    <span className="font-inter text-sm">Construção da Igreja</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-accent" />
                    <span className="font-inter text-sm">Organização Social</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5 text-terracotta" />
                    <span className="font-inter text-sm">Educação</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-italian-green" />
                    <span className="font-inter text-sm">Liderança</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Padre Aloísio */}
          <div className="space-y-8">
            <Card className="shadow-warm border-l-4 border-l-accent bg-white">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Padre Aloísio
                </h3>
                <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                  Sucessor dedicado que manteve e expandiu o legado deixado pelo Padre Antônio. Sob sua liderança, a paróquia consolidou-se como centro cultural e social, implementando diversos projetos de ação social e preservação cultural.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gradient-warm p-4 rounded-lg">
                    <h4 className="font-inter font-semibold text-primary mb-2">Continuidade do Legado</h4>
                    <p className="text-sm text-muted-foreground">
                      Manteve viva a visão do Padre Antônio, dando continuidade aos projetos de construção e fortalecimento comunitário.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-warm p-4 rounded-lg">
                    <h4 className="font-inter font-semibold text-accent mb-2">Ações Sociais</h4>
                    <p className="text-sm text-muted-foreground">
                      Implementou diversos programas de assistência social, educação e apoio às famílias da comunidade.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-warm p-4 rounded-lg">
                    <h4 className="font-inter font-semibold text-terracotta mb-2">Preservação Cultural</h4>
                    <p className="text-sm text-muted-foreground">
                      Promoveu festivais, celebrações e atividades que mantiveram vivas as tradições italianas na comunidade.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-accent rounded-2xl p-8 text-white">
              <h4 className="font-playfair text-xl font-bold mb-4">
                Impacto Duradouro
              </h4>
              <p className="font-inter leading-relaxed">
                Juntos, estes dois líderes espirituais moldaram não apenas a infraestrutura física da paróquia, mas principalmente o caráter e a identidade cultural da comunidade italiana no bairro Nereu Ramos. Seu legado continua inspirando novas gerações na preservação e valorização do patrimônio histórico e cultural.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;