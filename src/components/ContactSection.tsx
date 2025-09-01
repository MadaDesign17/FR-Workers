import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id= "contact" className = "py-20 bg-muted/30" >
      <div className="container mx-auto px-4" >
        <div className="text-center mb-16 animate-fadeInUp" >
          <h2 className="text-4xl font-bold mb-4 gradient-text" >
            Contactez - nous
            </h2>
            < p className = "text-xl text-muted-foreground max-w-2xl mx-auto" >
              Prêt à transformer vos idées en réalité ? Notre équipe d'experts est là pour vous accompagner.
                </p>
                </div>

                < div className = "grid grid-cols-1 lg:grid-cols-2 gap-16" >
                  {/* Contact Information */ }
                  < div className = "animate-slideInLeft" >
                    <h3 className="text-2xl font-bold mb-8" > Informations de contact </h3>

                      < div className = "space-y-6" >
                        <Card className="hover-lift" >
                          <CardContent className="p-6 flex items-center space-x-4" >
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center" >
                              <Mail className="w-6 h-6 text-primary-foreground" />
                                </div>
                                < div >
                                <h4 className="font-semibold" > Email </h4>
                                  < p className = "text-muted-foreground" > fr.worker@gmail.com</p>
                                    </div>
                                    </CardContent>
                                    </Card>

                                    < Card className = "hover-lift" >
                                      <CardContent className="p-6 flex items-center space-x-4" >
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center" >
                                          <Phone className="w-6 h-6 text-primary-foreground" />
                                            </div>
                                            < div >
                                            <h4 className="font-semibold" > Téléphone </h4>
                                              < p className = "text-muted-foreground" > +261 34 92 846 85 </p>
                                                </div>
                                                </CardContent>
                                                </Card>

                                                < Card className = "hover-lift" >
                                                  <CardContent className="p-6 flex items-center space-x-4" >
                                                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center" >
                                                      <MapPin className="w-6 h-6 text-primary-foreground" />
                                                        </div>
                                                        < div >
                                                        <h4 className="font-semibold" > Adresse </h4>
                                                          < p className = "text-muted-foreground" >
                                                            Madagascar, Antananarivo 101
                                                              </p>
                                                              </div>
                                                              </CardContent>
                                                              </Card>
                                                              </div>

                                                              < div className = "mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20" >
                                                                <h4 className="font-semibold mb-2" > Heures d'ouverture</h4>
                                                                  < div className = "space-y-1 text-muted-foreground" >
                                                                    <div className="flex justify-between" >
                                                                      <span>Lundi - Vendredi </span>
                                                                      < span > 9h00 - 18h00 </span>
                                                                        </div>
                                                                        < div className = "flex justify-between" >
                                                                          <span>Samedi </span>
                                                                          < span > 10h00 - 16h00 </span>
                                                                            </div>
                                                                            < div className = "flex justify-between" >
                                                                              <span>Dimanche </span>
                                                                              < span > Fermé </span>
                                                                              </div>
                                                                              </div>
                                                                              </div>
                                                                              </div>

  {/* Contact Form */ }
  <div className="animate-fadeInUp" >
    <Card className="hover-lift" >
      <CardContent className="p-8" >
        <h3 className="text-2xl font-bold mb-6" > Envoyez - nous un message </h3>

          < form className = "space-y-6" >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
              <div>
              <label className="block text-sm font-medium mb-2" >
                Prénom *
                </label>
                < Input
  type = "text"
  placeholder = "Jean"
  className = "w-full"
    />
    </div>
    < div >
    <label className="block text-sm font-medium mb-2" >
      Nom *
      </label>
      < Input
  type = "text"
  placeholder = "Dupont"
  className = "w-full"
    />
    </div>
    </div>

    < div >
    <label className="block text-sm font-medium mb-2" >
      Email *
      </label>
      < Input
  type = "email"
  placeholder = "jean.dupont@email.com"
  className = "w-full"
    />
    </div>

    < div >
    <label className="block text-sm font-medium mb-2" >
      Entreprise(optionnel)
      </label>
      < Input
  type = "text"
  placeholder = "Votre entreprise"
  className = "w-full"
    />
    </div>

    < div >
    <label className="block text-sm font-medium mb-2" >
      Sujet *
      </label>
      < Input
  type = "text"
  placeholder = "Demande de devis"
  className = "w-full"
    />
    </div>

    < div >
    <label className="block text-sm font-medium mb-2" >
      Message *
      </label>
      < Textarea
  placeholder = "Décrivez votre projet ou votre demande..."
  rows = { 6}
  className = "w-full resize-none"
    />
    </div>

    < Button className = "w-full" size = "lg" >
      <Send className="w-4 h-4 mr-2" />
        Envoyer le message
          </Button>
          </form>
          </CardContent>
          </Card>
          </div>
          </div>
          </div>
          </section>
  );
};

export default ContactSection;