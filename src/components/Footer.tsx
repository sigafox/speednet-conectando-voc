import { Button } from "@/components/ui/button";
import { Wifi, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Wifi className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  SpeedNet
                </h3>
                <p className="text-sm text-gray-400">Fibra Óptica</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Conectando você ao futuro desde 2009. Internet fibra óptica de alta qualidade 
              para residências e empresas em Sobradinho e região.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-primary hover:border-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-primary hover:border-primary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-primary hover:border-primary">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/planos" className="text-gray-300 hover:text-primary transition-colors">
                  Planos de Internet
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/area-cliente" className="text-gray-300 hover:text-primary transition-colors">
                  Área do Cliente
                </Link>
              </li>
              <li>
                <a href="#cobertura" className="text-gray-300 hover:text-primary transition-colors">
                  Área de Cobertura
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-300 text-sm">(74) 98802-8888</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:speednetfpc@gmail.com" className="text-gray-300 text-sm hover:text-primary">
                  speednetfpc@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <div className="text-gray-300 text-sm">
                  <p>Centro, Quadra S19, Rua 08, Nº 01B</p>
                  <p>CEP 48925-000</p>
                  <p>Sobradinho - BA - Brasil</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-gray-300 text-sm">Atendimento 24/7</span>
              </div>
            </div>
          </div>

          {/* Áreas de Cobertura */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Cobertura</h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Sobradinho - BA</li>
              <li>• Lagoa Grande</li>
              <li>• Assentamento Vale da Conquista</li>
              <li>• Tataui I e II</li>
              <li>• Chico Periquito</li>
              <li>• Assentamento São Francisco</li>
              <li>• Juazeiro - BA</li>
            </ul>
            <Button className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Verificar Cobertura
            </Button>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 SpeedNet. Todos os direitos reservados.</p>
              <p className="mt-1">
                Licença Anatel: Estação nº 1003961603 | 
                <a href="http://www.speednetfpc.com.br" className="hover:text-primary ml-1">
                  www.speednetfpc.com.br
                </a>
              </p>
            </div>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-primary">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;