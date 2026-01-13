'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Calendar, DollarSign, Monitor, Shield } from 'lucide-react';

const tabVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function InformacoesTabs() {
  return (
    <Tabs defaultValue="o-que-e" className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto gap-2 bg-transparent">
        <TabsTrigger value="o-que-e" className="flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          <span>O que é</span>
        </TabsTrigger>
        <TabsTrigger value="duracao-sessao" className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>Duração Sessão</span>
        </TabsTrigger>
        <TabsTrigger value="duracao-processo" className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>Duração Processo</span>
        </TabsTrigger>
        <TabsTrigger value="valor" className="flex items-center gap-2">
          <DollarSign className="w-4 h-4" />
          <span>Valor</span>
        </TabsTrigger>
        <TabsTrigger value="modalidades" className="flex items-center gap-2">
          <Monitor className="w-4 h-4" />
          <span>Modalidades</span>
        </TabsTrigger>
        <TabsTrigger value="direitos" className="flex items-center gap-2">
          <Shield className="w-4 h-4" />
          <span>Direitos</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="o-que-e">
        <motion.div
          variants={tabVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="bg-card border rounded-lg p-6 md:p-8 mt-6"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            O que é Psicoterapia?
          </h2>

          <div className="space-y-4 text-foreground/80">
            <p className="leading-relaxed">
              A psicoterapia é um processo colaborativo e transparente entre terapeuta e cliente, fundamentado em evidências científicas e técnicas voltadas à compreensão do comportamento humano. É um espaço seguro e confidencial para observar pensamentos, sentimentos e relacionamentos, buscando desenvolver ferramentas que auxiliem a lidar com as complexidades da vida.
            </p>

            <p className="leading-relaxed">
              O objetivo é construir novas perspectivas e recursos para enfrentar desafios, buscando uma vida mais valorosa e consciente. Nosso trabalho visa:
            </p>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
              <h3 className="font-semibold text-foreground mb-2">Benefícios da Psicoterapia:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Ampliar o autoconhecimento: Entender como sua história e o ambiente influenciam quem você é hoje</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Desenvolver habilidades: Fortalecer repertórios emocionais e sociais para lidar melhor com as situações do dia a dia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Manejar sintomas: Aprender formas mais saudáveis de lidar com a ansiedade, o estresse e as variações de humor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Fortalecer vínculos: Buscar formas mais assertivas e conscientes de se relacionar com as pessoas ao seu redor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Flexibilidade nas mudanças: Desenvolver maior capacidade de enfrentamento diante de transições e desafios de vida</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </TabsContent>

      <TabsContent value="duracao-sessao">
        <motion.div
          variants={tabVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="bg-card border rounded-lg p-6 md:p-8 mt-6"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Duração da Sessão
          </h2>

          <div className="space-y-4 text-foreground/80">
            <p className="leading-relaxed">
              Cada sessão de psicoterapia tem duração de <strong className="text-foreground">50 minutos</strong>,
              seguindo o padrão estabelecido pela prática clínica em psicologia.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Estrutura da Sessão</h3>
                <p className="text-sm">
                  Os 50 minutos são dedicados exclusivamente a você, permitindo um espaço adequado para o processo terapêutico.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Pontualidade</h3>
                <p className="text-sm">
                  É importante chegar no horário marcado para aproveitar integralmente
                  o tempo da sessão. O término também respeita o horário estabelecido.
                </p>
              </div>
            </div>

            <p className="leading-relaxed mt-4">
              Esse tempo é cuidadosamente planejado para permitir uma reflexão significativa
              sem gerar sobrecarga emocional, mantendo um equilíbrio saudável no processo terapêutico.
            </p>
          </div>
        </motion.div>
      </TabsContent>

      <TabsContent value="duracao-processo">
        <motion.div
          variants={tabVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="bg-card border rounded-lg p-6 md:p-8 mt-6"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Duração do Processo Terapêutico
          </h2>

          <div className="space-y-4 text-foreground/80">
            <p className="leading-relaxed">
              A duração do processo terapêutico é <strong className="text-foreground">individual e única</strong>,
              variando de acordo com as necessidades, objetivos e ritmo de cada pessoa.
            </p>

            <div className="bg-muted/50 border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-2">Não existe um prazo fixo</h3>
              <p>
                Algumas pessoas possuem demandas pontuais e podem alcançar seus objetivos em alguns meses, enquanto outras demandam de um acompanhamento mais longo. O importante é compreender que o objetivo final na psicoterapia é alta terapêutica, isso é, não significa eliminar todos os problemas que nos trouxeram ao inicio do processo, mas sim desenvolver repertório comportamental capaz de gerenciar com autonomia as demandas da vida.
              </p>
            </div>

            <div className="space-y-3 mt-6">
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Frequência Recomendada</h4>
                  <p className="text-sm">
                    Geralmente, as sessões ocorrem <strong>semanalmente</strong>, mas a frequência
                    pode ser ajustada conforme necessário.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Avaliação Contínua</h4>
                  <p className="text-sm">
                    Periodicamente, revisaremos juntos os objetivos e progressos, ajustando
                    o plano terapêutico conforme necessário.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Autonomia do Cliente</h4>
                  <p className="text-sm">
                    Você tem total liberdade para decidir quando encerrar o processo terapêutico,
                    sempre com orientação profissional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </TabsContent>

      <TabsContent value="valor">
        <motion.div
          variants={tabVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="bg-card border rounded-lg p-6 md:p-8 mt-6"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Valor das Sessões
          </h2>

          <div className="space-y-4 text-foreground/80">
            <p className="leading-relaxed">
              O investimento em psicoterapia é um cuidado com a sua saúde mental e qualidade de vida.
              Os valores são definidos de acordo com a tabela de referência do Conselho Regional de
              Psicologia e podem variar conforme a modalidade de atendimento.
            </p>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-6">
              <h3 className="font-semibold text-foreground mb-4 text-xl">Informações sobre Valores</h3>
              <p className="mb-4">
                Para conhecer os valores atualizados e condições de pagamento, entre em contato
                diretamente. Estou disponível para esclarecer dúvidas e encontrar a melhor forma
                de viabilizar seu atendimento.
              </p>
              <a
                href="https://wa.me/5546999827595?text=Olá! Gostaria de informações sobre o valor das sessões."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Solicitar Informações
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Formas de Pagamento</h4>
                <ul className="space-y-1 text-sm">
                  <li>• PIX</li>
                  <li>• Transferência bancária</li>
                  <li>• Outros (consultar)</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Política de Cancelamento</h4>
                <p className="text-sm">
                  Cancelamentos devem ser comunicados com antecedência mínima para não haver cobrança.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </TabsContent>

      <TabsContent value="modalidades">
        <motion.div
          variants={tabVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="bg-card border rounded-lg p-6 md:p-8 mt-6"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Modalidades de Atendimento
          </h2>

          <div className="space-y-6 text-foreground/80">
            <p className="leading-relaxed">
              Ofereço atendimento em diferentes modalidades para melhor atender suas necessidades
              e preferências, garantindo flexibilidade e acessibilidade ao processo terapêutico.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="border-2 border-primary/30 rounded-lg p-6 hover:border-primary/60 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Atendimento Online</h3>
                <p className="mb-4">
                  Sessões realizadas por videochamada em plataforma segura e confidencial,
                  permitindo atendimento de qualquer lugar.
                </p>
                <div className="space-y-2 text-sm">
                  <h4 className="font-semibold text-foreground">Vantagens:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Comodidade e flexibilidade</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Economia de tempo e deslocamento</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Atendimento de qualquer localidade</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Mesma qualidade do atendimento presencial</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-2 border-primary/30 rounded-lg p-6 hover:border-primary/60 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Atendimento Presencial</h3>
                <p className="mb-4">
                  Sessões realizadas em consultório particular, proporcionando um ambiente
                  acolhedor e profissional para o processo terapêutico.
                </p>
                <div className="space-y-2 text-sm">
                  <h4 className="font-semibold text-foreground">Vantagens:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Contato presencial direto</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Ambiente terapêutico dedicado</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Privacidade e confidencialidade</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Experiência tradicional de terapia</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 border rounded-lg p-4 mt-6">
              <p className="text-sm">
                <strong className="text-foreground">Nota:</strong> A escolha da modalidade é sua.
                Ambas as formas de atendimento são igualmente eficazes e seguem os mesmos padrões
                éticos e profissionais.
              </p>
            </div>
          </div>
        </motion.div>
      </TabsContent>

      <TabsContent value="direitos">
        <motion.div
          variants={tabVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="bg-card border rounded-lg p-6 md:p-8 mt-6"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Direitos do Cliente
          </h2>

          <div className="space-y-4 text-foreground/80">
            <p className="leading-relaxed">
              Como cliente em psicoterapia, você possui direitos garantidos pelo Código de Ética
              Profissional do Psicólogo e pelas legislações vigentes. É fundamental que você
              conheça seus direitos para uma relação terapêutica transparente e respeitosa.
            </p>

            <div className="space-y-4 mt-6">
              <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">1. Sigilo e Confidencialidade</h3>
                <p className="text-sm">
                  Tudo o que for compartilhado nas sessões é estritamente confidencial. O sigilo
                  profissional é um direito seu e um dever ético do psicólogo, salvo situações
                  previstas em lei.
                </p>
              </div>

              <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">2. Respeito e Dignidade</h3>
                <p className="text-sm">
                  Você tem direito a ser tratado com respeito, sem discriminação de qualquer natureza,
                  e com atenção integral durante todo o processo terapêutico.
                </p>
              </div>

              <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">3. Informação e Esclarecimento</h3>
                <p className="text-sm">
                  Você tem direito a receber informações claras sobre o processo terapêutico,
                  métodos utilizados, objetivos e quaisquer dúvidas sobre o atendimento.
                </p>
              </div>

              <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">4. Autonomia e Recusa</h3>
                <p className="text-sm">
                  Você tem total autonomia para aceitar ou recusar qualquer intervenção sugerida,
                  bem como para interromper o processo terapêutico a qualquer momento.
                </p>
              </div>

              <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">5. Acesso às Informações</h3>
                <p className="text-sm">
                  Você tem direito a solicitar informações sobre seu processo terapêutico e, quando
                  necessário, relatórios ou documentos relacionados ao atendimento.
                </p>
              </div>

              <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">6. Qualidade do Atendimento</h3>
                <p className="text-sm">
                  Você tem direito a um atendimento de qualidade, baseado em evidências científicas,
                  realizado por profissional devidamente habilitado e registrado no CRP.
                </p>
              </div>

              <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">7. Encaminhamento Ético</h3>
                <p className="text-sm">
                  Caso o psicólogo identifique que não pode atender adequadamente sua demanda,
                  você tem direito a ser encaminhado a outro profissional ou serviço especializado.
                </p>
              </div>
            </div>

            <div className="bg-muted border rounded-lg p-6 mt-6">
              <h3 className="font-semibold text-foreground mb-2">Tem dúvidas sobre seus direitos?</h3>
              <p className="text-sm mb-3">
                Estou à disposição para esclarecer qualquer questão. Você também pode consultar
                o Código de Ética Profissional do Psicólogo ou entrar em contato com o Conselho
                Regional de Psicologia.
              </p>
              <a
                href="https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm font-medium"
              >
                Ler Código de Ética Profissional →
              </a>
            </div>
          </div>
        </motion.div>
      </TabsContent>
    </Tabs>
  );
}
