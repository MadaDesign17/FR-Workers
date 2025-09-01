import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Vavisoa Yvanah",
      role: "Directrice Marketing",
      company: "TechInnovate",
      image: "Yvanah.PNG",
      rating: 5,
      text: "FR-Worker a transformé notre vision en une plateforme digitale exceptionnelle. Leur expertise technique et leur approche collaborative ont dépassé toutes nos attentes. Un partenaire de confiance !",
      project: "Plateforme E-commerce",
      metrics: "+150% ROI"
    },
    {
      id: 2,
      name: "Philippe Martin",
      role: "CEO",
      company: "StartupPro",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "L'équipe FR-Worker a livré notre application mobile dans les délais avec une qualité irréprochable. Leur communication transparente et leur réactivité font la différence. Je les recommande vivement !",
      project: "Application Mobile",
      metrics: "50K+ téléchargements"
    },
    {
      id: 3,
      name: "Sarah Leroy",
      role: "Responsable Transformation Digitale",
      company: "CorpSolutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Grâce à FR-Worker, nous avons digitalisé nos processus internes avec succès. Leur solution sur-mesure a amélioré notre productivité de 40%. Une collaboration exemplaire du début à la fin.",
      project: "Automatisation Processus",
      metrics: "+40% productivité"
    }
  ];

  const stats = [
    { number: "50+", label: "Projets réalisés" },
    { number: "98%", label: "Clients satisfaits" },
    { number: "3 ans", label: "Expérience moyenne" },
    { number: "24/7", label: "Support technique" }
  ];

  return (
    <section id= "testimonials" className = "py-20 bg-background" >
      <div className="container mx-auto px-4" >
        <div className="text-center mb-16 animate-fadeInUp" >
          <h2 className="text-4xl font-bold mb-4 gradient-text" >
            Ce que disent nos clients
              </h2>
              < p className = "text-xl text-muted-foreground max-w-2xl mx-auto" >
                La satisfaction client est notre priorité absolue.Découvrez les témoignages 
            de nos partenaires qui nous font confiance.
          </p>
    </div>

  {/* Statistics */ }
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-slideInLeft" >
  {
    stats.map((stat, index) => (
      <div key= { index } className = "text-center" >
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2" >
      { stat.number }
      </div>
    < div className = "text-muted-foreground font-medium" >
    { stat.label }
    </div>
    </div>
    ))
  }
    </div>

  {/* Testimonials Grid */ }
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
  {
    testimonials.map((testimonial, index) => (
      <Card 
              key= { testimonial.id } 
              className = "hover-lift animate-fadeInUp h-full"
              style = {{ animationDelay: `${index * 0.2}s` }}
    >
    <CardContent className="p-8 h-full flex flex-col" >
      {/* Quote Icon */ }
      < div className = "mb-4" >
        <Quote className="w-8 h-8 text-primary/30" />
          </div>

  {/* Rating */ }
  <div className="flex items-center mb-4" >
  {
    [...Array(testimonial.rating)].map((_, i) => (
      <Star 
                      key= { i } 
                      className = "w-5 h-5 text-accent fill-current"
      />
                  ))
  }
    </div>

  {/* Testimonial Text */ }
  <blockquote className="text-muted-foreground mb-6 flex-grow italic leading-relaxed" >
    "{testimonial.text}"
    </blockquote>

  {/* Project Info */ }
  <div className="mb-4 space-y-2" >
    <Badge variant="outline" className = "text-xs" >
      { testimonial.project }
      </Badge>
      < div className = "text-sm font-semibold text-primary" >
        Résultat: { testimonial.metrics }
  </div>
    </div>

  {/* Client Info */ }
  <div className="flex items-center space-x-4 border-t pt-4" >
    <img
                    src={ testimonial.image }
  alt = { testimonial.name }
  className = "w-12 h-12 rounded-full object-cover"
    />
    <div>
    <div className="font-semibold text-foreground" >
      { testimonial.name }
      </div>
      < div className = "text-sm text-muted-foreground" >
        { testimonial.role }
        </div>
        < div className = "text-sm font-medium text-primary" >
          { testimonial.company }
          </div>
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
        Rejoignez nos clients satisfaits
          </h3>
          < p className = "text-muted-foreground mb-6" >
            Découvrez comment nous pouvons transformer votre vision en succès digital.
              </p>
              < div className = "flex flex-col sm:flex-row gap-4 justify-center" >
                <button 
                  onClick={ () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }
className = "px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
  >
  Demander un devis
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

export default TestimonialsSection;