import { MapPin, Phone, Mail, Linkedin, Twitter, Github, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Développement Web", href: "#services" },
        { name: "Applications mobiles", href: "#services" },
        { name: "Consulting IT", href: "#services" },
        { name: "Maintenance & Support", href: "#services" }
      ]
    },
    {
      title: "À propos",
      links: [
        { name: "Notre équipe", href: "#about" },
        { name: "Notre mission", href: "#about" },
        { name: "Nos valeurs", href: "#about" },
        { name: "Carrières", href: "#contact" }
      ]
    },
    {
      title: "Ressources",
      links: [
        { name: "Portfolio", href: "#projects" },
        { name: "Témoignages", href: "#testimonials" },
        { name: "Blog", href: "#" },
        { name: "Documentation", href: "#" }
      ]
    }
  ];

  return (
    <footer className= "bg-muted/50 border-t" >
    <div className="container mx-auto px-4 py-16" >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8" >
        {/* Company Info */ }
        < div className = "lg:col-span-2" >
          <div className="flex items-center space-x-3 mb-6" >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center" >
              <span className="text-primary-foreground font-bold text-lg" > FR </span>
                </div>
                < span className = "text-2xl font-bold" > FR - Worker </span>
                  </div>

                  < p className = "text-muted-foreground mb-6 max-w-md" >
                    Votre partenaire technologique de confiance pour transformer vos idées 
              en solutions digitales innovantes et performantes.
            </p>

  {/* Contact Info */ }
  <div className="space-y-3 text-sm" >
    <div className="flex items-center space-x-3" >
      <MapPin className="w-4 h-4 text-primary" />
        <span className="text-muted-foreground" >
          Madagascar, Antananarivo 101
            </span>
            </div>
            < div className = "flex items-center space-x-3" >
              <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground" > +261 34 92 846 85 </span>
                  </div>
                  < div className = "flex items-center space-x-3" >
                    <Mail className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground" > fr.worker@gmail.com</span>
                        </div>
                        </div>

  {/* Social Links */ }
  <div className="flex space-x-4 mt-6" >
    <a href="#" className = "w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" >
      <Facebook className="w-5 h-5" />
        </a>
        < a href = "#" className = "w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" >
          <Twitter className="w-5 h-5" />
            </a>
            < a href = "https://github.com/MadaDesign17" className = "w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" >
              <Github className="w-5 h-5" />
                </a>
                </div>
                </div>

  {/* Footer Sections */ }
  {
    footerSections.map((section, index) => (
      <div key= { index } >
      <h3 className="font-semibold mb-4" > { section.title } </h3>
    < ul className = "space-y-3" >
    {
      section.links.map((link, linkIndex) => (
        <li key= { linkIndex } >
        <a 
                      href={ link.href }
                      className = "text-muted-foreground hover:text-primary transition-colors text-sm"
                      onClick = {(e) => {
  if (link.href.startsWith('#')) {
    e.preventDefault();
    const element = document.querySelector(link.href);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}}
                    >
  { link.name }
  </a>
  </li>
                ))}
</ul>
  </div>
          ))}
</div>

{/* Bottom Section */ }
<div className="border-t border-border mt-12 pt-8" >
  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0" >
    <div className="text-sm text-muted-foreground" >
              © { currentYear } FR - Worker.Tous droits réservés.
            </div>

  < div className = "flex space-x-6 text-sm" >
    <a href="#" className = "text-muted-foreground hover:text-primary transition-colors" >
      Politique de confidentialité
        </a>
        < a href = "#" className = "text-muted-foreground hover:text-primary transition-colors" >
          Conditions d'utilisation
            </a>
            < a href = "#" className = "text-muted-foreground hover:text-primary transition-colors" >
              Mentions légales
                </a>
                </div>
                </div>
                </div>

{/* Professional Badge */ }
<div className="text-center mt-8 pt-8 border-t border-border" >
  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/5 rounded-full" >
    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" > </div>
      < span className = "text-xs font-medium text-primary" >
        Certifié ISO 9001 • Partenaire Microsoft Gold • Expert AWS
          </span>
          </div>
          </div>
          </div>
          </footer>
  );
};

export default Footer;