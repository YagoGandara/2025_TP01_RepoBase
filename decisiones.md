# Decisiones del TP01 - Gándara Yago

## 1) Configuración del entorno
- Identidad de GIT:
    - git config --global user.name "YagoGandara"
    - git config --global user.email "yago@gandara.com.ar"
- Repositorio
    - Cree mi repo, forké el de la cátedra y lo cloné local

----------------------------------------------------

## 2) Flujo de Trabajo
- **Git Flow "lite"**
    - 'main': rama estable
    - 'feature/funcionalidad': desarrollo de forma aparte la nueva funcionalidad.
    - 'hotfix/fix-typo-consola': correción urgente del bug introducido en main (sin frenar la feature creada)

- **¿Por Qué?**
    - Aisla cambios de desarrollo, respecto a la rama estable
    -Facilita revisiones por **Pull Request** antes de integrar a la rama estable
    - Permite responder rápido a incidentes 
    - Personalmente, lo entiendo mas y no me marea

----------------------------------------------------

## 3) Estrategia de Commits
- **Commits atómicos:** un cambio logico por commit, y mensajes bien descriptivos
- Permite la identificacion clara de quien lo hizo, facilita la revision de los Pull Request, y los revert pueden ser mas selectivos

----------------------------------------------------

## 4) Desarrollo de la Funcionalidad
- Rama: 'feature/funcionalidad'
- Cambios:
    - Se mantuvo la funcion base, y se agregó 'analyze(file)' en 'src/app.js'para contar líneas y palabras de 'data/info.txt'
    - Modo CLI: app.js imprime saludo y estadísticas
    -Documentación mínima en 'README.md'
    -Feature aislada, se puede testear y revisar sin afectar a main

----------------------------------------------------

## 5) Simulación y resolución del bug (hotfix)
- **Bug simulado en 'main'**: se introdujo un **typo** en 'console.log' dentro de la función 'saludar()'
- **Rama de Fix**: 'hotfix/fix-typo-consola
- **Integración a 'main'**:
    - Se usó 'git merge --no-ff hotfix/fix-typo-consola' para **preservar un commit de merge** visible en el historial (osea, dejamos claro que fue un hotfix)
- **Llevar el fix a desarrollo**:
    - **Estrategia elegida**: git cherry-pick <SHA-HOTFIX>
    - **Motivo**: Para traer solo el fix realizado, aunque en este caso no existia en desarrollo (si el bug hubiera estado desde un principio, hubiera sido el ideal, asi no cambiaba todo). 
    - **Alternativa considerada**: 'git merge main', por la simplicidad del problema tratado

----------------------------------------------------

## 6) Pull Reguest y Merge
- Se creó un Pull Request desde 'feature/funcionalidad' hacia 'main'
- **Opción de merge**: **Create a merge commit** para **preservar los commits atómicos** del feature
- **Qué se revisó**:
    - Código de src/app.js
    -Documentación en README.md
    - Que el hotfix estuviera preseente en al feature (por el merge desde 'main')
- Resultado: Pull Request mergeado sin conflictos

----------------------------------------------------

## 7) Versionado y tag
- **Convención**: **SemVer** 
    - Se marca 'v1.0' como **primer corte estable** del proyecto
- **Tipo de tag**: **anotado** ('git tag -a v1.0 -m "...") para guardar autor, fecha y mensaje
- **Contenido de 'v1.0'**:
    - Nueva funcionalidad de estadísticas
    -Hotfix aplicado
- Publicación: 'git push origin v1.0'

----------------------------------------------------

## 8) Calidad y trazabilidad

- **Pull Requests obligatorios** con al menos una revision
- **Branch Protection** en 'main' (bloquear el push directo, que requiera si o si un PR)
- **Mensajes de commit** atómicos y descriptivos
- **Tags y Releases** por cada version estable, con notas de cambios
- **Referencias** a algún issue en commitso PRs cuando aplique