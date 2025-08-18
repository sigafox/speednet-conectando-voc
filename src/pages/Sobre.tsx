import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Heart, Shield, Award, MapPin } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre a SpeedNet
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Conectando pessoas e empresas desde 2009 com tecnologia de ponta 
            e atendimento de excelência
          </p>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Quem Somos</h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-center text-lg mb-8">
                A SpeedNet é uma empresa brasileira de provimento de Internet fibra Óptica, 
                criada em 2009, atuando com excelência na sua área.
              </p>
              
              <Card className="mb-8">
                <CardContent className="p-6">
                  <p className="mb-4">
                    Nossa política da qualidade destaca o compromisso com o sucesso dos nossos clientes, 
                    proporcionando integral comprometimento, parceria e a proposição de soluções 
                    alternativas e inovadoras.
                  </p>
                  
                  <p>
                    Ao longo dos anos, a SpeedNet tem continuamente ampliado suas atividades e 
                    competências, agregando profissionais de alta capacidade técnica e aprimorando 
                    metodologias de trabalho.
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mb-6 text-center">Nosso Portfólio</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <Badge variant="secondary" className="mb-2">Supermercados</Badge>
                </div>
                <div className="text-center">
                  <Badge variant="secondary" className="mb-2">Lanchonetes</Badge>
                </div>
                <div className="text-center">
                  <Badge variant="secondary" className="mb-2">Postos de Combustível</Badge>
                </div>
                <div className="text-center">
                  <Badge variant="secondary" className="mb-2">Residências</Badge>
                </div>
              </div>

              <Card className="bg-accent">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Nossa Cobertura</h4>
                      <p className="text-sm">
                        A SpeedNet tem sua sede em Sobradinho (BA), além de fornecermos os nossos 
                        serviços em toda a nossa cidade incluindo Lagoa Grande, Assentamento Vale da 
                        Conquista, Tataui I e II e Chico Periquito, também fornecemos no Assentamento 
                        São Francisco Juazeiro BA.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Missão, Visão e Valores</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Missão */}
            <Card className="h-full">
              <CardHeader className="text-center">
                <div className="bg-primary text-primary-foreground p-3 rounded-full w-fit mx-auto mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <CardTitle className="text-primary">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Desenvolver competência e soluções como provedor de internet, contribuindo 
                  para o sucesso dos nossos clientes.
                </p>
                <p className="text-sm text-muted-foreground">
                  Nossa missão é reduzir distâncias através da conectividade oferecida pela 
                  tecnologia e inovação, assegurando a comodidade e a satisfação dos nossos 
                  consumidores. Trabalhamos de forma diferenciada e eficiente, sempre com 
                  responsabilidade, respeito, ética, transparência, e um constante compromisso 
                  com a melhoria contínua de nossos serviços.
                </p>
              </CardContent>
            </Card>

            {/* Visão */}
            <Card className="h-full">
              <CardHeader className="text-center">
                <div className="bg-secondary text-secondary-foreground p-3 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <CardTitle className="text-primary">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Ser uma das maiores e mais competentes empresas de provimento de internet da cidade.
                </p>
                <p className="text-sm text-muted-foreground">
                  Transformar a vida das pessoas conectando-as ao futuro, por meio de soluções 
                  tecnológicas inovadoras e de alta qualidade. Buscamos reduzir distâncias, 
                  proporcionando comodidade, segurança e excelência em cada interação. Com um 
                  compromisso inabalável com a ética, transparência e a satisfação dos nossos 
                  clientes, trabalhamos para construir um futuro conectado e mais acessível para todos.
                </p>
              </CardContent>
            </Card>

            {/* Valores */}
            <Card className="h-full">
              <CardHeader className="text-center">
                <div className="bg-primary text-primary-foreground p-3 rounded-full w-fit mx-auto mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <CardTitle className="text-primary">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm text-secondary">Fé</h4>
                    <p className="text-xs text-muted-foreground">Acreditamos no propósito maior e trabalhamos para cumpri-lo</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-secondary">Trabalho em Equipe</h4>
                    <p className="text-xs text-muted-foreground">Comunicação e colaboração para o sucesso</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-secondary">Qualidade</h4>
                    <p className="text-xs text-muted-foreground">Comprometimento com o melhor serviço possível</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-secondary">Responsabilidade</h4>
                    <p className="text-xs text-muted-foreground">Atuamos com senso de dono</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-secondary">Resultados</h4>
                    <p className="text-xs text-muted-foreground">Determinação e foco em nossas metas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Política e Sistema de Gestão */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="bg-primary text-primary-foreground p-3 rounded-full w-fit mb-4">
                    <Shield className="h-8 w-8" />
                  </div>
                  <CardTitle>Política de Qualidade</CardTitle>
                  <CardDescription>
                    Nosso compromisso com a excelência em todos os serviços
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm">Melhoria contínua dos processos produtivos</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm">Minimização dos riscos de saúde e segurança</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm">Atendimento da legislação e normas vigentes</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm">Atuação ética e responsabilidade social</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-secondary text-secondary-foreground p-3 rounded-full w-fit mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <CardTitle>Licença Anatel</CardTitle>
                  <CardDescription>
                    Autorização oficial para prestação de serviços de telecomunicações
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    A SpeedNet possui perante a Anatel (Agência Nacional de Telecomunicações) 
                    licença para funcionamento da estação.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold text-sm mb-2">Detalhes da Licença:</h4>
                    <ul className="text-xs space-y-1 text-muted-foreground">
                      <li><strong>Escopo:</strong> Serviço de Comunicação Multimídia</li>
                      <li><strong>Latitude:</strong> 09S281030</li>
                      <li><strong>Longitude:</strong> 40W473990</li>
                      <li><strong>Número da Estação:</strong> 1003961603</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;