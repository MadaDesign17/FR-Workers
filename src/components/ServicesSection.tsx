import { Monitor, Smartphone, Cloud, Cog, Database, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ServicesSection = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Applications Mobiles",
      description: "Applications natives et cross-platform pour iOS et Android avec une expérience utilisateur exceptionnelle.",
      features: ["React Native", "Flutter", "Swift/Kotlin", "API Integration"],
      pricing: "À partir de 8 000€",
      popular: true
    },
    {
      icon: Monitor,
      title: "Développement Web",
      description: "Applications web modernes et performantes avec les dernières technologies React, Vue.js et Angular.",
      features: ["Sites vitrines", "Applications SPA", "E-commerce", "Progressive Web Apps"],
      pricing: "À partir de 40€ à 2 500€",
      popular: false
    },
    {
      icon: Database,
      title: "Backend",
      description: "Backend robustes et bases de données optimisées pour supporter vos applications à grande échelle.",
      features: ["MySQL", "GraphQL", "PostgreSQL", "MongoDB"],
      pricing: "À partir de 3 000€",
      popular: false
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Analyse & Audit",
      description: "Nous analysons vos besoins et définissons ensemble la stratégie optimale."
    },
    {
      step: "02",
      title: "Conception & Design",
      description: "Création des maquettes et architecture technique de votre solution."
    },
    {
      step: "03",
      title: "Développement",
      description: "Développement agile avec livraisons régulières et tests continus."
    },
    {
      step: "04",
      title: "Déploiement & Support",
      description: "Mise en production et accompagnement pour garantir le succès."
    }
  ];

  return (
    <section id= "services" className = "py-20 bg-background" >
      <div className="container mx-auto px-4" >
        <div className="text-center mb-16 animate-fadeInUp" >
          <h2 className="text-4xl font-bold mb-4 gradient-text" >
            Nos Services
              </h2>
              < p className = "text-xl text-muted-foreground max-w-2xl mx-auto" >
                Des solutions technologiques complètes pour accompagner votre croissance 
            et transformer vos défis en opportunités.
          </p>
    </div>

  {/* Services Grid */ }
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" >
  {
    services.map((service, index) => (
      <Card 
              key= { index } 
              className = {`hover-lift animate-fadeInUp relative ${service.popular ? 'ring-2 ring-primary' : ''
        }`}
  style = {{ animationDelay: `${index * 0.1}s` }
}
            >
  {
    service.popular && (
      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
        Le plus populaire
      </ Badge >
              )}

<CardContent className="p-8" >
  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6" >
    <service.icon className="w-8 h-8 text-primary" />
      </div>

      < h3 className = "text-xl font-bold mb-3" > { service.title } </h3>
        < p className = "text-muted-foreground mb-6 leading-relaxed" >
          { service.description }
          </p>

{/* Features */ }
<ul className="space-y-2 mb-6" >
{
  service.features.map((feature, featureIndex) => (
    <li key= { featureIndex } className = "flex items-center text-sm" >
    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" > </div>
                      { feature }
    </li>
  ))
}
  </ul>

{/* Pricing */ }
<div className="border-t pt-6" >
  <div className="text-2xl font-bold text-primary mb-4" >
    { service.pricing }
    </div>
    < button
onClick = {() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
className = "w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
  >
  Demander un devis
    </button>
    </div>
    </CardContent>
    </Card>
          ))}
</div>

{/* Process Section */ }
<div className="animate-slideInLeft" >
  <div className="text-center mb-12" >
    <h3 className="text-3xl font-bold mb-4" > Notre Processus </h3>
      < p className = "text-xl text-muted-foreground max-w-2xl mx-auto" >
        Une méthodologie éprouvée pour garantir le succès de votre projet
          </p>
          </div>

          < div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" >
          {
            processSteps.map((process, index) => (
              <div 
                key= { index } 
                className = "text-center animate-fadeInUp"
                style = {{ animationDelay: `${index * 0.2}s` }}
            >
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" >
              { process.step }
              </div>
              < h4 className = "text-lg font-semibold mb-3" > { process.title } </h4>
                < p className = "text-muted-foreground text-sm leading-relaxed" >
                  { process.description }
                  </p>
{
  index < processSteps.length - 1 && (
    <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-border transform -translate-y-1/2" > </div>
                )
}
</div>
            ))}
</div>
  </div>

{/* CTA Section */ }
<div className="text-center mt-16 animate-fadeInUp" >
  <Card className="max-w-2xl mx-auto hover-lift" >
    <CardContent className="p-8" >
      <h3 className="text-2xl font-bold mb-4" >
        Prêt à démarrer votre projet ?
          </h3>
          < p className = "text-muted-foreground mb-6" >
            Discutons de vos besoins et trouvons ensemble la solution parfaite pour votre entreprise.
              </p>
              < div className = "flex flex-col sm:flex-row gap-4 justify-center" >
                <button 
                  onClick={ () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }
className = "px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
  >
  Consultation gratuite
    </button>
    < button
onClick = {() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
className = "px-8 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition-colors"
  >
  Voir nos réalisations
    </button>
    </div>
    </CardContent>
    </Card>
    </div>
    </div>
    </section>
  );
};

export default ServicesSection;