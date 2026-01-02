import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Target,
  Users,
  Globe,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
// no Layout wrapper component; use fragment wrapper
import { Button } from '../components/UI/Button';
import { Card, CardContent } from '../components/UI/Card';
import { Input } from '../components/UI/Input';
import { Textarea } from '../components/UI/Textarea';

const About: React.FC = () => {
  const team = [
    {
      name: 'Jean Dupont',
      role: 'CEO & Fondateur',
      image: '/team/jean.jpg',
      description: 'Architecte avec 15 ans d\'expérience dans la conception innovante.'
    },
    {
      name: 'Marie Lambert',
      role: 'Lead AI Engineer',
      image: '/team/marie.jpg',
      description: 'Docteure en intelligence artificielle et vision par ordinateur.'
    },
    {
      name: 'Thomas Moreau',
      role: 'Product Designer',
      image: '/team/thomas.jpg',
      description: 'Designer UX/UI spécialisé dans les interfaces créatives.'
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Nous repoussons les limites de la conception architecturale grâce à l\'IA.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Nous croyons en la puissance du travail d\'équipe et de l\'intelligence collective.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Accessibilité',
      description: 'Nous rendons la conception architecturale professionnelle accessible à tous.'
    }
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Notre mission
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Révolutionner la façon dont les projets architecturaux sont conçus, 
            en rendant la création de plans accessible à tous grâce à l'intelligence artificielle.
          </p>
        </motion.section>

        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Notre histoire
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Fondée en 2024, BuildAI est née d'une conviction simple : 
                  la conception architecturale devrait être accessible à tous, 
                  pas seulement aux professionnels.
                </p>
                <p>
                  Notre équipe, composée d'architectes expérimentés et d'experts en IA, 
                  a développé une plateforme qui transforme les descriptions textuelles 
                  en plans architecturaux détaillés en quelques secondes.
                </p>
                <p>
                  Aujourd'hui, nous aidons des milliers de personnes à concrétiser 
                  leurs rêves architecturaux, des maisons individuelles aux projets 
                  commerciaux complexes.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
                <Building2 className="w-32 h-32 text-white opacity-80" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Nos valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Notre équipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-gray-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Contactez-nous
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Vous avez des questions ou souhaitez en savoir plus sur BuildAI ? 
              Notre équipe est là pour vous aider.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-600" />
                <span className="text-gray-600 dark:text-gray-300">contact@buildai.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-600" />
                <span className="text-gray-600 dark:text-gray-300">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-600" />
                <span className="text-gray-600 dark:text-gray-300">123 Avenue de l'Innovation, 75001 Paris</span>
              </div>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Prénom" placeholder="Votre prénom" />
                  <Input label="Nom" placeholder="Votre nom" />
                </div>
                <Input 
                  label="Email" 
                  type="email" 
                  placeholder="votre@email.com" 
                />
                <Input 
                  label="Sujet" 
                  placeholder="Objet de votre message" 
                />
                <Textarea
                  label="Message"
                  placeholder="Votre message..."
                  rows={5}
                />
                <Button type="submit" className="w-full">
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </>
  );
};

export default About;