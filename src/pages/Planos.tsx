import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlansSection from "@/components/PlansSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Phone, Mail, Clock } from "lucide-react";

const Planos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Planos de Internet Fibra Óptica
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Escolha o plano ideal para sua necessidade. Temos opções para residências 
            e empresas com a melhor velocidade da região.
          </p>
        </div>
      </section>

      {/* Plans Section */}
      <PlansSection />

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher a SpeedNet?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mais de 15 anos oferecendo internet de qualidade superior para Sobradinho e região
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-primary">Fibra 100% Óptica</CardTitle>
                <CardDescription>
                  Tecnologia mais avançada do mercado para máxima estabilidade
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Menor latência</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Maior estabilidade</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Velocidade garantida</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-primary">Instalação Gratuita</CardTitle>
                <CardDescription>
                  Não cobramos nada pela instalação e configuração do seu plano
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Sem taxa de instalação</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />WiFi configurado</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Teste de velocidade</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-primary">Suporte 24/7</CardTitle>
                <CardDescription>
                  Nossa equipe está sempre disponível para ajudar você
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />WhatsApp direto</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Técnicos locais</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Atendimento rápido</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl">
                Precisa de um plano personalizado?
              </CardTitle>
              <CardDescription className="text-lg">
                Entre em contato conosco e criamos a solução perfeita para você
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full w-fit mx-auto">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">Telefone</h3>
                  <p className="text-muted-foreground">(74) 98802-8888</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Ligar Agora
                  </Button>
                </div>

                <div className="space-y-2">
                  <div className="bg-secondary text-secondary-foreground p-3 rounded-full w-fit mx-auto">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">E-mail</h3>
                  <p className="text-muted-foreground">speednetfpc@gmail.com</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Enviar E-mail
                  </Button>
                </div>

                <div className="space-y-2">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full w-fit mx-auto">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">Horário</h3>
                  <p className="text-muted-foreground">24 horas por dia</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    WhatsApp
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Planos;