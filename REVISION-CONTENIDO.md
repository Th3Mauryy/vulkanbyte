# Revisión de contenido — Vulkanbyte
Fecha: 2026-08-07

## Resumen

El copy en general es concreto y evita el tono de folleto — la mayoría de las frases pasan la prueba de "¿lo entiende en una sola lectura?". Pero encontré 7 hallazgos críticos, todos del mismo tipo: **términos que suenan claros pero no tienen límite escrito**, y que en la práctica se convierten en la primera discusión con un cliente. El más serio es la respuesta de la FAQ "El paquete incluye fotos profesionales" — tal como está escrita, promete algo que probablemente no es lo que se entrega (fotos de banco, no una sesión en el negocio del cliente). El segundo es que "Te contesto el mismo día" se repite cuatro veces y se contradice con "Te respondo en menos de 24 horas" que aparece una vez — son dos promesas distintas, no la misma dicha de dos formas. El tercero es que el precio mensual y los adicionales nunca dicen "+ IVA", a diferencia del precio principal, que sí lo dice siempre.

También hay una inconsistencia de tratamiento (tú/usted) y de persona (yo/nosotros) en dos mensajes de error del formulario, y la descripción de Safesocks en el portafolio es la única parte del sitio que suena a folleto en vez de a alguien de Colima explicando su trabajo.

No encontré: cifras inventadas (años, clientes, tamaño de equipo), garantías de devolución que no existan, ni inconsistencia en el teléfono o en los nombres de los paquetes — esas partes están limpias.

## Hallazgos críticos

1. "El paquete incluye fotos profesionales" — promete lo que probablemente no se entrega
2. "cambios chicos" / "los chicos" — término nunca definido, corazón del ejemplo que motivó esta revisión
3. "Rondas de cambios" — nunca se explica qué es una ronda
4. Mensualidad y adicionales sin "+ IVA" — inconsistente con el precio principal, en un monto que se cobra cada mes
5. "el mismo día" (×4) contradice "menos de 24 horas" (×1) — dos promesas de tiempo de respuesta distintas
6. "Aparecer en Google" — puede leerse como garantía de posicionamiento
7. Plazos de entrega sin decir desde cuándo cuentan

## Hallazgos importantes

8. Pronombre "ella" sin sustantivo cercano en la tarjeta de paquete
9. "sus paquetes" rompe el tú del resto del sitio
10. "Escríbenos" rompe la voz en primera persona ("yo") del resto del sitio
11. Descripción de Safesocks suena a folleto, no al resto del sitio
12. "Hasta 5 / Hasta 8 páginas" sin definir qué cuenta como una página
13. El hero generaliza "10 días de entrega" como si aplicara a los tres paquetes

## Hallazgos menores

Ninguno además de los ya cubiertos arriba — la ortografía y los acentos del resto del sitio están limpios. Revisé carácter por carácter las tres descripciones del portafolio (la advertencia de que no se habían revisado); solo la de Safesocks tiene problema, y es de tono, no de ortografía (hallazgo 11). El "arbtitros" de la versión anterior no reaparece en ningún lado. Teléfono, nombres de paquetes y formato de precio principal son consistentes en todo el sitio.

## Detalle por hallazgo

### 1. "El paquete incluye fotos profesionales" promete algo que probablemente no es cierto
**Ubicación:** `lib/content.ts:202`
**Texto actual:** "El paquete incluye fotos profesionales."
**Problema:** Es la respuesta a "¿Y si no tengo fotos?". Un dueño de refaccionaria que lee esto entiende "van a venir a tomarme fotos profesionales de mi negocio". Pero el paso 3 de "Cómo funciona" dice "Yo escribo los textos y elijo las fotos" — "elijo" implica que son fotos de banco, no una sesión fotográfica en el negocio del cliente. Si el cliente descubre esto después de pagar el anticipo, es la peor clase de sorpresa: se siente engañado en algo que sí estaba escrito, solo que mal.
**Propuesta:** "No hay problema. El paquete incluye fotos de banco (profesionales, pero no tomadas en tu negocio) que elijo según tu giro."
**Gravedad:** Crítico

### 2. "cambios chicos" nunca se define, y en la FAQ se pierde hasta el sustantivo
**Ubicación:** `paquetes-section.tsx:70` (uso) y `lib/content.ts:190` (referencia ambigua)
**Texto actual:**
- Tarjeta de paquete: "Cubre el hosting, el dominio, los respaldos y los cambios chicos."
- FAQ: "¿Puedo pedir cambios después?" → "Sí, los chicos van incluidos en la mensualidad."
**Problema:** Es el ejemplo que motivó esta revisión. "Los chicos" no tiene a qué agarrarse dentro de la misma respuesta — el sustantivo "cambios" solo aparece en OTRA sección de la página. Y aunque se leyera junto, "chico" nunca se define: ¿cambiar un teléfono es chico? ¿Cambiar una foto? ¿Agregar un párrafo? Sin un límite escrito, el cliente asume lo más amplio y tú terminas cotizando gratis o discutiendo por WhatsApp.
**Propuesta:** Cambiar la respuesta de la FAQ a: "Sí. Los cambios chicos —cambiar un texto, una foto, un precio o un dato de contacto— van incluidos en la mensualidad. Si es algo grande, como una sección nueva o un rediseño, se cotiza aparte."
**Gravedad:** Crítico

### 3. "Rondas de cambios" nunca se explica
**Ubicación:** `paquetes-section.tsx:84` (etiqueta "Rondas de cambios" en la ficha técnica) y valores `rondasCambios` en `lib/content.ts:84,101,118`
**Texto actual:** Solo aparece el número (2, 2, 3) junto a la etiqueta "Rondas de cambios", sin explicación en ningún lado del sitio.
**Problema:** "Ronda" es una palabra técnica de agencia, no de conversación. El cliente puede leer "2 rondas de cambios" como "puedo pedir cambios dos veces en total" o "tengo dos semanas para pedir cambios" — cualquier lectura menos la real (un solo mensaje con todo lo que quiere ajustar, revisado de una vez). Es exactamente el tipo de palabra que genera una discusión: "¡pero solo pedí dos cosas, no dos rondas!"
**Propuesta:** Agregar una pregunta nueva a la FAQ: "¿Qué es una 'ronda de cambios'?" → "Es el momento donde me mandas todo lo que quieras ajustar junto, en un solo mensaje. Reviso, hago los cambios y te muestro el resultado. Presencia y Negocio traen 2 rondas; Catálogo trae 3."
**Gravedad:** Crítico

### 4. La mensualidad y los adicionales no dicen "+ IVA"
**Ubicación:** `paquetes-section.tsx:68` (línea de mensualidad) y `lib/content.ts:122-128` (ADICIONALES)
**Texto actual:** El precio principal siempre muestra "+ IVA" al lado (`paquetes-section.tsx:64`). La mensualidad (`$500/mes`, `$800/mes`, `$1,200/mes`) y los 5 adicionales (`$1,500`, `$800`, `$1,200`, `$900`, `+40%`) nunca lo mencionan.
**Problema:** Un cliente que ve "+ IVA" junto al precio grande asume que es la regla del sitio. Si la mensualidad NO lleva IVA agregado, está bien así, pero hay que decirlo — porque si SÍ lleva IVA agregado y nunca se avisa, es una sorpresa que se repite cada mes, no una sola vez.
**Propuesta:** Agregar una nota una sola vez, visible cerca de las tarjetas: "Todos los precios de esta página son + IVA." Si la mensualidad y los adicionales manejan una regla distinta a la del precio principal (por ejemplo, que ya incluyen IVA), la nota debe decir eso en vez — pero tiene que decir algo. No puedo saber cuál de las dos es la real; eso lo defines tú.
**Gravedad:** Crítico

### 5. "el mismo día" contradice "menos de 24 horas"
**Ubicación:** `hero-section.tsx:14`, `contact-section.tsx:132`, `contact-section.tsx:268`, `contact-section.tsx:280` (las cuatro dicen "el mismo día") vs. `contact-section.tsx:223` ("Mensaje enviado. Te respondo en menos de 24 horas.")
**Problema:** No son la misma promesa dicha distinto — son dos promesas distintas. Si alguien escribe un martes a las 10 de la noche, "el mismo día" ya es imposible de cumplir en las próximas dos horas; "menos de 24 horas" sí. El dueño de la refaccionaria del ejemplo tiene un trabajo de tiempo completo hasta las 7pm — "el mismo día" es una promesa que se puede incumplir en cualquier semana ocupada, y en un pueblo chico eso se sabe.
**Propuesta:** Unificar las cuatro apariciones a la versión que sí se puede sostener siempre:
- `hero-section.tsx:14`: "Tu página lista en 10 días. Te contesto en menos de 24 horas. Precios visibles, sin cotizar a ciegas."
- `contact-section.tsx:132`: "¿Tienes un negocio en Colima y Villa de Álvarez? Cuéntame qué necesitas y te contesto en menos de 24 horas."
- `contact-section.tsx:268`: "¿Prefieres una conversación directa? Te contesto en menos de 24 horas."
- `contact-section.tsx:280`: "Respuesta en menos de 24 horas"
**Gravedad:** Crítico

### 6. "Aparecer en Google" puede leerse como garantía de posicionamiento
**Ubicación:** `paquetes-section.tsx:81` (etiqueta de la ficha técnica), campo `apareceEnGoogle` en los 3 paquetes de `lib/content.ts`
**Texto actual:** "Aparecer en Google" (con una palomita, como cualquier otro punto de la lista de especificaciones).
**Problema:** Puesto junto a "WhatsApp y Maps" y "Formulario" como si fuera una característica técnica más, "Aparecer en Google" suena a un resultado garantizado, no a una configuración técnica (que el sitio sea indexable, tenga buen SEO básico, esté dado de alta en Google Business). Nadie puede garantizar en qué posición sale una búsqueda — ni tú ni las agencias grandes — y si el cliente busca su negocio y no sale primero, va a sentir que le fallaste algo que "compró".
**Propuesta:** Cambiar la etiqueta a "SEO básico (indexable en Google)" y agregar una pregunta a la FAQ: "¿Van a hacer que salga primero en Google?" → "No prometo un lugar exacto — eso no lo controla nadie. Lo que sí hago es dejar tu página lista para que Google la encuentre: nombre, dirección y teléfono bien puestos, y tu ficha de Google Maps conectada."
**Gravedad:** Crítico

### 7. Los plazos de entrega no dicen desde cuándo cuentan
**Ubicación:** `hero-section.tsx:27`, `paquetes-section.tsx:76`, campos `entregaDias` en `lib/content.ts`
**Texto actual:** "10 días", "15 días", "25 días" — sin punto de partida.
**Problema:** El Paso 2 de "Cómo funciona" dice "Apartas tu lugar — 60% de anticipo. Ahí arranco", lo cual implica que el conteo empieza con el anticipo, pero nunca lo dice explícitamente junto al plazo. Un cliente puede contar los 10 días desde el primer mensaje de WhatsApp, no desde que pagó, y reclamar el día 10 aunque el anticipo haya llegado el día 5.
**Propuesta:** Agregar al Paso 2 de `pasos-section.tsx` (vía `lib/content.ts:139`): cambiar "60% de anticipo. Ahí arranco." por "60% de anticipo. Desde ese día empiezan a correr los días de entrega."
**Gravedad:** Crítico

### 8. Pronombre "ella" sin sustantivo cercano
**Ubicación:** `paquetes-section.tsx:68-71`
**Texto actual:** "$500/mes" (línea aparte) seguido de "Cubre el hosting, el dominio, los respaldos y los cambios chicos. Sin ella el sitio no se queda en línea."
**Problema:** "Ella" solo puede referirse a "la mensualidad", pero esa palabra nunca aparece escrita en la tarjeta — solo el número "$500/mes". Es una lectura rápida en el celular, entre cliente y cliente: no hay garantía de que conecte el pronombre con el concepto correcto en un solo vistazo.
**Propuesta:** "$500/mes de mensualidad" como encabezado de esa línea, y cambiar la frase a "Cubre el hosting, el dominio, los respaldos y los cambios chicos. Sin pagar la mensualidad, el sitio no se queda en línea."
**Gravedad:** Importante

### 9. "sus paquetes" rompe el tú del resto del sitio
**Ubicación:** `contact-section.tsx:123`
**Texto actual:** `whatsappHref("Hola Vulkanbyte, me interesa conocer más sobre sus paquetes.")`
**Problema:** Todo el sitio tutea ("Tu página", "Te contesto", "Cuéntame", "Escríbeme"). Este es el único lugar donde el mensaje pre-llenado usa "sus" (registro de usted). Es un mensaje que el propio cliente manda, así que además de la inconsistencia, sale raro que el sitio le ponga palabras de "usted" en la boca a alguien a quien todo el resto del sitio le habla de "tú".
**Propuesta:** `whatsappHref("Hola Vulkanbyte, me interesa conocer más sobre tus paquetes.")`
**Gravedad:** Importante

### 10. "Escríbenos" rompe la voz en primera persona del resto del sitio
**Ubicación:** `contact-section.tsx:89` y `contact-section.tsx:116`
**Texto actual:**
- Línea 89: "El formulario no está disponible en este momento. Escríbenos por WhatsApp al {teléfono} y te respondemos directo."
- Línea 116: "No se pudo enviar el mensaje. Intenta de nuevo o escríbenos por WhatsApp al {teléfono}."
**Problema:** El resto del sitio habla en "yo" ("Yo escribo los textos", "Yo solo lo administro", "Ahí arranco", "Escríbeme por WhatsApp" en el hero). Estos dos mensajes de error son los únicos que cambian a "nosotros" ("escríbenos", "respondemos"), lo cual da la impresión de un equipo justo cuando el resto del sitio deja claro que es una sola persona.
**Propuesta:**
- Línea 89: "El formulario no está disponible en este momento. Escríbeme por WhatsApp al {teléfono} y te respondo directo."
- Línea 116: "No se pudo enviar el mensaje. Intenta de nuevo o escríbeme por WhatsApp al {teléfono}."
**Gravedad:** Importante

### 11. La descripción de Safesocks suena a folleto, no al resto del sitio
**Ubicación:** `lib/content.ts:155-160`
**Texto actual:** "Es una marca de calcetín Super Antiderrapante que posee una tinta exclusiva (antislipink) y única en su segmento."
**Problema:** Es la única frase de todo el sitio que se apoya en adjetivos de venta ("exclusiva", "única en su segmento") en vez de datos concretos, justo el tipo de lenguaje que el resto del rediseño evitó a propósito. De paso, "Super" debería llevar acento ("Súper") y "antislipink" se lee pegado, como si fuera un error de captura en vez del nombre de un producto.
**Propuesta:** "Marca de calcetines antiderrapantes con una tinta especial (Antislip Ink) que le da el agarre. Les hice su tienda en línea completa."
**Gravedad:** Importante

### 12. "Hasta 5 / Hasta 8 páginas" sin definir qué cuenta como página
**Ubicación:** campo `paginas` en `lib/content.ts:94` (Negocio) y `:111` (Catálogo)
**Texto actual:** "Hasta 5" / "Hasta 8" (sin más contexto que esas palabras en la ficha técnica).
**Problema:** ¿Un aviso de privacidad cuenta como una página? ¿Una página de preguntas frecuentes? ¿El catálogo de productos es una página o varias? Sin definir la unidad, "hasta 5" es negociable en la mente del cliente hasta que alguien lo pare.
**Propuesta:** Agregar una pregunta a la FAQ: "¿Qué cuenta como una página?" → "Cada sección con su propia dirección web: Inicio, Nosotros, Servicios, Contacto, por ejemplo. Un catálogo completo de productos cuenta como una sola página, aunque tenga muchos productos adentro." *(Esta definición la propongo como punto de partida razonable — confírmala o ajústala según cómo realmente lo manejas.)*
**Gravedad:** Importante

### 13. El hero generaliza "10 días de entrega" como si fuera el plazo de los tres paquetes
**Ubicación:** `hero-section.tsx:27` y `app/opengraph-image.tsx:39` (la misma frase aparece en la imagen que se comparte en WhatsApp/Facebook)
**Texto actual:** "Desde $7,500 + IVA · 10 días de entrega · Colima y Villa de Álvarez"
**Problema:** "Desde $7,500" deja claro que ese precio es el piso, pero "10 días de entrega" no lleva ningún calificador — sin la palabra "desde" antes, se lee como una promesa general. Solo el paquete Presencia entrega en 10 días; Negocio son 15 y Catálogo son 25. Alguien que llega interesado en el paquete Catálogo por esta línea y luego ve "25 días" en la tarjeta correspondiente puede sentir que ya le cambiaron el trato, aunque nunca fue así.
**Propuesta:** "Desde $7,500 + IVA · Precio fijo, sin sorpresas · Colima y Villa de Álvarez" (quita el plazo de esta línea general — ya vive, correcto y específico, en cada tarjeta de paquete). Mismo ajuste en `app/opengraph-image.tsx:39`.
**Gravedad:** Importante

## Preguntas que el cliente haría y el sitio no responde

- **¿Cómo se paga?** (transferencia, efectivo, tarjeta) — No aparece en ningún lado. Es una duda operativa de bajo riesgo si se responde mal, pero genera fricción si nunca se responde: alguien decidido a comprar no debería tener que preguntar esto por WhatsApp antes de poder hacerlo. **Recomendación: sí va al sitio**, como pregunta corta en la FAQ. No puedo escribir la respuesta porque no sé cuáles son tus métodos reales de pago — pero la pregunta debería estar.
- **¿Puedo ver el sitio antes de pagar el resto?** — Se puede inferir del Paso 3 ("Tú solo revisas") pero nunca se dice explícitamente. Es justo el tipo de duda que puede frenar a alguien de escribir en primer lugar, dado que la persona objetivo "desconfía un poco: le han vendido cosas que no entendió antes". **Recomendación: sí va al sitio**, es una de las preguntas de más peso para generar confianza y no depende de contexto — no hace falta la plática en persona para resolverla. Propuesta de pregunta nueva para la FAQ: "¿Veo el sitio antes de pagar el resto?" → "Sí. Te lo muestro armado, ajustamos lo que haga falta, y hasta que estés de acuerdo pagas el resto y lo publico."
- **¿Qué necesito darte yo para empezar?** (logo, dirección, redes sociales, horarios) — No se menciona en ningún lado, más allá de "me cuentas qué haces y a quién le vendes" en el Paso 1. **Recomendación: sí va al sitio**, es información práctica, no emocional — encaja bien como lista corta en la FAQ o como parte del Paso 1. Propuesta: agregar a la descripción del Paso 1 en `lib/content.ts:134`: "45 minutos en tu negocio, sábado. Me cuentas qué haces, a quién le vendes, y me pasas tu logo (si tienes) y tus redes."
- **¿Qué pasa si me quiero cambiar de proveedor después?** — No se responde directamente; "el dominio queda a tu nombre" lo toca de lado pero no dice si el sitio en sí es portable. **Recomendación: mejor dejarla para la plática en persona.** Es una pregunta que casi nadie hace antes de comprar — ponerla en el sitio corre el riesgo de sembrar una duda que el cliente no traía ("¿por qué me estás hablando de que me vaya, si ni he empezado?"). Si alguien la pregunta directamente, se responde mejor con confianza cara a cara que con un párrafo defensivo en la página.
- **¿Qué pasa si crezco y necesito más de lo que trae mi paquete?** — Parcialmente cubierto por "Ver adicionales", pero está detrás de un `<details>` colapsado que muchos no van a abrir. **Recomendación: es menor, no urge un cambio de fondo** — la información ya está, solo no es prominente. Si se quiere resolver, basta con una frase corta debajo de las tarjetas invitando a abrir esa sección, en vez de dejar que el lector adivine que existe.

## Resumen de cambios propuestos

| Ubicación | Qué cambia | Gravedad |
|---|---|---|
| `lib/content.ts:202` | Aclarar que las fotos son de banco, no una sesión en el negocio | Crítico |
| `lib/content.ts:190` | Definir "cambios chicos" en la respuesta de la FAQ | Crítico |
| `paquetes-section.tsx:84` / FAQ nueva | Explicar qué es una "ronda de cambios" | Crítico |
| `paquetes-section.tsx:68`, `lib/content.ts:122-128` | Aclarar si mensualidad/adicionales llevan + IVA | Crítico |
| `hero-section.tsx:14`, `contact-section.tsx:132,268,280` | Unificar "el mismo día" → "menos de 24 horas" | Crítico |
| `paquetes-section.tsx:81`, FAQ nueva | Renombrar "Aparecer en Google" y aclarar que no es garantía de posición | Crítico |
| `lib/content.ts:139` | Aclarar que el plazo de entrega cuenta desde el anticipo | Crítico |
| `paquetes-section.tsx:68-71` | Nombrar "mensualidad" explícitamente, quitar el pronombre "ella" | Importante |
| `contact-section.tsx:123` | "sus paquetes" → "tus paquetes" | Importante |
| `contact-section.tsx:89,116` | "Escríbenos"/"respondemos" → "Escríbeme"/"respondo" | Importante |
| `lib/content.ts:155-160` | Reescribir la descripción de Safesocks sin adjetivos de venta | Importante |
| `lib/content.ts:94,111`, FAQ nueva | Definir qué cuenta como "una página" | Importante |
| `hero-section.tsx:27`, `app/opengraph-image.tsx:39` | Quitar el plazo genérico de 10 días de la línea general | Importante |
| FAQ nueva | Agregar "¿Cómo se paga?" | Menor |
| FAQ nueva | Agregar "¿Veo el sitio antes de pagar el resto?" | Importante (ver arriba) |
| `lib/content.ts:134` | Agregar qué debe tener listo el cliente para el Paso 1 | Importante (ver arriba) |

Nada de esto se tocó — es el reporte completo, sin modificar ningún archivo, a la espera de tu aprobación.
