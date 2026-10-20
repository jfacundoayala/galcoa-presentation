# GALCOA+ — Enfoque estratégico para distribuidores

> **Propuesta central:** convertimos las operaciones cotidianas de una distribuidora en evidencia comercial verificable, para ayudarla a generar confianza, resolver disputas y acceder a nuevas oportunidades de distribución.

**Estado:** propuesta de posicionamiento y modelo de negocio para validar. Las cifras de este documento son escenarios ilustrativos, no resultados comprobados de GALCOA+.

## 1. El cliente que elegimos

**Cliente principal:** distribuidoras pequeñas y medianas de alimentos, bebidas y productos de consumo masivo en Argentina, comenzando por Corrientes y el NEA.

**Decisor de compra:** dueño, gerente comercial o responsable de operaciones.

**Otros actores:** comercios compradores que confirman entregas y marcas proveedoras que evalúan el desempeño de sus distribuidores.

**Por qué este segmento:** mueven numerosas operaciones, necesitan ampliar su cartera de marcas y pueden carecer de herramientas integradas para documentar y demostrar su desempeño. No buscamos reemplazar ERP empresariales ni resolver la observabilidad industrial 24/7.

## 2. El problema de negocio

Una distribuidora puede operar correctamente durante años y aun así tener dificultades para **demostrar** su capacidad ante una marca nueva.

- Documentos dispersos en papel, planillas, mensajes y comprobantes.
- Entregas y acuerdos difíciles de reconstruir ante reclamos.
- Datos declarados por la distribuidora sin corroboración independiente.
- Falta de indicadores comerciales fácilmente compartibles: entregas, cumplimiento, recurrencia y cobertura.
- Dificultades para convertir un buen historial operativo en argumentos concretos para nuevos acuerdos.

**Hipótesis principal por validar:** las marcas valoran un historial verificable y lo utilizan como un elemento más al seleccionar o ampliar acuerdos con distribuidores.

## 3. Nuestra solución

**GALCOA+ es una plataforma de documentación inteligente, evidencia verificable y acuerdos comerciales programables.**

1. **Registrar:** el distribuidor cuenta una operación por chat, texto o audio y adjunta comprobantes cuando corresponda.
2. **Documentar:** una IA organiza los datos en un documento; otra verifica consistencia y detecta faltantes o contradicciones, sin inventar información.
3. **Aprobar:** el usuario revisa y aprueba el documento; se genera el PDF.
4. **Confirmar:** el receptor puede confirmar la entrega mediante un enlace o QR. Se distingue lo declarado de lo confirmado por terceros.
5. **Proteger evidencia:** se calcula un hash SHA-256 del documento y se registra una evidencia temporal mediante **Hedera Consensus Service (HCS)**.
6. **Construir historial:** el sistema agrega operaciones y genera indicadores que el distribuidor puede compartir con potenciales marcas.
7. **Gestionar acuerdos:** en una etapa posterior, contratos inteligentes permiten automatizar condiciones verificables de determinados acuerdos.

### Qué garantiza y qué no garantiza Hedera

- **Sí:** evidencia de registro y detección de modificaciones posteriores del documento asociado a una huella criptográfica.
- **No:** que la mercadería se haya entregado realmente, que toda la información declarada sea verdadera o que una contraparte haya actuado de buena fe.
- **Cómo fortalecemos la evidencia:** confirmación de terceros, historial auditable, diferenciación de registros declarados y confirmados, y gestión de disputas.

## 4. Propuesta de valor diferenciada

### Para el distribuidor

- Menos tiempo dedicado a crear y recuperar documentación.
- Evidencia más organizada para responder reclamos y demostrar cumplimiento.
- Indicadores de desempeño para presentar a posibles marcas.
- Herramientas para administrar compromisos comerciales sin procesos complejos.
- **Resultado buscado:** aumentar las posibilidades de acceder a nuevos acuerdos y expandir su catálogo.

### Para las marcas

- Mayor visibilidad sobre el historial de operaciones que el distribuidor decide compartir.
- Indicadores con trazabilidad hasta operaciones y confirmaciones específicas.
- Información complementaria para evaluar cobertura, regularidad y cumplimiento.

**Advertencia comercial:** GALCOA+ no garantiza contratos, ventas, solvencia ni reputación. Aporta evidencia para tomar mejores decisiones.

## 5. Smart contracts: dónde encajan

**Caso A — Condiciones de entrega:** las partes acuerdan cantidades, plazos y confirmaciones requeridas; el contrato registra estados y eventos verificables.

**Caso B — Bonificaciones por cumplimiento:** una marca establece un incentivo por alcanzar cierto volumen de entregas confirmadas. Si una fuente confiable valida las condiciones, un contrato puede ejecutar la bonificación cuando corresponda.

**Caso C — Pagos condicionados (etapa posterior):** fondos retenidos y liberados tras una confirmación o resolución de controversias, sujeto a integración con proveedores de pago y controles legales y de seguridad.

**Arquitectura conceptual:**

- **Hedera HCS:** registro de evidencia de operaciones, aprobaciones y confirmaciones.
- **Hedera Smart Contract Service:** ejecución de reglas de contratos programables.
- **Aplicación y fuentes externas:** recopilan hechos del mundo real y los comunican de forma verificable; el contrato inteligente no puede observar por sí solo una entrega física.

**Prioridad MVP:** contratos de estado y cumplimiento sin custodia de dinero. Dejar los pagos automáticos para después de validar el flujo y auditar la seguridad.

## 6. Modelo económico: cuánto podría pagar el cliente

En distribución importa distinguir **facturación** de **ganancia neta**. Una empresa que mueve mucho dinero puede operar con márgenes reducidos.

**Escenarios ilustrativos** (22 días de operación al mes; margen neto supuesto de 4%):

| Perfil | Pedidos/día | Ticket medio | Facturación/mes | Utilidad neta estimada |
|---|---:|---:|---:|---:|
| Pequeña | 8 | ARS 150.000 | ARS 26.400.000 | ARS 1.056.000 |
| Mediana | 25 | ARS 200.000 | ARS 110.000.000 | ARS 4.400.000 |
| Regional | 60 | ARS 300.000 | ARS 396.000.000 | ARS 15.840.000 |

> Son modelos para explorar sensibilidad al precio; **no** representan un promedio verificado del sector. Los márgenes reales varían según rubro, financiación, logística, impuestos y estructura de costos.

### Hipótesis de planes SaaS

> **Actualización 20/10/2026:** los precios de prueba pasan a dólares (USD 30 / 60 / 120 por mes), porque el dólar no queda viejo con la inflación, los costos del producto son en dólares y es la moneda del financiamiento. A una distribuidora se le informa el equivalente en pesos al momento.

| Plan | Precio mensual sugerido para testear | Alcance tentativo |
|---|---:|---|
| Inicial | USD 30 | Hasta 150 documentos, confirmaciones y trazabilidad |
| Crecimiento | USD 60 | Hasta 600 documentos, perfil comercial e indicadores; acuerdos programables básicos |
| Pro | USD 120 | Hasta 3.000 documentos, reportes e integraciones |

Estos valores son **precios de prueba**, no precios finales ni disposición a pagar demostrada. Deben validarse con entrevistas y pilotos; revisar periódicamente costos de IA, infraestructura, almacenamiento y transacciones.

### Cómo argumentar el retorno

Con una utilidad marginal **hipotética** del 4%:

- Un plan de **USD 60/mes** requiere alrededor de **USD 1.500 en ventas mensuales adicionales** para cubrir su costo, siempre que esas ventas generen ese mismo 4% de contribución neta.
- Si una distribuidora consiguiera **USD 10.000 adicionales en ventas/mes** atribuibles al uso de GALCOA+, con el mismo 4% de margen, serían **USD 400 de ganancia adicional** antes de la suscripción y **USD 340 después**.

**Importante:** estas cifras explican un ROI posible; no demuestran que GALCOA+ genere nuevas ventas. El valor también puede surgir de ahorro de tiempo, reducción de disputas y menor costo administrativo.

## 7. Indicadores que debe mostrar el producto

- Entregas registradas y entregas confirmadas por terceros.
- Porcentaje de entregas puntuales (solo cuando existen fechas verificables).
- Clientes/comercios recurrentes, con cuidado de no exponer datos privados.
- Reclamos abiertos, resueltos y tiempos de resolución.
- Volumen de operaciones documentadas por período.
- Historial de acuerdos y condiciones cumplidas.

**Regla de integridad:** nunca presentar registros únicamente declarados como operaciones independientes y verificadas. No crear un puntaje absoluto de confiabilidad sin una metodología transparente.

## 8. Estrategia de implementación

**Fase 1 — MVP demostrable:** chat con IA, validación por segunda IA, PDF, huella en HCS, enlace/QR de confirmación, historial por distribuidora.

**Fase 2 — Valor comercial:** panel de indicadores, perfil compartible para marcas, filtros de registros confirmados, exportación de reportes.

**Fase 3 — Acuerdos programables:** reglas de cumplimiento mediante smart contracts, bonificaciones y alertas de vencimientos.

**Fase 4 — Expansión:** integraciones con sistemas de gestión y pagos condicionados, únicamente si la demanda, el encuadre legal y la seguridad lo justifican.

## 9. Validación de mercado antes de escalar

**Entrevistar al menos a 3 distribuidores y 2 responsables comerciales de marcas.**

Preguntas clave:

1. ¿Cuánto facturan, cuántas operaciones realizan y cuál es su margen aproximado?
2. ¿Cómo documentan hoy las entregas, los reclamos y los acuerdos?
3. ¿Qué evidencia les pidieron al negociar con una marca nueva?
4. ¿Perdieron algún acuerdo por no poder demostrar capacidad o cumplimiento? ¿Qué pasó concretamente?
5. ¿Qué documentación considera creíble una marca y qué confirmaciones exigiría?
6. ¿Pagarían por reportes verificables y gestión de acuerdos? ¿Cuánto y bajo qué condiciones?

**Piloto recomendado:** medir tiempo de documentación por operación, porcentaje de entregas confirmadas, disputas resueltas y uso real de los reportes en conversaciones comerciales. No atribuir aumentos de ventas a GALCOA+ sin evidencia.

## 10. Mensaje comercial y pitch

### Frase de posicionamiento

**«Tu historial de operaciones es tu mejor carta de presentación. GALCOA+ lo convierte en evidencia verificable para demostrar tu capacidad y abrir nuevas oportunidades comerciales».**

### Pitch corto

Muchas distribuidoras trabajan durante años cumpliendo entregas y construyendo relaciones comerciales, pero cuando quieren representar una marca nueva no siempre pueden mostrar evidencia clara de su desempeño.

**GALCOA+ transforma sus operaciones en un historial comercial verificable.** Con inteligencia artificial documentamos transacciones de forma sencilla; con confirmaciones de terceros fortalecemos la evidencia; y con Hedera protegemos la integridad de los registros. Además, los contratos inteligentes pueden facilitar la gestión de compromisos comerciales.

Así, la distribuidora puede resolver mejor sus operaciones cotidianas y presentar información más confiable para negociar nuevos acuerdos.

### Pregunta gancho

**«¿Cuántas oportunidades pierde una distribuidora porque no puede demostrar, con evidencia sólida, todo lo que ya hace bien?»**

## 11. Decisión estratégica

**No competir de entrada con ERP, sistemas GPS ni plataformas de cumplimiento corporativo.** GALCOA+ debe ser simple y específico:

> **Documentación inteligente → Evidencia verificable → Reputación comercial → Acuerdos programables.**

**Primero demostrar el beneficio operativo; luego validar si esa evidencia efectivamente ayuda a conseguir nuevas marcas.**
