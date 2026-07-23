# Angelo Zambrano — Documento maestro de información

> Documento interno de referencia. No es contenido publicable: es la materia prima para el portafolio, el CV, LinkedIn y las entrevistas.
> Última actualización: 2026-07-23

---

## 1. Objetivo y posicionamiento

**Objetivo declarado:** llegar a un rol de **AI Engineer (aplicaciones con LLMs)** — RAG, agentes, tool calling, evals, prompts, embeddings, control de costo y latencia. Objetivo inmediato, **con puerta de entrada aceptada como frontend / full-stack senior**.

**Objetivo de fondo:** salir de Ubidots (donde menos gana y más hace) hacia una empresa de Estados Unidos.

**Restricciones reales (jul 2026):**

- Sin visa de trabajo. Remoto desde Colombia. Full-time.
- Inglés B1 (con práctica 3–4 veces por semana). Trabajo diario 100% en inglés en Keystone.
- No busca activamente todavía.

**Consecuencia:** Google, Uber y Notion no son alcanzables hoy — contratan por hub, casi no abren SWE remoto en LATAM y sus procesos son intensamente verbales. Ese camino pasa por reubicación e inglés C1, no por un portafolio.

**Audiencia decidida (opción D):**

1. **Objetivo real:** startups y scaleups de USA que contratan en LATAM (Deel/EOR o contractor, USD, remoto).
2. **Objetivo real secundario:** producto europeo remoto (Preply, Remote, GitLab y similares).
3. **Norte a 1–2 años:** big tech, condicionado a inglés C1, reubicación y señal técnica adicional.

**Carril declarado:** `Software Engineer · Frontend, Mobile & AI`.

**Implicación de contenido:** como las entrevistas habladas son hoy el eslabón débil, la evidencia escrita y el código público tienen que cargar más peso de lo normal.

**Jugada estratégica más importante (fuera del portafolio):** pedir el trabajo de IA **dentro de Ubidots**. Ya son AI native, ya tienen chat y agentes, y Angelo tiene acceso y contexto. Seis meses construyendo agentes y evals ahí valen más que cualquier proyecto personal, y convierten el empleo que quiere dejar en el activo que lo saca.

---

## 2. Perfil

| Campo | Valor |
|---|---|
| Nombre | Angelo Zambrano |
| Ubicación | Medellín, Colombia (UTC−5, solapamiento total con husos de USA) |
| Email | angelozam17@gmail.com |
| GitHub | github.com/angelozdev |
| LinkedIn | linkedin.com/in/angelozdev |
| Sitio | angelozdev.com |
| Experiencia total | Nov 2020 → hoy = **5 años 8 meses** (el "5+" es válido hasta nov 2026) |
| Educación formal | Ninguna. Autodidacta: Platzi, DataCamp, Udemy |
| Idiomas | Español nativo · Inglés B1 en progreso |

**Auto-evaluación honesta de nivel:**

- **Frontend: Senior.** Es el carril fuerte.
- **Mobile (React Native): Mid.** Con liderazgo técnico y arquitectura propia encima.
- **Backend, arquitectura de sistemas y bases de datos: experiencia limitada** (aunque Quaestor y Keystone la están cerrando).

---

## 3. Trayectoria laboral

### 3.1 GradiWeb — Frontend Developer

- **Fechas:** Nov 2020 – May 2021 (7 meses)
- **Lugar:** Bogotá, Colombia. Full-time.
- **Empresa:** agencia web. ~6 personas.
- **Stack:** React, Next.js, Shopify.
- **Trabajo:** varios proyectos de cliente, rol puramente ejecutor de frontend. Uno de ellos: un marketplace tipo Airbnb enfocado en alojamientos ecológicos.
- **Nota:** primer trabajo. No recuerda los nombres de los proyectos y no hay URLs identificadas. Valor bajo para el portafolio.

### 3.2 Ubidots — Software Engineer

- **Fechas:** May 2021 – Actual (5+ años)
- **Lugar:** Medellín, Colombia. Clientes internacionales.
- **Empresa:** plataforma IoT (B2B: las empresas clientes tienen sus propios usuarios finales). ~10 personas en ingeniería.
- **Estructura:** organización plana, **sin roles formales**. Los ascensos fueron aumentos de sueldo por cada proyecto nuevo, no cambios de título.
- **Advertencia para el CV:** no se puede reclamar el título "Mobile Team Lead" — no existe en papel. Sí se puede describir la responsabilidad: *"Technical lead for mobile"*.

**Tres etapas:**

| Etapa | Periodo | Foco |
|---|---|---|
| 1. Frontend | May 2021 – Feb 2023 | React en la plataforma web |
| 2. Mobile | Feb 2023 – hoy | React Native, liderazgo técnico, arquitectura, despliegues |
| 3. Full-stack | Principios 2026 – hoy | Django + frontend, vertical slicing |

**Sobre la etapa 2 hoy:** el proyecto mobile sigue vivo pero pausado — solo entran features cuando un cliente paga por ellas. Angelo sigue siendo quien hace los despliegues.

**Sobre la etapa 3 — vertical slicing:** cada persona recibe un proyecto y es responsable de todo el ciclo: especificación, desarrollo, code review, testing, QA, y una reunión de entrega formal como si fuera para un cliente externo.

**Por qué ocurrió la etapa 3:** **Ubidots se volvió AI native.** La adopción de IA en el flujo de trabajo permitió que una sola persona cubriera el stack completo. Este es el hecho más vendible del perfil actual: no leyó sobre el cambio, lo vivió.

### 3.3 Keystone Strategy — Software Engineer (Contract)

- **Fechas:** Última semana de marzo 2025 – Actual
- **Lugar:** empresa de Estados Unidos. 100% remoto. Contrato de contractor, dedicación full-time.
- **Empresa:** consultora de estrategia económica, regulatoria y tecnológica. Clientes: Fortune 500, firmas de abogados, agencias gubernamentales y private equity. Nueve áreas de práctica (antitrust, propiedad intelectual, estrategia de IA, salud, investigaciones técnicas). Oficinas en Boston, Washington D.C., San Francisco, Nueva York, Seattle, Londres y Dubái.
- **Equipo:** ~15 personas de múltiples roles (frontend, backend, full-stack, data, QA).
- **Modelo de trabajo:** sin ownership individual — todos trabajan en todas las aplicaciones.
- **Rol:** 100% full-stack. Única empresa estadounidense en la trayectoria.

**Nota sobre el solapamiento:** Ubidots y Keystone corren en paralelo desde marzo 2025. **Decisión tomada: listar ambos**, con Keystone etiquetado explícitamente como *Contract* y fechas a nivel de año. El contrato de contractor legitima la simultaneidad.

---

## 4. Inventario de proyectos

### 4.1 Quaestor ⭐ (destacado principal — proyecto personal, público)

**Repo:** github.com/angelozdev/quaestor · MIT · **518 commits** · construido en **~3 semanas asistido por IA** · activo

**Qué es:** backend de finanzas personales **local-first** con una **capa MCP agent-native**. Corre entero en la máquina del usuario vía Docker Compose; solo la base de datos sale del host y la administra el propio usuario.

**Arquitectura:**

- **Backend:** Python + FastAPI + uvicorn. Migraciones con Alembic.
- **Scheduler:** tarea asyncio lanzada desde el lifespan de FastAPI, corre cada 24h (fetch de FX, materialización, cierre de mes).
- **Frontend:** Next.js + TypeScript con hot reload.
- **Infra:** Docker Compose (`api` + `frontend`), SQLite local por defecto o Postgres remoto para entorno tipo producción. Comandos con `just`.
- **Documentación de diseño:** ADRs en `docs/adr/`.

**La parte de IA:**

- **Servidor MCP propio** que expone las tools del dominio financiero.
- **Chat integrado** que conversa con esas tools: *"¿cómo van mis finanzas?"*, *"¿cuánto puedo gastar este mes?"*. Esa es la razón de existir de la capa MCP.
- **LiteLLM** como capa de abstracción de proveedor: se puede conectar y desconectar cualquier servicio (Claude, MiniMax, el que sea) sin tocar el resto.
- **Tool calling** desde código propio — no es UI sobre IA, es el LLM llamado desde el backend.
- **No hay RAG, embeddings ni evals.** Hueco identificado y prioritario.

**Estado:** en uso real. Angelo lleva sus finanzas personales ahí, con una base de datos desplegada. Público y clonable.

### 4.2 Design system de Ubidots ⭐

**Qué es:** el design system completo de la plataforma Ubidots. Construido **en solitario**. Sigue en desarrollo, pero ya está en producción y **todo lo nuevo sale con él**. Reemplazó el sistema anterior por completo — los componentes viejos quedaron deprecados.

**Alcance (~25 componentes):**

modales · botones · vista Kanban · badges · checkbox · **tabla compleja** (uno de los componentes más usados de la plataforma) · íconos · combobox · date picker · date range picker · dividers · fields · menús · paginadores · search bars · segmented control · status · stepper · tabs · timeline · familia completa de inputs (texto, número, fecha, textarea)

**Fundamentos técnicos:**

- **Tokens** implementados con variables CSS.
- **Agnóstico**: cero lógica de negocio; utilizable fuera de Ubidots.
- **Primitivas: Radix.** Referencia de calidad y accesibilidad: shadcn.
- **Testing**: tests unitarios, tests en Storybook y **accesibilidad verificada**.
- **Publicado en Storybook.**

**La decisión de diseño que más vale contar:** una **especificación propia de 3 capas por componente**, aplicada según su complejidad:

1. **Orquestador**
2. **Lógica**
3. **Presentación / vista**

**Por qué le importa (en sus palabras):** le encanta el frontend de alta calidad, que sea agnóstico, que cualquiera pueda usarlo. Estudió múltiples librerías antes de diseñarlo.

### 4.3 Ubidots Mobile — arquitectura white label ⭐

**Qué es:** versión móvil reducida de la plataforma Ubidots, en React Native para iOS y Android.

**Funcionalidad:**

- Monitoreo de dispositivos IoT en tiempo real.
- **Push notifications por eventos**: cuando un evento hace trigger (por ejemplo, se supera un umbral de temperatura), el usuario recibe la alerta.
- **Sin WebSockets**: los widgets de la plataforma web se embeben en la app, reutilizando toda la lógica web en mobile. Lograr que se vieran bien embebidos fue uno de los retos técnicos grandes.

**La arquitectura white label (el logro central):**

- **Una sola base de código → 10 aplicaciones en producción.**
- Un archivo de configuración por cliente controla colores, imágenes, nombres y textos. La lógica es idéntica para todas.
- Implementado con **schemes en iOS** y **flavors en Android**.
- **Despliegues independientes**: pipeline por aplicación; al hacer merge a `master` se ejecuta y sube automáticamente.
- Cada aplicación tiene su **propia ficha en App Store y en Google Play**.

**Escala e impacto:**

- **50.000+ usuarios**, sumando la app base y las 10 white label.
- **0 crashes graves.** Cobertura de tests.

**Liderazgo:**

- Equipo rotativo de hasta 4 personas; Angelo fue el **único full-time en mobile**.
- El Product Manager recibía y asignaba tickets. Angelo hacía: arquitectura, code review, onboarding, mentoría, y enseñar la arquitectura white label que él diseñó.
- Redacción honesta: *"Technical lead for mobile: owned architecture, code review and onboarding for a rotating team of up to 4 engineers; sole full-time mobile engineer on the product."*

**Enlaces públicos:**

- App Store: https://apps.apple.com/app/ubidots/id1190666194
- Play Store: https://play.google.com/store/apps/details?id=com.ubidots.ubidots

### 4.4 Keystone — sistema de roles y feature flags ⭐

- **Sistema propio de autorización y feature flags**, construido por Angelo, **transversal a las tres aplicaciones**.
- **~10 roles y ~30 flags.** Según el rol se activan o desactivan funcionalidades, betas y accesos.
- **Administrado desde una UI propia** dentro de PeoplePortal.
- **Build vs. buy:** se evaluó un servicio tipo LaunchDarkly. Se optó por implementación propia porque la infraestructura ya existía, debía ser transversal a varias aplicaciones y requería UI de administración propia. **Tomó ~1 semana.**

**Arquitectura del ecosistema Keystone:**

- **Backend gateway compartido** al que apuntan todas las aplicaciones, sobre una base de datos común.
- Cada aplicación tiene además su propio frontend y su propio backend.
- **Glimpse**: registro de horas y facturación. Cada persona anota sus horas; según su rol y tarifa horaria se factura. **Hay dinero real pasando por ahí.** Angelo es dueño de la implementación de Glimpse, front y back.
- **Stacks**: (por documentar)
- **PeoplePortal**: perfil de cada persona, posts de la empresa, administración de roles y flags.

**Stack:** React (principal) y Next.js en frontend; Node y FastAPI en backend.

**Observabilidad:** Sentry en todas las aplicaciones, front y back — se contrató específicamente para mejorar el performance, que mejoró mucho. Angelo administra los errores más críticos: los atiende, los mide y los asigna.

### 4.5 Incidents + Escalation Policies (Ubidots)

- Dos módulos fuertemente acoplados, de los últimos trabajos realizados.
- **End-to-end bajo vertical slicing**: especificación, frontend, backend en Django, code review, testing, QA y reunión de entrega formal.
- **Decisión:** sale del shortlist de proyectos; va como bullet en Experience. Sigue siendo la mejor evidencia de ownership de ciclo completo en el CV.

### 4.6 Otros proyectos de Ubidots (bullets en Experience, no cards)

- **Layers**: antes un dashboard era plano; ahora soporta N capas por dashboard.
- **Widget Collection**: widget de replicación — repite el mismo widget N veces.
- **Functions (frontend)**: editor donde los usuarios configuran sus functions — lenguaje de programación, métodos HTTP, variables de entorno, CORS.
- **AI Chat + Agents (frontend)**: frontend del chat de IA y del sistema de agentes.
- **Accesibilidad**: trabajo de alta calidad de forma consistente desde su ingreso.

---

## 5. Inventario de IA (ordenado por peso real)

| Nivel | Qué | Detalle |
|---|---|---|
| **Construyó** | **Quaestor** | Servidor MCP propio, LiteLLM, tool calling desde backend propio, chat sobre datos reales |
| **Adoptó** | **Flujo AI-native** | Claude Code + Superpowers + spec-driven development. MCPs de Sentry, Bitbucket, Shortcut y Chrome (este último para que Claude Code vea el frontend). Ubidots se volvió AI native y por eso Angelo pasó a cubrir el stack completo |
| **Acompañó** | **Chat y agentes de Ubidots** | **Solo UI.** No tocó la llamada al modelo, streaming ni tool calls. Un "agente" ahí es una entidad que guarda system prompt + temperatura + modelo |
| **Estudia** | **ML / AI Engineering** | Libro *Practical Statistics for Data Scientists*, cursos en DataCamp, roadmap de ML y AI Engineering en curso. Nada construido |

**Huecos declarados:** sin RAG, sin embeddings, **sin evals**. Los evals son lo primero que pregunta una entrevista de AI Engineer — *"¿cómo sabes que tu sistema funciona?"*. Añadirlos a Quaestor es la acción de mayor señal por menor costo.

---

## 6. Open source y proyectos personales

| Proyecto | Estado | Detalle |
|---|---|---|
| **chrono-convert** | Publicado en npm | Conversión y manipulación de tiempo con interfaz encadenable. **Usado en producción en la app mobile de Ubidots.** ~33 descargas/mes |
| **rustify-ts** | Publicado en npm | Tipos `Result` y `Option` de Rust portados a TypeScript. Motivación: el manejo de errores de Rust sin `null`. ~44 descargas/mes |
| **chip-8_rs** | Funciona | Emulador CHIP-8 en Rust. Ejercicio basado en *The Rust Programming Language* |
| **compressor-rust** | Funciona | Ejercicio en Rust |
| **AppleFrameworksiOS** | Exploración | Swift. Solo cursos — **no a nivel de pasar una entrevista** |
| **algorithms** | Activo (2026) | TypeScript |

**Enlaces:** https://www.npmjs.com/package/chrono-convert · https://www.npmjs.com/package/rustify-ts

**Nota sobre descargas:** ~33 y ~44 al mes. **No citar números** — se cuentan por la idea, no por la tracción.

**Estado del perfil de GitHub:** dominado por repos de cursos y retos de 2019–2020. Un visitante ve eso antes que el trabajo real. **Pendiente: limpiar y configurar pinned repos.**

**No hay proyectos privados ni freelance fuera de lo listado.**

---

## 7. Skills (agrupación final para el sitio)

**Frontend** — TypeScript · React · Next.js · Astro · CSS architecture & design tokens · Radix · Storybook · Accessibility (WCAG)

**Mobile** — React Native · iOS schemes / Android flavors · App Store & Play Store releases · Push notifications

**Backend** — Python · FastAPI · Django · Node.js · REST APIs

**AI & Tooling** — LiteLLM · MCP (servidor propio) · Tool calling · Claude Code · Spec-driven development

**Data** — SQL · PostgreSQL · MongoDB · Firebase · ORMs · Alembic

**Testing & Quality** — Vitest · Jest · Testing Library · pytest · Storybook tests · Accessibility tests · Sentry

**DevOps** — Docker / Docker Compose · GitHub Actions · Bitbucket Pipelines · CI/CD

**Fuera a propósito:** Rust y Swift. Están en GitHub para quien mire, pero listarlos invita preguntas que hoy no se pueden sostener. Sin barras de porcentaje ni estrellitas. Solo tecnologías defendibles 20 minutos en entrevista.

---

## 8. Decisiones tomadas para el portafolio

1. **Objetivo:** empleo, no freelance ni marca personal.
2. **Audiencia:** startups/scaleups USA que contratan en LATAM + producto europeo remoto. Big tech como norte declarado, no como audiencia.
3. **Posicionamiento:** AI Engineer como destino, frontend/full-stack senior como puerta de entrada. El sitio sirve a los dos lectores.
4. **Titular del hero:** `Software Engineer · Frontend, Mobile & AI` *(riesgo asumido: tres cosas unidas por "&" no anclan en ninguna)*.
5. **Solapamiento laboral:** listar Ubidots y Keystone; Keystone etiquetado *Contract*; fechas a nivel de año.
6. **Ubidots:** una sola entrada (`Software Engineer · 2021 — Present`), sin títulos inventados; las tres etapas como logros.
7. **GradiWeb:** una línea en Experience, sin proyectos.
8. **Educación:** no hay sección de Educación. Tampoco se listan cursos de Platzi/Udemy/DataCamp.
9. **Formato de proyectos:** **cards cortas**, sin casos de estudio. Consecuencia asumida: la profundidad vive en el CV y en LinkedIn, no en el sitio.
10. **Visuales:** capturas de la plataforma de Ubidots con el design system, sí. Keystone: nada visual. Para design system y Keystone se usan **snippets de código** en vez de capturas. Quaestor: captura del chat con datos de ejemplo.
11. **Contacto:** botón *"copiar email"* (nada de texto plano — molestan los scrapers), LinkedIn y GitHub. **Sin formulario.**
12. **CTA único:** copiar email como acción principal, descargar CV como secundaria.
13. **CV:** generar uno en PDF, en inglés, a partir de este documento.
14. **Idiomas:** se mantienen inglés y español. Todo se escribe dos veces.
15. **Skills:** sección agrupada por categoría, sin niveles declarados.
16. **Métrica principal del mobile:** "1 codebase → 10 apps en producción", con los 50K+ usuarios como soporte.
17. **Machine learning:** fuera del posicionamiento. El ángulo es AI Engineering aplicado, no ML.
18. **Orden de secciones:** `Hero → Projects → Experience → Skills → About → Contact`. Evidencia primero; About cierra antes del contacto.
19. **Proyectos seleccionados (5, en orden):**
    1. **Quaestor** ← destacado principal
    2. Design system de Ubidots
    3. Ubidots Mobile — arquitectura white label
    4. Keystone — roles y feature flags
    5. rustify-ts + chrono-convert (agrupados)
20. **Identidad visual:** foto actual se queda (reciente y adecuada). **Imagen de Open Graph dedicada de 1200×630** con nombre, titular y la métrica de las 10 apps — hoy se usa el retrato suelto, que se recorta mal en LinkedIn. **Favicon propio** en vez del de Astro.
21. **Escritura:** sin blog. En su lugar, **convertir el README de Quaestor en un escrito de verdad** — por qué MCP y no REST, por qué LiteLLM, qué se rompió — apoyado en los ADRs que ya existen en `docs/adr/`. Después, posts en LinkedIn sobre lo mismo. Un blog bilingüe es una promesa que no se va a cumplir con inglés B1.
22. **Señal de búsqueda oculta:** mientras siga empleado, el sitio no dice "Open to roles" — la disponibilidad muestra solo modalidad y ubicación, y el contacto invita a escribir sin declarar búsqueda activa.
23. **Orden de métricas del hero:** white-label primero (la evidencia más fuerte), AI segunda (el destino), para que el hero y el proyecto #1 (Quaestor) cuenten la misma historia.
24. **Confidencialidad Keystone:** el sitio no nombra apps internas (Glimpse, PeoplePortal, Stacks) ni muestra claves reales de flags; el snippet usa nombres genéricos hasta tener OK escrito.
25. **El sitio como demo white-label (diseño = prueba):** switcher de marca en el header con 4 marcas — la actual como default (`az`) más Ember, Tide y Bloom (ficticias). Todo el sitio se rebrandea vía overrides de tokens (`data-brand`), el mismo mecanismo del tema oscuro. Una nota en el hero lo conecta con el logro de las 10 apps. Sustituye la prueba que no se puede publicar (white-labels sin nombrar).
26. **Acento "documento técnico":** rótulos de sección numerados (`// 01 · projects` … `// 05 · contacto`) y highlights de Experience como líneas de diff (`+` verde monoespaciado). El branding actual (IBM Plex, neutros, rótulos `//`) se conserva.

---

## 9. Copy aprobado del sitio

### Hero

**Titular:** `Software Engineer · Frontend, Mobile & AI`

**Stack visible:** TypeScript · React Native · React · Node.js · Python

**Métricas (reemplazan las actuales):**

1. `1 codebase → 10 white-label apps in production`
2. `AI-native workflow: MCP server, tool calling, LLM tooling`
3. `50K+ users across iOS and Android`
4. `Design system powering an entire IoT platform`
5. `Based in Colombia — full overlap with US time zones`

**Eliminadas:** "CI/CD −40% deployment time" y "testing culture" (sin fuente verificable), y "frontend consulting for US-based clients" (ya falsa: en Keystone es full-stack).

**Nota white-label (bajo el stack del hero):** `This site is white-label too — try the brand switcher in the header. One codebase, four brands.`
*(la demo del switcher es la prueba en vivo del logro de las 10 apps — decisión 25)*

### About

> I'm a software engineer based in Medellín, Colombia.
>
> I started out building e-commerce for agency clients. Then I led mobile development for an IoT platform, where I designed a white-label architecture that turns a single React Native codebase into ten independently branded apps — now used by more than 50,000 people to monitor their devices in real time. Along the way I built the design system that the entire platform runs on today.
>
> These days I work across the stack: React and Django at Ubidots, and React, Next.js, Node and FastAPI on internal products for a US strategy consultancy.
>
> What I enjoy most is understanding the *why* behind technical decisions. I'm not satisfied with something just working; I want to know why it works, and make sure whoever comes next can understand it without struggling.
>
> Lately my work has gone AI-native — the team restructured around it, and I've been building with LLMs myself: an MCP server and a provider-agnostic model layer.

**Stats (3):** `5+` años de experiencia · `50K+` usuarios en producción · `10` apps en producción
*(el tercero reemplaza el stat vacío "Clients in US, EU, LATAM")*

**Disponibilidad:** `Remote · Medellín, Colombia (UTC−5)`
*(reemplaza "Available for remote projects"; sin "Open to roles" — la señal de búsqueda se oculta mientras siga empleado)*

### Cards de proyectos

**1. Quaestor** — `PERSONAL`
> Local-first personal finance backend with an agent-native MCP layer. A chat that answers questions about your own data by calling your own tools, with a provider-agnostic LLM layer. Built AI-assisted in ~3 weeks; in daily use.
> `Python · FastAPI · MCP · LiteLLM · Next.js · Docker` → GitHub
> Imagen: captura del chat con datos de ejemplo.

**2. Ubidots Design System**
> The design system the entire Ubidots platform runs on — ~25 components on Radix primitives, CSS-variable tokens, and a 3-layer component spec. Built solo; every new feature ships on it.
> `TypeScript · React · Radix · Storybook · a11y` → sin link público
> Imagen: snippet de código del componente de 3 capas.

**3. Ubidots Mobile** — `PRODUCT`
> One React Native codebase, ten independently branded apps shipping to both stores with their own pipelines. 50K+ users monitoring IoT devices in real time.
> `React Native · TypeScript · Firebase` → App Store · Play Store
> Imagen: capturas de las fichas de tienda.

**4. Role & Feature Flag System** — `KEYSTONE`
> A custom authorization layer spanning three internal applications: ~10 roles, ~30 flags, own admin UI. Built in a week after evaluating off-the-shelf options.
> `React · Next.js · Node · FastAPI` → sin link
> Imagen: snippet de código de la evaluación de un flag.

**5. rustify-ts · chrono-convert** — `OPEN SOURCE`
> Rust's `Result` and `Option` types brought to TypeScript, and a chainable time-conversion library running in production in an app with 50K+ users.
> `TypeScript` → npm · GitHub

### Contacto

**Intro:** `The fastest way to reach me is email. Remote from Medellín, Colombia (UTC−5) — full overlap with US time zones.`
*(sin "Open to roles" — ver decisión 22)*

---

## 10. Pendientes y datos por confirmar

**Acciones**

- [ ] **Añadir evals a Quaestor.** Máxima señal por mínimo costo para roles de AI Engineer.
- [ ] **Pedir el trabajo de IA en Ubidots.** La jugada de mayor impacto del plan completo.
- [ ] Reescribir el README de Quaestor como texto de decisiones técnicas.
- [ ] Limpiar el perfil de GitHub y configurar pinned repos.
- [ ] Generar el CV en PDF (inglés).
- [ ] Diseñar la imagen de Open Graph (1200×630) y el favicon.
- [ ] Capturas: chat de Quaestor, fichas de tienda, snippets de código para design system y Keystone.
- [ ] **OK por escrito** del manager de Ubidots para publicar capturas. Al pedirlo, preguntar también por un Storybook público o permiso para nombrar 2–3 white-labels — única vía de darle prueba verificable a las dos claims más grandes del sitio.
- [ ] **OK por escrito de Keystone** para nombrar apps internas o mostrar snippets reales.
- [ ] Traducir todo el copy aprobado al español (el sitio es bilingüe).

**Datos faltantes**

- [ ] Periodo exacto del crecimiento 0 → 50K usuarios.
- [ ] Cuánto tarda hoy lanzar una app white label nueva (y cuánto tardaría sin ese sistema).
- [ ] Qué es **Stacks** (la tercera app de Keystone).
- [ ] Números de mejora de performance tras adoptar Sentry (antes/después).
- [ ] Cuántas personas usan Glimpse / volumen facturado.
- [ ] Número exacto de componentes del design system y % de adopción.
- [ ] Ratings y descargas reales en App Store / Play Store.
- [x] Storybook del design system: **no es público** — la card va sin link.
- [x] Apps white-label: **no se pueden nombrar** — el "10 apps" queda sin links de prueba.
- [ ] ¿Ubidots es presencial, híbrido o remoto? (el borrador de CV asume remoto).

**Assets faltantes (Task 9 — SEO, Open Graph y assets)**

- [ ] `public/og.png` — Imagen Open Graph 1200×630 con nombre ("Angelo Zambrano"), titular ("Software Engineer · Frontend, Mobile & AI") y métrica ("1 codebase → 10 apps").
- [ ] `public/favicon.svg` — Monograma personalizado. El actual es el ícono por defecto de Astro.
- [ ] `public/cv.pdf` — CV en inglés generado a partir de la sección 11 (Material listo para CV).
- [ ] `public/images/projects/quaestor.webp` — Captura de pantalla del chat de Quaestor con datos de ejemplo. Ratio 16:9 o 4:3.
- [ ] `public/images/projects/ubidots-mobile.webp` — Captura de las fichas de tienda de App Store / Google Play. Ratio 16:9 o 4:3.

---

## 11. Material listo para CV (borradores en inglés)

> Pendiente de revisión de hechos y de ajuste de tono.

**Headline**

> Software Engineer · Frontend, Mobile & AI
> Remote · Medellín, Colombia (UTC−5) — full overlap with US time zones

**Summary**

> Software engineer with 5+ years building products used by tens of thousands of people. I built the design system that powers an entire IoT platform, and the white-label architecture that turns a single React Native codebase into 10 independently branded apps on the App Store and Google Play. Lately my work has gone AI-native: I build with LLMs — MCP servers, tool calling, provider-agnostic model layers — and I care about the *why* behind technical decisions, not just that something works.

**Ubidots — Software Engineer · 2021 – Present · Medellín, Colombia**

- Designed and built the company's design system single-handedly (~25 components: complex data table, combobox, date range picker, Kanban view, timeline) on Radix primitives with CSS-variable tokens, unit + Storybook + accessibility tests, published to Storybook. It replaced the previous system entirely and every new feature now ships on it.
- Defined a 3-layer component specification — orchestrator, logic, view — adopted as the standard for building components across the platform.
- Architected a white-label system that turns one React Native codebase into 10 independently branded, independently deployed apps using iOS schemes and Android flavors, each with its own store listing and CI pipeline triggered on merge to master.
- Technical lead for mobile: owned architecture, code review and onboarding for a rotating team of up to 4 engineers, as the sole full-time mobile engineer. 50K+ users across the base app and white-label builds, with no critical crashes.
- Built push notifications triggered by IoT device events (e.g. temperature threshold breaches), delivering real-time alerts to operators and engineers in the field.
- Shipped Incidents and Escalation Policies end-to-end under a vertical-slicing model — spec, React frontend, Django backend, code review, testing, QA and formal delivery.
- Built platform features used daily: multi-layer dashboards, a widget-replication system, and the frontend for the Functions editor (runtime language, HTTP methods, environment variables, CORS) and the AI chat and agents experience.
- Moved from frontend to full-stack delivery as the team restructured around AI-native workflows.

**Keystone Strategy — Software Engineer (Contract) · 2025 – Present · Remote (US)**

- Full-stack engineer on three interconnected internal applications backed by a shared API gateway and database, serving a global strategy consultancy whose clients include Fortune 500 companies, law firms and government agencies.
- Designed and built a custom role and feature-flag system spanning all three applications — ~10 roles and ~30 flags with a purpose-built admin UI — after a build-vs-buy evaluation against off-the-shelf options; delivered in one week.
- Own the implementation of Glimpse, the firm's time-tracking and billing application, across frontend and backend — real revenue depends on it.
- Own critical error triage across all applications via Sentry (frontend and backend): diagnose, measure and assign, as part of a dedicated performance effort.
- Stack: React, Next.js, Node.js, FastAPI.

**GradiWeb — Frontend Developer · 2020 – 2021 · Bogotá, Colombia**

- Built client web products with React, Next.js and Shopify at a web agency, including an eco-focused accommodation marketplace.

**Projects**

- **Quaestor** — local-first personal finance backend with an agent-native MCP layer. FastAPI, Alembic, an asyncio daily scheduler, Next.js frontend and Docker Compose, with a provider-agnostic LLM layer (LiteLLM) powering a chat that answers questions by calling the app's own tools. Built AI-assisted in ~3 weeks; in daily personal use.
- **chrono-convert** (npm) — chainable time conversion library. Running in production in a mobile app with 50K+ users.
- **rustify-ts** (npm) — Rust's `Result` and `Option` types brought to TypeScript, born out of a conviction that error handling shouldn't rely on `null`.
