import React from 'react';
import { motion } from 'framer-motion';
import {
  FileStack, MessagesSquare, SearchX,
  Truck, Building2,
  MessageSquareText, Sparkles, QrCode, Fingerprint,
  FileText, ArrowRight, ArrowDown, Check, X, Users, Handshake,
} from 'lucide-react';
import { Frame, Cards, Band, itemVariants } from './kit';

const icon = (Icon: React.ComponentType<{ className?: string }>) => <Icon className="w-6 h-6" aria-hidden="true" />;

/** 2 · El problema: trabaja bien, pero no lo puede demostrar. */
export const SlideProblema: React.FC = () => (
  <Frame
    badge="El problema"
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
    badge="Cómo funciona"
    title="Cada entrega se convierte en una prueba"
    lead="Sin planillas ni sistemas complicados: se usa desde el celular."
  >
    <Cards
      cols={4}
      items={[
        { icon: icon(MessageSquareText), tag: 'Paso 1', title: 'Lo cuenta por chat', text: '«Entregué 40 cajas en el almacén a las 9:42.» Y adjunta la foto del remito.' },
        { icon: icon(Sparkles), tag: 'Paso 2', title: 'La IA lo ordena', text: 'Arma el documento y avisa si falta un dato. No inventa nada: la persona lo revisa y lo aprueba.' },
        { icon: icon(QrCode), tag: 'Paso 3', title: 'El comercio confirma', text: 'Escanea un QR y confirma que recibió la mercadería. Sin crearse una cuenta.' },
        { icon: icon(Fingerprint), tag: 'Paso 4', title: 'Queda sellado en Hedera', text: 'Se guarda la huella del documento. Si alguien lo cambia después, se nota.', highlight: true },
      ]}
    />
    <Band tone="deep">Probalo en la demo: un pedido entregado, confirmado y sellado.</Band>
  </Frame>
);

/** 4 · Por qué Hedera: qué viaja, qué prueba y qué no. */
export const SlideHedera: React.FC = () => (
  <Frame
    badge="Por qué Hedera"
    title="Una prueba que nadie puede reescribir"
    lead="Una blockchain hace que un dato sea inalterable, no que sea verdadero. Por eso sumamos la confirmación del comercio."
  >
    <motion.div variants={itemVariants} className="border border-line bg-brand-navy p-4 lg:p-5">
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
        {[
          { i: FileText, t: 'El documento', d: 'Se queda privado en nuestro sistema.' },
          { i: Fingerprint, t: 'Su huella (SHA-256)', d: 'Un código único. No revela nada del contenido.' },
          { i: Check, t: 'Hedera', d: 'Guarda la huella con fecha y hora. Cualquiera la verifica con el QR.' },
        ].map((s, idx) => (
          <React.Fragment key={s.t}>
            {idx > 0 && (
              <span className="text-brand-accent self-center" aria-hidden="true">
                <ArrowDown className="w-5 h-5 md:hidden" />
                <ArrowRight className="w-5 h-5 hidden md:block" />
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
  </Frame>
);

/** 5 · Qué gana cada uno. */
export const SlideValor: React.FC = () => (
  <Frame
    badge="Qué gana cada uno"
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
    badge="Modelo de negocio"
    title="Un abono mensual, accesible para una pyme"
    lead="Precios de prueba: los vamos a ajustar con entrevistas y un piloto."
  >
    <Cards
      cols={3}
      items={[
        { tag: 'Inicial', title: 'ARS 39.900 / mes', text: 'Hasta 150 documentos.' },
        { tag: 'Crecimiento', title: 'ARS 79.900 / mes', text: 'Hasta 600 documentos e indicadores para marcas.', highlight: true },
        { tag: 'Pro', title: 'ARS 149.900 / mes', text: 'Hasta 3.000 documentos, reportes e integraciones.' },
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

/** 7 · Próximos pasos y equipo. */
export const SlideRoadmap: React.FC = () => {
  const team = ['Gastón Persoglia', 'Nahuel Noir', 'Facundo Ayala', 'Federico Fontana', 'Thomas Skarp'];
  return (
    <Frame badge="Próximos pasos" title="Empezamos en el NEA, sirve en cualquier lado">
      <Cards
        cols={3}
        items={[
          { tag: 'Hoy', title: 'MVP en Hedera Testnet', text: 'Chat con IA, PDF, confirmación por QR y huella en Hedera.', highlight: true },
          { tag: 'Después', title: 'Panel para marcas', text: 'Indicadores y un perfil que la distribuidora comparte con un link.' },
          { tag: 'Más adelante', title: 'Acuerdos automáticos', text: 'Contratos inteligentes en Hedera: por ejemplo, un premio por entregas confirmadas.' },
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

/** 8 · Cierre: el proyecto en una frase y lo que el jurado tiene que recordar. */
export const SlideCierre: React.FC = () => (
  <Frame badge="En una frase" title="Las distribuidoras ya trabajan bien. Nosotros hacemos que lo puedan demostrar.">
    <motion.p variants={itemVariants} className="max-w-4xl text-text text-base md:text-lg leading-relaxed">
      Nos dirigimos a <strong className="text-brand-accent">distribuidoras pymes de alimentos y bebidas</strong>. Resolvemos que{' '}
      <strong className="text-brand-accent">trabajan bien pero no lo pueden demostrar</strong>, mediante{' '}
      <strong className="text-brand-accent">un chat con IA que convierte cada entrega en una prueba confirmada por el comercio y sellada en Hedera</strong>.
      Generamos valor porque <strong className="text-brand-accent">su historial se vuelve una carta de presentación para conseguir nuevas marcas</strong>.
      Nuestro modelo de ingresos es <strong className="text-brand-accent">un abono mensual</strong>, y llegamos a los clientes mediante{' '}
      <strong className="text-brand-accent">un piloto en el NEA y las cámaras de distribuidores</strong>.
    </motion.p>
    <motion.p
      variants={itemVariants}
      className="mt-6 border border-line bg-brand-navy px-5 py-5 text-2xl md:text-4xl font-semibold font-display text-text leading-tight"
    >
      Tu historial de operaciones es tu mejor carta de presentación.
    </motion.p>
  </Frame>
);
