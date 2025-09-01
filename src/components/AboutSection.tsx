import { Users, Target, Award, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet, en délivrant des solutions de qualité supérieure qui dépassent les attentes.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Nous restons à la pointe des technologies pour proposer des solutions innovantes et performantes.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Notre approche collaborative nous permet de créer des partenariats durables avec nos clients.",
    },
    {
      icon: Award,
      title: "Qualité",
      description: "Chaque ligne de code est écrite avec soin, respectant les meilleures pratiques et standards de l'industrie.",
    },
  ];

  return (
    <section id= "about" className = "py-20 bg-muted/30" >
      <div className="container mx-auto px-4" >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" >
          {/* Left Column - Content */ }
          < div className = "animate-slideInLeft" >
            <h2 className="text-4xl font-bold mb-6 gradient-text" >
              À propos de FR - Worker
                </h2>
                < p className = "text-xl text-muted-foreground mb-6" >
                  Depuis notre création, nous nous sommes imposés comme un acteur majeur 
              dans le développement de solutions digitales sur - mesure.
            </p>
    < p className = "text-muted-foreground mb-8 leading-relaxed" >
      Notre équipe d'experts passionnés transforme vos idées en solutions 
              technologiques performantes.Nous combinons créativité, expertise technique 
              et approche méthodologique pour livrer des projets qui génèrent une réelle 
              valeur ajoutée pour votre entreprise.
            </p>

  {/* Key Stats */ }
  <div className="grid grid-cols-2 gap-6 mb-8" >
    <div className="text-center p-4 bg-card rounded-lg border" >
      <div className="text-3xl font-bold text-primary mb-2" > 50 + </div>
        < div className = "text-sm text-muted-foreground" > Projets livrés </div>
          </div>
          < div className = "text-center p-4 bg-card rounded-lg border" >
            <div className="text-3xl font-bold text-primary mb-2" > 98 % </div>
              < div className = "text-sm text-muted-foreground" > Satisfaction client </div>
                </div>
                < div className = "text-center p-4 bg-card rounded-lg border" >
                  <div className="text-3xl font-bold text-primary mb-2" > 5 + </div>
                    < div className = "text-sm text-muted-foreground" > Années d'expérience</div>
                      </div>
                      < div className = "text-center p-4 bg-card rounded-lg border" >
                        <div className="text-3xl font-bold text-primary mb-2" > 24 / 7 </div>
                          < div className = "text-sm text-muted-foreground" > Support </div>
                            </div>
                            </div>

                            < button
  onClick = {() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
className = "px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
  >
  Discutons de votre projet
    </button>
    </div>

{/* Right Column - Values */ }
<div className="animate-fadeInUp" >
  <h3 className="text-2xl font-bold mb-8" > Nos valeurs </h3>
    < div className = "grid grid-cols-1 sm:grid-cols-2 gap-6" >
    {
      values.map((value, index) => (
        <Card 
                  key= { index } 
                  className = "hover-lift"
                  style = {{ animationDelay: `${index * 0.1}s` }}
      >
      <CardContent className="p-6 text-center" >
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4" >
          <value.icon className="w-8 h-8 text-primary" />
            </div>
            < h4 className = "font-semibold mb-3" > { value.title } </h4>
              < p className = "text-sm text-muted-foreground leading-relaxed" >
                { value.description }
                </p>
                </CardContent>
                </Card>
              ))}
</div>
  </div>
  </div>

{/* Team Section */ }
<div className="mt-20" >
  <div className="text-center mb-12 animate-fadeInUp" >
    <h3 className="text-3xl font-bold mb-4" > Notre équipe </h3>
      < p className = "text-xl text-muted-foreground max-w-2xl mx-auto" >
        Des experts passionnés, unis par la même vision: créer des solutions 
              technologiques qui transforment les entreprises.
            </p>
  </div>

  < div className = "grid grid-cols-1 md:grid-cols-3 gap-8" >
  {
    [
      {
        name: "Prosper Félix",
        role: "Developpeur Back-End",
        image: "Felix.jpeg",
        description: "Expert en développement Back-End avec 8 ans d'expérience."
      },
      {
        name: "Eriniaina Rayan",
        role: "Developpeur Front-End",
        image: "Rayan.jpg",
        description: "Expert en développement Front-End avec 5 ans d'expérience."
      },
            ].map((member, index) => (
        <Card 
                key= { index } 
                className = "hover-lift animate-fadeInUp"
                style = {{ animationDelay: `${index * 0.2}s` }}
    >
    <CardContent className="p-6 text-center" >
      <img
                    src={ member.image }
alt = { member.name }
className = "w-24 h-24 rounded-full object-cover mx-auto mb-4"
  />
  <h4 className="font-semibold text-lg mb-2" > { member.name } </h4>
    < p className = "text-primary font-medium mb-3" > { member.role } </p>
      < p className = "text-sm text-muted-foreground" >
        { member.description }
        </p>
        </CardContent>
        </Card>
            ))}
</div>
  </div>
  </div>
  </section>
  );
};

export default AboutSection;