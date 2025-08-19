import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Globe, Lightbulb, Target, Zap } from "lucide-react";

const InterdisciplinaryProject = () => {
  const areas = [
    {
      icon: BookOpen,
      title: "Ciências Humanas",
      description: "História, Geografia e Sociologia da imigração italiana",
      subjects: ["História", "Geografia", "Sociologia", "Filosofia"]
    },
    {
      icon: Globe,
      title: "Linguagens",
      description: "Português, Literatura e comunicação multicultural",
      subjects: ["Português", "Literatura", "Artes", "Língua Italiana"]
    },
    {
      icon: Zap,
      title: "Áreas Técnicas",
      description: "Tecnologia, design e preservação digital do patrimônio",
      subjects: ["Informática", "Design", "Fotografia", "Multimídia"]
    }
  ];

  const objectives = [
    {
      icon: Target,
      title: "Valorização Histórica",
      description: "Reconhecer e valorizar a contribuição da imigração italiana para a formação cultural de Jaraguá do Sul"
    },
    {
      icon: Users,
      title: "Protagonismo Estudantil",
      description: "Desenvolver o protagonismo dos estudantes como agentes de preservação e divulgação cultural"
    },
    {
      icon: Lightbulb,
      title: "Integração Curricular",
      description: "Conectar diferentes disciplinas através de um projeto comum e significativo"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Projeto Interdisciplinar "Patrimônio Histórico – Rotas Italianas"
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-4xl mx-auto">
            Uma iniciativa educativa inovadora que integra múltiplas áreas do conhecimento para formar jovens conscientes e engajados na preservação do patrimônio cultural.
          </p>
        </div>

        {/* Objetivos do Projeto */}
        <div className="mb-16">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary text-center mb-12">
            Objetivos do Projeto
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <Card key={index} className="shadow-soft hover:shadow-warm transition-all duration-300 border-none bg-white text-center">
                <CardHeader className="pb-4">
                  <objective.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="font-playfair text-xl">
                    {objective.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    {objective.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Áreas Integradas */}
        <div className="mb-16">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary text-center mb-12">
            Áreas do Conhecimento Integradas
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <Card key={index} className="shadow-elegant border-none bg-white overflow-hidden">
                <CardHeader className="bg-gradient-hero text-white">
                  <area.icon className="w-8 h-8 mb-3" />
                  <CardTitle className="font-playfair text-xl">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="font-inter text-muted-foreground mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.subjects.map((subject, idx) => (
                      <Badge key={idx} variant="secondary" className="font-inter text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Metodologia e Impacto */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="shadow-warm border-none bg-white">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-primary">
                Metodologia Ativa
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-inter font-semibold text-primary">Pesquisa Participativa</h4>
                <p className="font-inter text-sm text-muted-foreground">
                  Estudantes conduzem entrevistas com descendentes italianos, coletam depoimentos e documentam histórias familiares.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-inter font-semibold text-accent">Produção Multimídia</h4>
                <p className="font-inter text-sm text-muted-foreground">
                  Criação de documentários, podcasts, exposições fotográficas e conteúdo digital interativo.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-inter font-semibold text-terracotta">Ação Comunitária</h4>
                <p className="font-inter text-sm text-muted-foreground">
                  Apresentações para a comunidade, criação de roteiros turísticos e ações de preservação patrimonial.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div className="bg-gradient-accent rounded-2xl p-8 text-white">
              <h3 className="font-playfair text-2xl font-bold mb-4">
                Impacto Educacional
              </h3>
              <p className="font-inter leading-relaxed mb-6">
                O projeto transcende os muros da escola, conectando estudantes com sua comunidade e história local. Através da metodologia ativa, os jovens desenvolvem senso crítico, habilidades de pesquisa e consciência cidadã.
              </p>
              <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-accent">
                Saiba Mais
              </Button>
            </div>

            <Card className="shadow-soft border-l-4 border-l-italian-green bg-white">
              <CardContent className="p-6">
                <h4 className="font-playfair text-xl font-bold text-primary mb-3">
                  Resultados Esperados
                </h4>
                <ul className="space-y-2 font-inter text-muted-foreground">
                  <li>• Maior engajamento estudantil com a história local</li>
                  <li>• Fortalecimento da identidade cultural da comunidade</li>
                  <li>• Criação de acervo digital do patrimônio italiano</li>
                  <li>• Desenvolvimento de roteiros educativos e turísticos</li>
                  <li>• Formação de multiplicadores da cultura italiana</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterdisciplinaryProject;