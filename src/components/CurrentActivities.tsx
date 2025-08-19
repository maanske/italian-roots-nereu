import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Heart, GraduationCap, Camera, Smartphone } from "lucide-react";
import festaImage from "@/assets/festa-italiana.jpg";

const CurrentActivities = () => {
  const activities = [
    {
      icon: Calendar,
      title: "Celebrações Religiosas",
      description: "Missas especiais, novenas e festividades do calendário católico italiano",
      color: "primary",
      frequency: "Semanal"
    },
    {
      icon: Users,
      title: "Festas Culturais Italianas",
      description: "Festa da Polenta, celebrações tradicionais e eventos gastronômicos",
      color: "accent",
      frequency: "Mensal"
    },
    {
      icon: Heart,
      title: "Ações Sociais",
      description: "Distribuição de alimentos, apoio às famílias e trabalhos de caridade",
      color: "terracotta",
      frequency: "Contínuo"
    },
    {
      icon: GraduationCap,
      title: "Visitas Educativas",
      description: "Recepção de estudantes e grupos interessados na história local",
      color: "italian-green",
      frequency: "Agendado"
    },
    {
      icon: Camera,
      title: "Preservação do Patrimônio",
      description: "Digitalização de documentos, fotografias e registros históricos",
      color: "primary",
      frequency: "Permanente"
    },
    {
      icon: Smartphone,
      title: "Tecnologia Educativa",
      description: "Uso de QR codes, aplicativos e recursos digitais para envolver visitantes",
      color: "accent",
      frequency: "Inovação"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Atividades e Serviços da Paróquia em 2025
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            A tradição se encontra com a modernidade em uma programação diversificada que mantém viva a herança italiana.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <Card className="overflow-hidden shadow-elegant border-none">
              <CardContent className="p-0">
                <img 
                  src={festaImage} 
                  alt="Festa cultural italiana na paróquia"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="font-playfair text-2xl font-bold mb-2">
                    Tradições Vivas
                  </h3>
                  <p className="font-inter text-sm opacity-90">
                    Comunidade unida celebrando as festas tradicionais italianas
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary">
              Uma Programação Rica e Diversificada
            </h3>
            <p className="font-inter text-muted-foreground leading-relaxed">
              A Paróquia Nossa Senhora do Rosário mantém uma agenda vibrante de atividades que honram o passado enquanto abraçam o futuro. Nossa programação 2025 integra tradição e inovação, oferecendo experiências significativas para toda a comunidade.
            </p>
            <p className="font-inter text-muted-foreground leading-relaxed">
              Desde as celebrações religiosas tradicionais até o uso de tecnologias modernas para educação patrimonial, cada atividade é pensada para fortalecer os laços comunitários e transmitir nossa rica herança cultural às novas gerações.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <Card key={index} className="shadow-soft hover:shadow-warm transition-all duration-300 border-none bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <activity.icon className={`w-8 h-8 text-${activity.color}`} />
                  <Badge variant="secondary" className="font-inter text-xs">
                    {activity.frequency}
                  </Badge>
                </div>
                <CardTitle className="font-playfair text-lg">
                  {activity.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-6">
            Participe da Nossa Comunidade
          </h3>
          <p className="font-inter text-lg mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Todas as atividades são abertas à comunidade. Venha conhecer nossa história, participar das celebrações e contribuir para a preservação deste patrimônio único da imigração italiana em Santa Catarina.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 font-inter">
              Visitas Guiadas
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 font-inter">
              Eventos Culturais
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 font-inter">
              Ações Sociais
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentActivities;