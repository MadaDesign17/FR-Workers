import { ExternalLink, Github, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Plateforme E-commerce",
      category: "E-commerce",
      description: "Développement d'une plateforme e-commerce B2B complète avec gestion des stocks, facturation automatisée et tableau de bord analytics.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MySQL", "Stripe"],
      client: "TechCorp Solutions",
      duration: "4 mois",
      results: ["+150% ROI", "50K+ utilisateurs", "99.9% uptime"],
      github: "https://github.com/MadaDesign17"
    },
    {
      id: 2,
      title: "Système de Gestion RH",
      category: "Enterprise",
      description: "Solution SaaS complète pour la gestion des ressources humaines avec modules de recrutement, paie et formation.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
      client: "HR Solutions Inc",
      duration: "8 mois",
      results: ["500+ entreprises", "10K+ employés", "40% gain productivité"],
      github: "https://github.com/MadaDesign17"
    },
    {
      id: 3,
      title: "Mini Systeme de Gestion de Stage",
      category: "Stage",
      description: "Système de gestion de stage pour la planification et le suivi des missions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Typescript", "PHP", "Mysql", "Bootstrap"],
      client: "Université d'Antananarivo à Madagascar",
      duration: "5 mois",
      results: ["1M+ data points/jour", "Sub-second latency", "99.99% accuracy"],
      github: "https://github.com/MadaDesign17"
    },
    {
      id: 4,
      title: "Bijouterie en ligne",
      category: "Bijouterie",
      description: "Développement d'une plateforme de bijouterie en ligne avec gestion des stocks, paiement sécurisé et interface utilisateur intuitive.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
      technologies: ["React", "Solidity", "IPFS", "Web3"],
      client: "ArtChain Gallery",
      duration: "7 mois",
      results: ["€2M+ transactions", "5K+ artistes", "Gas optimized"],
      github: "https://github.com/MadaDesign17"
    },
    {
      id: 5,
      title: "Plateforme Gestion des rendez-vous professionnels",
      category: "Rendez-vous",
      description: "Plateforme de gestion des rendez-vous professionnels avec intégration de calendriers, notifications et visioconférences.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Prisma", "Node.js", "MySQL"],
      client: "EduTech Pro",
      duration: "6 mois",
      results: ["25K+ étudiants", "95% completion rate", "Multi-langues"],
      github: "https://github.com/MadaDesign17"
    }
  ];

  const categories = ["Tous", "E-commerce", "Enterprise", "Stage", "Bijouterie", "Rendez-vous"];

  return (
    <section id= "projects" className = "py-20 bg-background" >
      <div className="container mx-auto px-4" >
        <div className="text-center mb-16 animate-fadeInUp" >
          <h2 className="text-4xl font-bold mb-4 gradient-text" >
            Nos Réalisations les plus Reussies
              </h2>
              < p className = "text-xl text-muted-foreground max-w-2xl mx-auto" >
                Découvrez quelques - uns de nos projets les plus remarquables, témoins 
            de notre expertise et de notre capacité d'innovation.
    </p>
    </div>

  {/* Category Filter */ }
  <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slideInLeft" >
  {
    categories.map((category, index) => (
      <Badge 
              key= { index }
              variant = { category === "Tous" ? "default" : "outline"}
  className = "cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2 text-sm"
    >
    { category }
    </Badge>
          ))}
</div>

{/* Projects Grid */ }
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
{
  projects.map((project, index) => (
    <Card 
              key= { project.id } 
              className = "group hover-lift animate-fadeInUp overflow-hidden"
              style = {{ animationDelay: `${index * 0.1}s` }}
  >
  <div className="relative overflow-hidden" >
    <img
                  src={ project.image }
alt = { project.title }
className = "w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
  />
  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4" >
    <a
                    href={ project.link }
className = "p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
title = "Voir le projet"
  >
  <ExternalLink className="w-5 h-5 text-gray-800" />
    </a>
    < a
href = { project.github }
className = "p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
title = "Code source"
  >
  <Github className="w-5 h-5 text-gray-800" />
    </a>
    </div>
    < Badge className = "absolute top-4 left-4 bg-accent text-accent-foreground" >
      { project.category }
      </Badge>
      </div>

      < CardContent className = "p-6" >
        <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors" >
          { project.title }
          </h3>

          < p className = "text-muted-foreground mb-4 line-clamp-3" >
            { project.description }
            </p>

{/* Project Details */ }
<div className="space-y-3 mb-4 text-sm" >
  <div className="flex items-center text-muted-foreground" >
    <Calendar className="w-4 h-4 mr-2" />
      <span>{ project.duration } • { project.client } </span>
        </div>
        </div>

{/* Technologies */ }
<div className="flex flex-wrap gap-2 mb-4" >
{
  project.technologies.map((tech, techIndex) => (
    <Badge 
                      key= { techIndex } 
                      variant = "secondary" 
                      className = "text-xs"
    >
    { tech }
    </Badge>
  ))
}
  </div>

{/* Results */ }
<div className="border-t pt-4" >
  <h4 className="font-semibold text-sm mb-2 text-primary" >
    Résultats clés:
</h4>
  < div className = "flex flex-wrap gap-1" >
  {
    project.results.map((result, resultIndex) => (
      <Badge 
                        key= { resultIndex } 
                        variant = "outline" 
                        className = "text-xs border-primary/30"
      >
      { result }
      </Badge>
    ))
  }
    </div>
    </div>
    </CardContent>
    </Card>
          ))}
</div>

{/* Call to Action */ }
<div className="text-center mt-16 animate-fadeInUp" >
  <Card className="max-w-2xl mx-auto hover-lift" >
    <CardContent className="p-8" >
      <h3 className="text-2xl font-bold mb-4" >
        Votre projet mérite le même succès
          </h3>
          < p className = "text-muted-foreground mb-6" >
            Chaque projet est unique.Découvrons ensemble comment nous pouvons 
                transformer votre vision en réalité digitale.
              </p>
  < div className = "flex flex-col sm:flex-row gap-4 justify-center" >
    <button 
                  onClick={ () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }
className = "px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
  >
  Démarrer un projet
    </button>
    < button
onClick = {() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
className = "px-8 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition-colors"
  >
  Voir nos services
    </button>
    </div>
    </CardContent>
    </Card>
    </div>
    </div>
    </section>
  );
};

export default ProjectsSection;