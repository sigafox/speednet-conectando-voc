import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import PlansSection from "@/components/PlansSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wifi, 
  Shield, 
  Clock, 
  Award, 
  Users, 
  Zap, 
  HeadphonesIcon,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />
      
      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher a SpeedNet?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mais de 15 anos conectando Sobradinho e região com internet de alta qualidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary text-primary-foreground p-3 rounded-full w-fit mx-auto mb-4">
                  <Wifi className="h-8 w-8" />
                </div>
                <CardTitle>Fibra 100% Óptica</CardTitle>
                <CardDescription>
                  Internet ultra-rápida e estável com tecnologia de ponta
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-secondary text-secondary-foreground p-3 rounded-full w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <CardTitle>Instalação Gratuita</CardTitle>
                <CardDescription>
                  Sem custos de instalação e configuração completa incluída
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary text-primary-foreground p-3 rounded-full w-fit mx-auto mb-4">
                  <HeadphonesIcon className="h-8 w-8" />
                </div>
                <CardTitle>Suporte 24/7</CardTitle>
                <CardDescription>
                  Atendimento especializado sempre disponível para você
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-secondary text-secondary-foreground p-3 rounded-full w-fit mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <CardTitle>Licença Anatel</CardTitle>
                <CardDescription>
                  Empresa regulamentada e licenciada pela Anatel
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <PlansSection />

      {/* Coverage Area */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Área de Cobertura
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Levamos internet de qualidade para toda a região de Sobradinho e arredores
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {[
                "Sobradinho - BA",
                "Lagoa Grande", 
                "Vale da Conquista",
                "Tataui I",
                "Tataui II",
                "Chico Periquito",
                "São Francisco",
                "Juazeiro - BA"
              ].map((location, index) => (
                <Badge key={index} variant="secondary" className="p-2 text-center">
                  {location}
                </Badge>
              ))}
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Nossa Sede</h3>
                </div>
                <p className="text-muted-foreground">
                  Centro, Quadra S19, Rua 08, Número 01B<br />
                  CEP 48925-000 - Sobradinho - BA - Brasil
                </p>
                <Button className="mt-4" variant="outline">
                  Verificar Cobertura
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">15+</div>
              <p className="text-sm">Anos de Experiência</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">1000+</div>
              <p className="text-sm">Clientes Ativos</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
              <p className="text-sm">Suporte Técnico</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">1GB</div>
              <p className="text-sm">Velocidade Máxima</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">
                Pronto para ter a melhor internet?
              </CardTitle>
              <CardDescription className="text-lg">
                Entre em contato conosco e descubra o plano perfeito para você
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary hover:bg-primary-dark px-8 py-4 text-lg">
                  <Phone className="h-5 w-5 mr-2" />
                  (74) 98802-8888
                </Button>
                <Button variant="outline" className="px-8 py-4 text-lg">
                  <Mail className="h-5 w-5 mr-2" />
                  Enviar E-mail
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Atendimento WhatsApp 24 horas | E-mail: speednetfpc@gmail.com
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
