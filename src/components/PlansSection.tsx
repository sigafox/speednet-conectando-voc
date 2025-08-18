import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Wifi, Users, Building, Home } from "lucide-react";

const plans = [
  {
    name: "Básico Residencial",
    speed: "100 MB",
    price: "R$ 59,90",
    description: "Perfeito para uso básico da internet",
    features: [
      "Download: 100 Mbps",
      "Upload: 50 Mbps",
      "WiFi grátis incluído",
      "Instalação gratuita",
      "Suporte técnico",
      "Ideal para 2-3 dispositivos"
    ],
    icon: Home,
    popular: false,
    category: "residencial"
  },
  {
    name: "Turbo Residencial",
    speed: "300 MB",
    price: "R$ 89,90",
    description: "Para famílias que precisam de mais velocidade",
    features: [
      "Download: 300 Mbps",
      "Upload: 150 Mbps",
      "WiFi grátis incluído",
      "Instalação gratuita",
      "Suporte técnico prioritário",
      "Ideal para 4-6 dispositivos",
      "Streaming em 4K"
    ],
    icon: Users,
    popular: true,
    category: "residencial"
  },
  {
    name: "Ultra Residencial",
    speed: "500 MB",
    price: "R$ 119,90",
    description: "Máxima velocidade para sua casa",
    features: [
      "Download: 500 Mbps",
      "Upload: 250 Mbps",
      "WiFi 6 grátis incluído",
      "Instalação gratuita",
      "Suporte técnico VIP",
      "Dispositivos ilimitados",
      "Gaming e streaming premium"
    ],
    icon: Wifi,
    popular: false,
    category: "residencial"
  },
  {
    name: "Empresarial 200",
    speed: "200 MB",
    price: "R$ 149,90",
    description: "Solução completa para pequenas empresas",
    features: [
      "Download: 200 Mbps",
      "Upload: 200 Mbps (simétrico)",
      "IP fixo incluso",
      "WiFi empresarial",
      "Suporte técnico 24/7",
      "SLA de 99,5%",
      "Backup de link opcional"
    ],
    icon: Building,
    popular: false,
    category: "empresarial"
  },
  {
    name: "Empresarial 500",
    speed: "500 MB",
    price: "R$ 299,90",
    description: "Para empresas que exigem alta performance",
    features: [
      "Download: 500 Mbps",
      "Upload: 500 Mbps (simétrico)",
      "IP fixo incluso",
      "WiFi empresarial",
      "Suporte técnico dedicado",
      "SLA de 99,8%",
      "Backup de link incluso"
    ],
    icon: Building,
    popular: true,
    category: "empresarial"
  },
  {
    name: "Empresarial 1GB",
    speed: "1 GB",
    price: "R$ 499,90",
    description: "Máxima velocidade para grandes demandas",
    features: [
      "Download: 1 Gbps",
      "Upload: 1 Gbps (simétrico)",
      "IP fixo incluso",
      "WiFi empresarial premium",
      "Gerente de conta dedicado",
      "SLA de 99,9%",
      "Redundância total"
    ],
    icon: Building,
    popular: false,
    category: "empresarial"
  }
];

const PlansSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Escolha o Plano Perfeito
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos planos flexíveis para atender desde o uso residencial básico 
            até as necessidades mais exigentes de empresas
          </p>
        </div>

        {/* Residential Plans */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Planos Residenciais
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.filter(plan => plan.category === "residencial").map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <Card key={index} className={`relative overflow-hidden transition-all hover:shadow-lg ${
                  plan.popular ? "border-primary shadow-md scale-105" : ""
                }`}>
                  {plan.popular && (
                    <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                      Mais Popular
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 bg-accent rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription className="text-sm">{plan.description}</CardDescription>
                    <div className="mt-4">
                      <div className="text-3xl font-bold text-primary">{plan.price}</div>
                      <div className="text-sm text-muted-foreground">/mês</div>
                      <div className="text-lg font-semibold text-secondary mt-1">{plan.speed}</div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? "bg-primary hover:bg-primary-dark" 
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      }`}
                    >
                      Contratar Agora
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Business Plans */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Planos Empresariais
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.filter(plan => plan.category === "empresarial").map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <Card key={index} className={`relative overflow-hidden transition-all hover:shadow-lg ${
                  plan.popular ? "border-primary shadow-md scale-105" : ""
                }`}>
                  {plan.popular && (
                    <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                      Recomendado
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 bg-accent rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription className="text-sm">{plan.description}</CardDescription>
                    <div className="mt-4">
                      <div className="text-3xl font-bold text-primary">{plan.price}</div>
                      <div className="text-sm text-muted-foreground">/mês</div>
                      <div className="text-lg font-semibold text-secondary mt-1">{plan.speed}</div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? "bg-primary hover:bg-primary-dark" 
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      }`}
                    >
                      Solicitar Orçamento
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Não encontrou o plano ideal? Entre em contato conosco!
          </p>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;