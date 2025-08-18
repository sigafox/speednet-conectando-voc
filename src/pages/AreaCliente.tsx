import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  CreditCard, 
  Download, 
  FileText, 
  HelpCircle, 
  Phone, 
  Settings, 
  User, 
  Wifi,
  AlertCircle,
  Clock,
  CheckCircle
} from "lucide-react";

const AreaCliente = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Área do Cliente
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Gerencie sua conta, visualize faturas e acompanhe o status da sua conexão
          </p>
        </div>
      </section>

      {/* Login/Dashboard Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="login" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="login">Fazer Login</TabsTrigger>
              <TabsTrigger value="services">Serviços Online</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card className="max-w-md mx-auto">
                <CardHeader className="text-center">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full w-fit mx-auto mb-4">
                    <User className="h-8 w-8" />
                  </div>
                  <CardTitle>Acesse sua conta</CardTitle>
                  <CardDescription>
                    Entre com seus dados para gerenciar sua conexão
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cpf">CPF/CNPJ</Label>
                    <Input id="cpf" placeholder="000.000.000-00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input id="password" type="password" placeholder="Sua senha" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary-dark">
                    Entrar
                  </Button>
                  <div className="text-center space-y-2">
                    <a href="#" className="text-sm text-primary hover:underline block">
                      Esqueci minha senha
                    </a>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                      Primeira vez? Cadastre-se aqui
                    </a>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="services">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Segunda Via */}
                <Card>
                  <CardHeader className="text-center">
                    <div className="bg-secondary text-secondary-foreground p-3 rounded-full w-fit mx-auto mb-4">
                      <FileText className="h-8 w-8" />
                    </div>
                    <CardTitle>Segunda Via</CardTitle>
                    <CardDescription>
                      Baixe ou visualize sua fatura
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline">
                      Gerar Segunda Via
                    </Button>
                  </CardContent>
                </Card>

                {/* Teste de Velocidade */}
                <Card>
                  <CardHeader className="text-center">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full w-fit mx-auto mb-4">
                      <Wifi className="h-8 w-8" />
                    </div>
                    <CardTitle>Teste de Velocidade</CardTitle>
                    <CardDescription>
                      Verifique a velocidade da sua conexão
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline">
                      Testar Velocidade
                    </Button>
                  </CardContent>
                </Card>

                {/* Status da Conexão */}
                <Card>
                  <CardHeader className="text-center">
                    <div className="bg-green-500 text-white p-3 rounded-full w-fit mx-auto mb-4">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <CardTitle>Status da Rede</CardTitle>
                    <CardDescription>
                      Verifique se há problemas na região
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <span className="text-green-600 font-semibold">✓ Operando Normalmente</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Alterar Plano */}
                <Card>
                  <CardHeader className="text-center">
                    <div className="bg-secondary text-secondary-foreground p-3 rounded-full w-fit mx-auto mb-4">
                      <Settings className="h-8 w-8" />
                    </div>
                    <CardTitle>Alterar Plano</CardTitle>
                    <CardDescription>
                      Faça upgrade ou downgrade do seu plano
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline">
                      Ver Planos
                    </Button>
                  </CardContent>
                </Card>

                {/* Débito Automático */}
                <Card>
                  <CardHeader className="text-center">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full w-fit mx-auto mb-4">
                      <CreditCard className="h-8 w-8" />
                    </div>
                    <CardTitle>Débito Automático</CardTitle>
                    <CardDescription>
                      Configure o pagamento automático
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline">
                      Configurar
                    </Button>
                  </CardContent>
                </Card>

                {/* Suporte */}
                <Card>
                  <CardHeader className="text-center">
                    <div className="bg-secondary text-secondary-foreground p-3 rounded-full w-fit mx-auto mb-4">
                      <HelpCircle className="h-8 w-8" />
                    </div>
                    <CardTitle>Suporte Técnico</CardTitle>
                    <CardDescription>
                      Abra um chamado ou tire dúvidas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline">
                      Falar com Suporte
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Ações Rápidas</h2>
          
          <div className="max-w-4xl mx-auto">
            <Alert className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Importante:</strong> Para acessar todos os recursos, faça login com sua conta SpeedNet.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>Atendimento Direto</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">WhatsApp</h4>
                    <p className="text-sm text-muted-foreground">(74) 98802-8888</p>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Abrir WhatsApp
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">E-mail</h4>
                    <p className="text-sm text-muted-foreground">speednetfpc@gmail.com</p>
                    <Button variant="outline" className="w-full">
                      Enviar E-mail
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Horário de Atendimento</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Suporte Técnico:</span>
                      <span className="text-green-600">24/7</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Comercial:</span>
                      <span>8h às 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Instalações:</span>
                      <span>8h às 17h</span>
                    </div>
                    <div className="mt-4 p-3 bg-accent rounded-lg">
                      <p className="text-sm text-center">
                        <strong>Emergências:</strong> Atendimento 24 horas via WhatsApp
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Dúvidas Frequentes</h2>
          
          <div className="max-w-2xl mx-auto space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Como solicitar a segunda via da fatura?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Você pode gerar a segunda via através da área do cliente ou entrando em contato 
                  conosco pelo WhatsApp. A fatura ficará disponível em PDF para download.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Minha internet está lenta, o que fazer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Primeiro, teste a velocidade usando nossa ferramenta. Se estiver abaixo do 
                  contratado, entre em contato conosco. Verificaremos a conexão remotamente.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Como alterar meu plano?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Entre em contato conosco através do WhatsApp ou telefone. Nossa equipe 
                  comercial ajudará você a escolher o melhor plano para suas necessidades.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AreaCliente;