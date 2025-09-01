import { ArrowRight, Code, Smartphone, Cloud } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { number: "50+", label: "Projets réalisés" },
    { number: "98%", label: "Clients satisfaits" },
    { number: "5+", label: "Années d'expérience" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <section id= "home" className = "pt-16 pb-20 bg-gradient-to-br from-background via-background to-muted/20" >
      <div className="container mx-auto px-4" >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-4rem)]" >
          {/* Left Column - Content */ }
          < div className = "animate-slideInLeft" >
            <div className="mb-6" >
              <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4" >
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" > </span>
                Votre partenaire technologique
    </div>

    < h1 className = "text-4xl md:text-6xl font-bold mb-6 leading-tight" >
      Transformons vos{ " " }
  <span className="gradient-text" > idées </span>
  { " " }en solutions{ " " }
  <span className="gradient-text" > digitales </span>
    </h1>

    < p className = "text-xl text-muted-foreground mb-8 leading-relaxed" >
      FR - Worker accompagne votre entreprise dans sa transformation numérique 
                avec des solutions sur - mesure, innovantes et performantes.De la conception 
                au déploiement, nous donnons vie à vos projets les plus ambitieux.
              </p>
    </div>

  {/* CTA Buttons */ }
  <div className="flex flex-col sm:flex-row gap-4 mb-12" >
    <button 
                onClick={ () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }
  className = "px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center group"
    >
    Démarrer un projet
      < ArrowRight className = "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        < button
  onClick = {() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
className = "px-8 py-4 border border-border rounded-lg font-semibold hover:bg-muted transition-colors"
  >
  Voir nos réalisations
    </button>
    </div>

{/* Stats */ }
<div className="grid grid-cols-2 md:grid-cols-4 gap-6" >
{
  stats.map((stat, index) => (
    <div key= { index } className = "text-center" >
    <div className="text-2xl md:text-3xl font-bold text-primary mb-1" >
    { stat.number }
    </div>
  < div className = "text-sm text-muted-foreground" >
  { stat.label }
  </div>
  </div>
  ))
}
  </div>
  </div>

{/* Right Column - Visual Elements */ }
<div className="animate-fadeInUp relative" >
  {/* Main Logo/Illustration */ }
  < div className = "relative mx-auto max-w-md lg:max-w-lg" >
    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-float" > </div>

{/* Central Logo */ }
<div className="relative z-10 w-48 h-48 mx-auto mb-8 bg-card rounded-full shadow-2xl flex items-center justify-center border-4 border-primary/20" >
  <div className="text-6xl font-bold text-primary" > FR </div>
    </div>

{/* Floating Icons */ }
<div className="absolute top-0 left-0 w-16 h-16 bg-card rounded-xl shadow-lg flex items-center justify-center animate-float border" >
  <Code className="w-8 h-8 text-primary" />
    </div>

    < div className = "absolute top-8 right-0 w-16 h-16 bg-card rounded-xl shadow-lg flex items-center justify-center animate-float border" style = {{ animationDelay: '0.5s' }}>
      <Smartphone className="w-8 h-8 text-accent" />
        </div>

        < div className = "absolute bottom-8 left-8 w-16 h-16 bg-card rounded-xl shadow-lg flex items-center justify-center animate-float border" style = {{ animationDelay: '1s' }}>
          <Cloud className="w-8 h-8 text-primary" />
            </div>
            </div>

{/* Tech Stack Badges */ }
<div className="flex flex-wrap justify-center gap-3 mt-8" >
{
  ["React", "Node.js", "PHP", "HTML", "CSS", "TypeScript", "Java", "MySQL"].map((tech, index) => (
    <div 
                  key= { tech }
                  className = "px-4 py-2 bg-card rounded-full text-sm font-medium shadow-sm border animate-fadeInUp"
                  style = {{ animationDelay: `${index * 0.1}s` }}
  >
  { tech }
  </div>
              ))}
</div>
  </div>
  </div>

{/* Scroll Indicator */ }
<div className="text-center mt-16 animate-fadeInUp" >
  <button 
            onClick={ () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }
className = "text-muted-foreground hover:text-primary transition-colors"
  >
  <div className="w-6 h-10 border-2 border-current rounded-full mx-auto mb-2 relative" >
    <div className="w-1 h-3 bg-current rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce" > </div>
      </div>
      < span className = "text-sm" > Découvrir </span>
        </button>
        </div>
        </div>
        </section>
  );
};

export default HeroSection;