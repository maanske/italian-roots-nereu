import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Users, Heart, BookOpen, Calendar } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      info: "Bairro Nereu Ramos, Jaraguá do Sul - SC",
      description: "Localizada no coração da comunidade italiana"
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(47) 3372-XXXX",
      description: "Atendimento de segunda a sexta"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "paroquia@rotasitalianas.org.br",
      description: "Resposta em até 24 horas"
    },
    {
      icon: Clock,
      title: "Horários",
      info: "Seg a Sex: 8h às 17h | Dom: 7h às 12h",
      description: "Missas e atividades conforme programação"
    }
  ];

  const participationOptions = [
    {
      icon: Users,
      title: "Voluntariado",
      description: "Participe das ações sociais e eventos culturais da paróquia",
      badge: "Aberto"
    },
    {
      icon: Heart,
      title: "Doações",
      description: "Contribua para a preservação do patrimônio e ações sociais",
      badge: "Necessário"
    },
    {
      icon: BookOpen,
      title: "Pesquisa Histórica",
      description: "Compartilhe documentos, fotos e histórias familiares",
      badge: "Importante"
    },
    {
      icon: Calendar,
      title: "Visitas Educativas",
      description: "Agende visitas para grupos escolares e instituições",
      badge: "Agendamento"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Contato e Participação
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Junte-se a nós na preservação e divulgação da rica herança cultural italiana do bairro Nereu Ramos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary">
              Entre em Contato
            </h3>
            
            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="shadow-soft border-none bg-white hover:shadow-warm transition-all duration-300">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <item.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-inter font-semibold text-primary mb-1">
                        {item.title}
                      </h4>
                      <p className="font-inter text-foreground mb-1">
                        {item.info}
                      </p>
                      <p className="font-inter text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Formulário de Contato */}
          <Card className="shadow-elegant border-none bg-white">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-primary">
                Envie sua Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-inter text-sm font-medium text-muted-foreground mb-2 block">
                    Nome Completo
                  </label>
                  <Input placeholder="Seu nome completo" className="border-border" />
                </div>
                <div>
                  <label className="font-inter text-sm font-medium text-muted-foreground mb-2 block">
                    E-mail
                  </label>
                  <Input type="email" placeholder="seu@email.com" className="border-border" />
                </div>
              </div>
              
              <div>
                <label className="font-inter text-sm font-medium text-muted-foreground mb-2 block">
                  Assunto
                </label>
                <Input placeholder="Como podemos ajudar?" className="border-border" />
              </div>
              
              <div>
                <label className="font-inter text-sm font-medium text-muted-foreground mb-2 block">
                  Mensagem
                </label>
                <Textarea 
                  placeholder="Conte-nos mais sobre seu interesse ou como gostaria de participar..."
                  rows={5}
                  className="border-border resize-none"
                />
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-inter">
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Formas de Participação */}
        <div>
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary text-center mb-12">
            Como Você Pode Participar
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {participationOptions.map((option, index) => (
              <Card key={index} className="shadow-soft border-none bg-white hover:shadow-warm transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <option.icon className="w-10 h-10 text-accent" />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CardTitle className="font-playfair text-lg">
                      {option.title}
                    </CardTitle>
                    <Badge variant="secondary" className="font-inter text-xs">
                      {option.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                    {option.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-6">
            Preservar o Passado, Construir o Futuro
          </h3>
          <p className="font-inter text-lg mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            A história da imigração italiana no bairro Nereu Ramos é um patrimônio de todos nós. Cada contribuição, cada história compartilhada, cada participação fortalece esta herança cultural única e garante que ela continue viva para as próximas gerações.
          </p>
          <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary font-inter">
            Faça Parte desta História
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;