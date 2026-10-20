import React from 'react';
import { motion } from 'framer-motion';
import {
  FileStack, MessagesSquare, SearchX,
  Truck, Building2,
  MessageSquareText, Sparkles, QrCode, Fingerprint,
  FileText, ArrowDown, Check, X, Users, Handshake, MapPin, Globe,
} from 'lucide-react';
import { Frame, Cards, Band, Screenshot, itemVariants } from './kit';

const icon = (Icon: React.ComponentType<{ className?: string }>) => <Icon className="w-6 h-6" aria-hidden="true" />;

/** 2 · El problema: trabaja bien, pero no lo puede demostrar. */
export const SlideProblema: React.FC = () => (
  <Frame
    badge="El problema" art="/img/ilus/problema.svg" artAlt="Distribuidor agarrándose la cabeza entre papeles sueltos mientras pierde plata"
    title="Trabajan bien, pero no lo pueden demostrar"
    lead="Las distribuidoras pymes de alimentos y bebidas llevan todo en papel, planillas y WhatsApp. Cuando una marca nueva pregunta «¿cómo trabajás?», no tienen pruebas para mostrar."
  >
    <Cards
      cols={3}
      items={[
        { icon: icon(FileStack), title: 'Papeles sueltos', text: 'Remitos, planillas y mensajes desparramados.' },
        { icon: icon(MessagesSquare), title: 'Reclamos sin respaldo', text: 'Cuando hay un problema con una entrega, nadie puede probar qué pasó.' },
        { icon: icon(SearchX), title: 'Nadie lo confirma', text: 'Todo es «palabra de la distribuidora», sin un tercero que lo avale.' },
      ]}
    />
    <Band>
      <strong>¿Cuántas oportunidades pierde una distribuidora por no poder demostrar todo lo que ya hace bien?</strong>
    </Band>
    <Band tone="deep">
      <strong className="text-brand-accent">Por qué ahora:</strong> todos tienen celular y WhatsApp, la IA ya puede ordenar un mensaje en segundos y sellar un registro en Hedera cuesta una fracción de centavo. Hace unos años, algo así era caro y complicado para una pyme. Hoy no.
    </Band>
  </Frame>
);

/** 3 · Cómo funciona, en cuatro pasos. */
export const SlideComoFunciona: React.FC = () => (
  <Frame
    badge="Cómo funciona" art="/img/ilus/como-funciona.svg" artAlt="Celular con el chat, documento revisado y confirmación por QR"
    title="Cada entrega se convierte en una prueba"
    lead="Sin planillas ni sistemas complicados: se usa desde el celular."
  >
    <Cards
      cols={4}
      items={[
        { icon: icon(MessageSquareText), tag: 'Paso 1', title: 'Lo cuenta por chat', text: '«Entregué 200 cajas en el almacén a las 9:42.» Y adjunta la foto del remito.' },
        { icon: icon(Sparkles), tag: 'Paso 2', title: 'La IA lo controla', text: 'Si el pedido dice 200 cajas y el remito 200, sigue. Si dice 198, lo marca y no se sella hasta aclarar la diferencia. No inventa nada.' },
        { icon: icon(QrCode), tag: 'Paso 3', title: 'El comercio confirma', text: 'Escanea un QR y confirma que recibió la mercadería. Sin crearse una cuenta.' },
        { icon: icon(Fingerprint), tag: 'Paso 4', title: 'Queda sellado en Hedera', text: 'Se guarda la huella del documento. Si alguien lo cambia después, se nota.', highlight: true },
      ]}
    />
    <Screenshot
      className="mt-4"
      src="/img/demo-ia.png"
      alt="Demo: el mensaje de la entrega en el chat y, al lado, el registro ordenado por la IA con pedido, cliente, mercadería, temperatura y hora"
      caption="Demo con datos de ejemplo · el mensaje del chat se convierte en un registro ordenado"
      imgClassName="h-[200px] lg:h-[250px] object-cover object-top"
    />
  </Frame>
);

/** 4 · Por qué Hedera: qué viaja, qué prueba y qué no. */
export const SlideHedera: React.FC = () => (
  <Frame
    badge="Por qué Hedera" art="/img/ilus/hedera.svg" artAlt="Documento que se convierte en una huella guardada en una cadena con candado"
    title="Una prueba que nadie puede reescribir"
    lead="Una blockchain hace que un dato sea inalterable, no que sea verdadero. Por eso sumamos la confirmación del comercio."
  >
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 lg:gap-6 items-start">
    <div>
    <motion.div variants={itemVariants} className="border border-line bg-brand-navy p-4 lg:p-5">
      <div className="flex flex-col gap-2">
        {[
          { i: FileText, t: 'El documento', d: 'Se queda privado en nuestro sistema.' },
          { i: Fingerprint, t: 'Su huella (SHA-256)', d: 'Un código único. No revela nada del contenido.' },
          { i: Check, t: 'Hedera', d: 'Guarda la huella con fecha y hora. Cualquiera la verifica con el QR.' },
        ].map((s, idx) => (
          <React.Fragment key={s.t}>
            {idx > 0 && (
              <span className="text-brand-accent self-center" aria-hidden="true">
                <ArrowDown className="w-4 h-4" />
              </span>
            )}
            <div className="flex-1 bg-surface-deep border border-line p-3 space-y-1">
              <div className="flex items-center gap-2 text-text font-display font-semibold">
                <s.i className="w-5 h-5 text-brand-accent" aria-hidden="true" /> {s.t}
              </div>
              <p className="text-text-muted text-sm leading-snug">{s.d}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </motion.div>
    <div className="mt-px grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-t-0 border-line">
      <motion.div variants={itemVariants} className="bg-surface p-4 lg:p-5 space-y-1">
        <div className="flex items-center gap-2 font-display font-semibold text-text">
          <Check className="w-5 h-5 text-brand-accent" aria-hidden="true" /> Sí prueba
        </div>
        <p className="text-text-muted text-sm leading-snug">Cuándo se registró el documento y que nadie lo cambió después.</p>
      </motion.div>
      <motion.div variants={itemVariants} className="bg-surface p-4 lg:p-5 space-y-1">
        <div className="flex items-center gap-2 font-display font-semibold text-text">
          <X className="w-5 h-5 text-danger" aria-hidden="true" /> No prueba
        </div>
        <p className="text-text-muted text-sm leading-snug">Que la entrega haya pasado de verdad. Eso lo respalda el comercio que confirma.</p>
      </motion.div>
    </div>
    </div>
    <Screenshot
      className="lg:w-[340px] xl:w-[380px]"
      src="/img/demo-sello.png"
      alt="Demo: después del sello se cambió la cantidad a 198 cajas y la app avisa que la huella ya no coincide"
      caption="Demo · si alguien cambia un dato, la huella ya no coincide"
      imgClassName="max-h-[420px] object-contain object-top"
    />
    </div>
  </Frame>
);

/** 5 · Qué gana cada uno. */
export const SlideValor: React.FC = () => (
  <Frame
    badge="Qué gana cada uno" art="/img/ilus/valor-acuerdo.svg" artAlt="Una distribuidora y un comercio cierran un acuerdo con un apretón de manos"
    title="Tu historial es tu carta de presentación"
  >
    <Cards
      cols={2}
      items={[
        {
          icon: icon(Truck),
          tag: 'La distribuidora',
          title: 'Puede demostrar cómo trabaja',
          points: [
            'Menos tiempo armando y buscando papeles.',
            'Pruebas a mano cuando hay un reclamo.',
            'Un historial para mostrarle a una marca nueva.',
          ],
          highlight: true,
        },
        {
          icon: icon(Building2),
          tag: 'La marca',
          title: 'Puede elegir con datos',
          points: [
            'Ve el historial que la distribuidora decide compartir.',
            'Cada número se puede rastrear hasta la entrega confirmada.',
          ],
        },
      ]}
    />
    <Band tone="deep">No prometemos ventas ni contratos: damos pruebas para decidir mejor.</Band>
  </Frame>
);

/** 6 · Modelo de negocio y cómo lo validamos. */
export const SlideModelo: React.FC = () => (
  <Frame
    badge="Modelo de negocio" art="/img/ilus/modelo.svg" artAlt="Barras que crecen con monedas y una flecha hacia arriba"
    title="Un abono mensual, accesible para una pyme"
    lead="Precios de prueba: los vamos a ajustar con entrevistas y un piloto."
  >
    <Cards
      cols={3}
      items={[
        { tag: 'Inicial', title: 'USD 30 / mes', text: 'Hasta 150 documentos.' },
        { tag: 'Crecimiento', title: 'USD 60 / mes', text: 'Hasta 600 documentos e indicadores para marcas.', highlight: true },
        { tag: 'Pro', title: 'USD 120 / mes', text: 'Hasta 3.000 documentos, reportes e integraciones.' },
      ]}
    />
    <Band>
      <strong className="text-brand-accent">Quién paga:</strong> la distribuidora que quiere ser representante oficial o de zona de una marca, ganar prestigio y distribuir mejores productos a mejor precio, demostrando trazabilidad, seguridad y confiabilidad. El comercio y la marca no pagan.
    </Band>
    <Band tone="deep">
      <span className="inline-flex items-start gap-2">
        <Users className="w-5 h-5 shrink-0 text-brand-accent" aria-hidden="true" />
        <span>
          <strong className="text-brand-accent">Cómo llegamos:</strong> con un piloto cara a cara con distribuidoras del NEA, y después a través de cámaras y asociaciones de distribuidores, que llegan a muchas a la vez. Además, cada comercio que confirma una entrega conoce GALCOA+ y lo puede recomendar a otros proveedores.
        </span>
      </span>
    </Band>
  </Frame>
);

/** 8 · Próximos pasos y equipo. */
export const SlideRoadmap: React.FC = () => {
  const team = ['Gastón Persoglia', 'Nahuel Noir', 'Facundo Ayala', 'Federico Fontana', 'Thomas Skarp'];
  return (
    <Frame badge="Próximos pasos" art="/img/ilus/roadmap-fases.svg" artAlt="Escalera de cuatro fases: hoy, piloto en el NEA, acuerdos automáticos y otros países" title="Empezamos en el NEA, sirve en cualquier lado">
      <Cards
        cols={4}
        items={[
          { tag: 'Fase 1 · hoy', title: 'MVP en Hedera Testnet', text: 'Chat con IA, PDF, confirmación por QR y huella en Hedera. Premiado en NEA Tech.', highlight: true },
          { tag: 'Fase 2', title: 'Piloto en el NEA', text: 'Primeras distribuidoras pagando, pase a la red principal de Hedera y panel para marcas.' },
          { tag: 'Fase 3', title: 'Acuerdos automáticos', text: 'Contratos inteligentes en Hedera: por ejemplo, un premio por entregas confirmadas. Todo el país.' },
          { tag: 'Fase 4 · objetivo', title: 'Otros mercados y países', text: 'Cannabis medicinal, farma, agro, objetos de alto valor y operaciones internas. Distribuidoras de América y Europa.' },
        ]}
      />
      <Band>
        <strong className="text-brand-accent">Por qué nosotros:</strong> conocemos las necesidades de las distribuidoras, las pymes y los negocios de la región. Juntamos tecnología, negocio y soluciones.
      </Band>
      <Band tone="deep">
        <span className="inline-flex items-center gap-2 flex-wrap">
          <Handshake className="w-4 h-4 text-brand-accent" aria-hidden="true" />
          <span className="font-mono text-[11px] uppercase tracking-[0.05em] text-brand-accent mr-1">Equipo</span>
          {team.join(' · ')}
        </span>
      </Band>
    </Frame>
  );
};

/** 7 · Mercado potencial: de dónde arrancamos y hasta dónde puede llegar. */
export const SlideMercado: React.FC = () => (
  <Frame
    badge="Mercado potencial · a explorar" art="/img/ilus/mercado-nea-mundo.svg" artAlt="Círculos que crecen del NEA a la Argentina y al mundo"
    title="Empezamos en el NEA. El objetivo es el mundo."
    lead="Cifras de cada sector, para dimensionar hacia dónde puede crecer. No son el mercado que vamos a captar."
  >
    <Cards
      cols={3}
      items={[
        { icon: icon(MapPin), tag: 'Argentina · punto de partida', title: '+14.700 empresas', text: 'de alimentos y bebidas representadas por COPAL. El 95 % son pymes.', highlight: true },
        { icon: icon(Globe), tag: 'Estados Unidos', title: 'US$ 8,2 billones', text: 'por año mueve la distribución mayorista (8,2 millones de millones de dólares). Fuente: NAW.' },
        { icon: icon(Globe), tag: 'Unión Europea · 2023', title: '5,8 millones de empresas', text: 'de comercio y distribución, que facturan € 11,4 billones por año. Fuente: Eurostat.' },
      ]}
    />
    <Band>
      <strong className="text-brand-accent">Escenario de ingresos:</strong> si 1.000 distribuidoras pagan el plan Crecimiento (USD 60 por mes), son <strong>USD 720.000 por año</strong>; con 5.000, <strong>USD 3,6 millones</strong>. Es una cuenta para dimensionar, no una proyección.
    </Band>
  </Frame>
);

/** 9 · Cierre: el proyecto en una frase y lo que el jurado tiene que recordar. */
export const SlideCierre: React.FC = () => (
  <Frame badge="En una frase" art="/img/ilus/cierre.svg" artAlt="Distribuidor seguro con su historial verificado y el pulgar arriba" title="Las distribuidoras ya trabajan bien. Nosotros hacemos que lo puedan demostrar.">
    <motion.p variants={itemVariants} className="max-w-4xl text-text text-base md:text-lg leading-relaxed">
      Nos dirigimos a <strong className="text-text font-semibold">distribuidoras pymes de alimentos y bebidas</strong>. Resolvemos que{' '}
      <strong className="text-text font-semibold">trabajan bien pero no lo pueden demostrar</strong>, mediante{' '}
      <strong className="text-text font-semibold">un chat con IA que convierte cada entrega en una prueba confirmada por el comercio y sellada en Hedera</strong>.
      Generamos valor porque <strong className="text-text font-semibold">su historial se vuelve una carta de presentación para conseguir nuevas marcas</strong>.
      Nuestro modelo de ingresos es <strong className="text-text font-semibold">un abono mensual</strong>, y llegamos a los clientes mediante{' '}
      <strong className="text-text font-semibold">un piloto en el NEA y las cámaras de distribuidores</strong>.
    </motion.p>
    <motion.p
      variants={itemVariants}
      className="mt-6 border border-line bg-brand-navy px-5 py-5 text-2xl md:text-4xl font-semibold font-display text-text leading-tight"
    >
      Tu historial de operaciones es tu mejor carta de presentación.
    </motion.p>
  </Frame>
);
